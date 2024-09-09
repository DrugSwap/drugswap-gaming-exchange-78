import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const TokenInfo = () => {
  const tokenomicsData = [
    { name: 'Top Ethereum Holders', value: 40 },
    { name: 'Marketing/Community', value: 20 },
    { name: 'Team', value: 15 },
    { name: 'Liquidity Pool', value: 25 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">DRUGS Token Information</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is DRUGS token?</h2>
        <p className="text-lg">
          DRUGS is the native token of the DrugSwap platform, used for trading imaginary drug tokens, staking, and earning rewards in our gamified ecosystem.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tokenomics</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Token Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={tokenomicsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {tokenomicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Token Details</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Total Supply: 1,000,000,000 DRUGS</li>
                <li>Distribution to top Ethereum holders: 40%</li>
                <li>Marketing/Community wallet: 20%</li>
                <li>Team wallet: 15%</li>
                <li>Liquidity pool: 25%</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How DRUGS is used in the DrugSwap ecosystem</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Trading: Use DRUGS to buy and sell imaginary drug tokens</li>
          <li>Staking: Earn rewards by locking up your DRUGS tokens</li>
          <li>Rewards: Receive DRUGS for participating in platform activities and challenges</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Airdrop Information</h2>
        <p className="text-lg mb-4">
          Users can earn DRUGS tokens through our upcoming airdrop. Stay tuned for announcements on how to participate and qualify for free DRUGS tokens!
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Future Roadmap</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Q3 2024: Token launch on Ethereum network</li>
          <li>Q4 2024: Implementation of staking and rewards system</li>
          <li>Q1 2025: Expansion of token utility within the DrugSwap ecosystem</li>
          <li>Q2 2025: Partnerships with other DeFi projects</li>
        </ul>
      </section>

      <div className="mt-12 p-4 bg-yellow-100 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Disclaimer:</strong> DrugSwap and DRUGS tokens are purely fictional and for entertainment purposes only. 
          We do not condone the use, sale, or distribution of illegal drugs. This platform deals exclusively with imaginary tokens 
          and should not be associated with real drugs or illegal activities.
        </p>
      </div>
    </div>
  );
};

export default TokenInfo;