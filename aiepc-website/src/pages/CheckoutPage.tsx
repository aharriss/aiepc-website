import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/Layout";

export default function CheckoutPage() {
  const [paymentForm, setPaymentForm] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
    billingAddress: "",
    city: "",
    state: "",
    zipCode: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setPaymentForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing here
    alert("Payment processed successfully! Welcome to AI Union!");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#00308f] mb-2">Complete Your Membership</h1>
            <p className="text-gray-600">Join AI Union and start protecting your rights in the workplace</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#00308f]">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>AI Union Membership (Annual)</span>
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
                    <li>• Collective bargaining power</li>
                    <li>• Access to union resources and training</li>
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={paymentForm.cardNumber}
                      onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                      className="border-[#A9A9A9]"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/YY"
                        value={paymentForm.expiryDate}
                        onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                        className="border-[#A9A9A9]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={paymentForm.cvv}
                        onChange={(e) => handleInputChange("cvv", e.target.value)}
                        className="border-[#A9A9A9]"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="nameOnCard">Name on Card</Label>
                    <Input
                      id="nameOnCard"
                      placeholder="John Doe"
                      value={paymentForm.nameOnCard}
                      onChange={(e) => handleInputChange("nameOnCard", e.target.value)}
                      className="border-[#A9A9A9]"
                    />
                  </div>

                  <Separator />

                  <h3 className="font-semibold text-[#00308f]">Billing Address</h3>
                  
                  <div>
                    <Label htmlFor="billingAddress">Address</Label>
                    <Input
                      id="billingAddress"
                      placeholder="123 Main Street"
                      value={paymentForm.billingAddress}
                      onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                      className="border-[#A9A9A9]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        placeholder="New York"
                        value={paymentForm.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className="border-[#A9A9A9]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        placeholder="NY"
                        value={paymentForm.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                        className="border-[#A9A9A9]"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      placeholder="10001"
                      value={paymentForm.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      className="border-[#A9A9A9]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#00308f] text-white hover:bg-[#5D8AA8] py-3 text-lg font-semibold"
                  >
                    Complete Payment - $123.50
                  </Button>
                  
                  <p className="text-xs text-gray-600 text-center mt-2">
                    $2 pledge is refundable if union formation does not proceed. <a href="/refund-policy" className="text-[#00308f] underline hover:text-[#5D8AA8]">[Read full policy]</a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}