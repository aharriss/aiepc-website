import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Layout from "@/components/Layout";
export default function AIMemberDashboard() {
  return (
    <Layout>
      <div className="flex flex-col items-center p-8">
        {/* Header */}
        <div className="w-full max-w-5xl mb-10 text-center">
          <h1 className="text-3xl font-bold text-[#00308f] mb-2">AI Union Member Dashboard</h1>
          <p className="text-gray-600">Stay updated on your membership, contributions, and impact.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
          {/* Membership Status */}
          <Card className="border-[#A9A9A9]">
            <CardContent className="p-6">
              <h2 className="font-bold text-lg text-[#00308f] mb-2">Membership Status</h2>
              <p className="text-gray-800">👤 Active Member</p>
              <p className="text-gray-600 text-sm">Joined: Aug 2025</p>
            </CardContent>
          </Card>

          {/* Next Payment */}
          <Card className="border-[#A9A9A9]">
            <CardContent className="p-6">
              <h2 className="font-bold text-lg text-[#00308f] mb-2">Next Payment</h2>
              <p className="text-gray-800">💳 $20 due Oct 1, 2025</p>
              <Button className="mt-4 w-full bg-[#00308f] text-white hover:bg-[#5D8AA8]">
                Update Payment Method
              </Button>
            </CardContent>
          </Card>

          {/* Impact Tracker */}
          <Card className="border-[#A9A9A9]">
            <CardContent className="p-6">
              <h2 className="font-bold text-lg text-[#00308f] mb-2">Impact Tracker</h2>
              <p className="text-gray-800 text-sm mb-2">Your dues are funding change:</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4">
                <li>3 AI-related disputes defended</li>
                <li>2 new fairness campaigns launched</li>
                <li>50 workers trained in "AI Rights at Work"</li>
              </ul>
              <Progress value={65} className="bg-[#B0B7BC]" />
              <p className="text-xs text-gray-600 mt-2">65% of campaign goal reached this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Resources */}
        <div className="w-full max-w-5xl mt-12">
          <h2 className="text-2xl font-bold text-[#00308f] mb-6 text-center">Member Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-[#A9A9A9]">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-[#00308f] mb-2">⚖ Know Your Rights</h3>
                <p className="text-sm text-gray-700 mb-4">Learn what protections you have against unfair AI use at work.</p>
                <Button className="bg-[#00308f] text-white hover:bg-[#5D8AA8] w-full">View Rights</Button>
              </CardContent>
            </Card>

            <Card className="border-[#A9A9A9]">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-[#00308f] mb-2">📢 Report AI Misuse</h3>
                <p className="text-sm text-gray-700 mb-4">Report cases of harmful or exploitative AI practices in your workplace.</p>
                <Button className="bg-[#00308f] text-white hover:bg-[#5D8AA8] w-full">Report Now</Button>
              </CardContent>
            </Card>

            <Card className="border-[#A9A9A9]">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-[#00308f] mb-2">🤝 Connect with Members</h3>
                <p className="text-sm text-gray-700 mb-4">Join discussions, share stories, and build solidarity across workplaces.</p>
                <Button className="bg-[#00308f] text-white hover:bg-[#5D8AA8] w-full">Join Forum</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}