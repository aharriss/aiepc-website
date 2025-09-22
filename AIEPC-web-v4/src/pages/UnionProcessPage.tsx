import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export default function UnionProcessPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#00308f] mb-4">Union Organization Process</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about the step-by-step process of organizing a union in your workplace through the National Labor Relations Board (NLRB).
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#00308f] text-2xl">Step 1: Building Support (30% Threshold)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  At least 30% of employees in your proposed bargaining unit must sign authorization cards expressing interest in union representation. This is the minimum threshold required by the NLRB to proceed with an election.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Authorization cards are confidential and not shared with your employer</li>
                  <li>Cards remain valid for one year from the date signed</li>
                  <li>We help coordinate the card collection process securely</li>
                  <li>Once 30% is reached, we can petition the NLRB for an election</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#00308f] text-2xl">Step 2: Filing the Petition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  After reaching the 30% threshold, we file a petition with the NLRB requesting a secret ballot election. This officially starts the legal process.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>NLRB reviews the petition and determines the appropriate bargaining unit</li>
                  <li>Your employer is notified of the petition</li>
                  <li>NLRB sets the date, time, and location for the election</li>
                  <li>Campaign period begins (typically 4-6 weeks)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#00308f] text-2xl">Step 3: Campaign Period</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  During the campaign period, both the union and employer can communicate with employees about the upcoming election, subject to NLRB rules.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Union representatives can meet with employees to discuss benefits</li>
                  <li>Employers can express their views but cannot threaten or coerce</li>
                  <li>NLRB monitors for unfair labor practices</li>
                  <li>We provide education and support throughout this period</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#00308f] text-2xl">Step 4: Secret Ballot Election</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  The NLRB conducts a secret ballot election where eligible employees vote "Yes" or "No" on union representation.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Elections are held at the workplace during working hours</li>
                  <li>NLRB agents supervise the entire process</li>
                  <li>Simple majority of votes cast determines the outcome</li>
                  <li>Results are certified by the NLRB</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#00308f] text-2xl">Step 5: Collective Bargaining</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  If the union wins the election, we become the exclusive representative for all employees in the bargaining unit and begin negotiating your first contract.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Employer is legally required to bargain in good faith</li>
                  <li>Negotiations cover wages, benefits, working conditions, and more</li>
                  <li>Contract must be ratified by union members</li>
                  <li>Ongoing representation and support provided</li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center pt-8">
              <Button 
                onClick={() => window.location.href = '/join'}
                className="bg-[#00308f] text-white hover:bg-[#5D8AA8] px-8 py-3 text-lg"
              >
                Start Your Union Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}