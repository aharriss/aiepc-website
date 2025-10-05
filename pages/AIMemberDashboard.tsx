import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import Layout from "@/components/Layout";
import ProfileSection from "@/components/dashboard/ProfileSection";
import MembershipTierSection from "@/components/dashboard/MembershipTierSection";
import PaymentHistorySection from "@/components/dashboard/PaymentHistorySection";
import UpcomingDuesSection from "@/components/dashboard/UpcomingDuesSection";
import MembershipDurationChart from "@/components/dashboard/MembershipDurationChart";
import PaymentTrendsChart from "@/components/dashboard/PaymentTrendsChart";
import SubscriptionSettings from "@/components/dashboard/SubscriptionSettings";
import { Skeleton } from "@/components/ui/skeleton";

export default function AIMemberDashboard() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [member, setMember] = useState<any>(null);
  const [tier, setTier] = useState<any>(null);
  const [payments, setPayments] = useState<any[]>([]);
  const [nextPayment, setNextPayment] = useState<any>(null);

  const fetchDashboardData = async () => {
    if (!user) return;

    try {
      setLoading(true);

      // Fetch member data
      const { data: memberData } = await supabase
        .from("members")
        .select("*")
        .eq("id", user.id)
        .single();

      setMember(memberData);

      if (memberData) {
        // Fetch membership tier
        const { data: tierData } = await supabase
          .from("membership_tiers")
          .select("*")
          .eq("id", memberData.membership_tier_id)
          .single();

        setTier(tierData);

        // Fetch payment history
        const { data: paymentHistory } = await supabase
          .from("payment_history")
          .select("*")
          .eq("member_id", user.id)
          .order("date", { ascending: false });

        setPayments(paymentHistory || []);

        // Fetch next payment
        const { data: upcomingPayment } = await supabase
          .from("dues_payments")
          .select("*")
          .eq("member_id", user.id)
          .eq("status", "pending")
          .order("payment_date", { ascending: true })
          .limit(1)
          .single();

        setNextPayment(upcomingPayment);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [user]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto p-8 space-y-6">
          <Skeleton className="h-12 w-64" />
          <div className="grid md:grid-cols-2 gap-6">
            <Skeleton className="h-64" />
            <Skeleton className="h-64" />
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-[#00308f] mb-8">Member Dashboard</h1>
        
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <ProfileSection member={member} onUpdate={fetchDashboardData} />
          </div>
          <div>
            <MembershipTierSection tier={tier} billingCycle={nextPayment?.billing_cycle || "monthly"} />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <UpcomingDuesSection nextPayment={nextPayment} />
          <SubscriptionSettings 
            currentBillingCycle={nextPayment?.billing_cycle || "monthly"} 
            memberId={member?.id}
            onUpdate={fetchDashboardData}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <MembershipDurationChart memberSince={member?.created_at} />
          <PaymentTrendsChart payments={payments} />
        </div>

        <PaymentHistorySection payments={payments} />
      </div>
    </Layout>
  );
}
