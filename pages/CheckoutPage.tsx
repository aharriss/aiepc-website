import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/Layout";
import StripePaymentForm from "@/components/StripePaymentForm";
import { useToast } from "@/hooks/use-toast";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handlePaymentSuccess = () => {
    toast({
      title: "Payment Successful!",
      description: "Welcome to AIEPC! Redirecting to your dashboard...",
    });
    setTimeout(() => {
      navigate("/member-dashboard");
    }, 2000);
  };

  const totalAmount = 12350; // $123.50 in cents

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#00308f] mb-2">Complete Your Membership</h1>
            <p className="text-gray-600">Join AIEPC and start protecting your rights in the workplace</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#00308f]">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>AIEPC Membership (Annual)</span>
                  <span className="font-semibold">$120.00</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Processing Fee</span>
                  <span>$3.50</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold text-[#00308f]">
                  <span>Total</span>
                  <span>$123.50</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <h3 className="font-semibold text-[#00308f] mb-2">Membership Benefits:</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Legal protection and representation</li>
                    <li>• Legal defense power</li>
                    <li>• Access to resources and training</li>
                    <li>• Community support network</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Payment Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#00308f]">Payment Information</CardTitle>
              </CardHeader>
              <CardContent>
                <StripePaymentForm amount={totalAmount} onSuccess={handlePaymentSuccess} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
