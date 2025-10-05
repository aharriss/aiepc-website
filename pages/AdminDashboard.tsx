import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { MembersTable } from '@/components/admin/MembersTable';
import { RevenueChart } from '@/components/admin/RevenueChart';
import { MemberGrowthChart } from '@/components/admin/MemberGrowthChart';
import { PaymentStatusChart } from '@/components/admin/PaymentStatusChart';
import { RefundProcessor } from '@/components/admin/RefundProcessor';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, DollarSign, TrendingUp, CreditCard, Mail, Bell } from 'lucide-react';


const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [members, setMembers] = useState<any[]>([]);
  const [payments, setPayments] = useState<any[]>([]);
  const [stats, setStats] = useState({ totalMembers: 0, totalRevenue: 0, activeMembers: 0, pendingPayments: 0 });

  useEffect(() => {
    checkAdminStatus();
  }, [user]);

  const checkAdminStatus = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    const { data, error } = await supabase
      .from('members')
      .select('is_admin')
      .eq('id', user.id)
      .single();

    if (error || !data?.is_admin) {
      navigate('/');
      return;
    }

    setIsAdmin(true);
    await fetchData();
  };

  const fetchData = async () => {
    try {
      const [membersRes, paymentsRes] = await Promise.all([
        supabase.from('members').select('*'),
        supabase.from('payment_history').select('*')
      ]);

      if (membersRes.data) setMembers(membersRes.data);
      if (paymentsRes.data) {
        setPayments(paymentsRes.data);
        const totalRevenue = paymentsRes.data
          .filter(p => p.status === 'completed')
          .reduce((sum, p) => sum + parseFloat(p.amount), 0);
        
        setStats({
          totalMembers: membersRes.data?.length || 0,
          totalRevenue,
          activeMembers: membersRes.data?.length || 0,
          pendingPayments: paymentsRes.data.filter(p => p.status === 'pending').length
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportCSV = () => {
    const csv = [
      ['Name', 'Email', 'Phone', 'Profession', 'Joined'],
      ...members.map(m => [
        `${m.first_name} ${m.last_name}`,
        m.email,
        m.phone || '',
        m.profession || '',
        new Date(m.created_at).toLocaleDateString()
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'members.csv';
    a.click();
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (!isAdmin) return null;

  const revenueData = [
    { month: 'Jan', revenue: 4500 },
    { month: 'Feb', revenue: 5200 },
    { month: 'Mar', revenue: 6100 },
    { month: 'Apr', revenue: 7300 },
    { month: 'May', revenue: 8500 },
    { month: 'Jun', revenue: 9200 }
  ];

  const memberGrowthData = [
    { month: 'Jan', members: 45 },
    { month: 'Feb', members: 62 },
    { month: 'Mar', members: 78 },
    { month: 'Apr', members: 95 },
    { month: 'May', members: 112 },
    { month: 'Jun', members: 128 }
  ];

  const paymentStatusData = [
    { name: 'Completed', value: payments.filter(p => p.status === 'completed').length },
    { name: 'Pending', value: payments.filter(p => p.status === 'pending').length },
    { name: 'Failed', value: payments.filter(p => p.status === 'failed').length },
    { name: 'Refunded', value: payments.filter(p => p.status === 'refunded').length }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#00308f]">Admin Dashboard</h1>
          <div className="flex gap-3">
            <Button onClick={() => navigate('/admin/email-templates')} className="bg-[#00308f]">
              <Mail className="w-4 h-4 mr-2" />
              Email Templates
            </Button>
            <Button onClick={() => navigate('/admin/email-notifications')} variant="outline">
              <Bell className="w-4 h-4 mr-2" />
              Send Notifications
            </Button>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Members</CardTitle>
              <Users className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalMembers}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.totalRevenue.toFixed(2)}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Members</CardTitle>
              <TrendingUp className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeMembers}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
              <CreditCard className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pendingPayments}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <RevenueChart data={revenueData} />
          <MemberGrowthChart data={memberGrowthData} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <PaymentStatusChart data={paymentStatusData} />
          </div>
          <RefundProcessor payments={payments} onRefundProcessed={fetchData} />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Members</CardTitle>
          </CardHeader>
          <CardContent>
            <MembersTable members={members} onExportCSV={exportCSV} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
