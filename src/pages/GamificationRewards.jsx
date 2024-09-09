import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrophyIcon, CoinsIcon, TargetIcon, BarChartIcon } from "lucide-react";

const GamificationRewards = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Gamification & Rewards</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CoinsIcon className="mr-2" />
                Collect Rare Tokens
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Acquire unique imaginary drug tokens to boost your trading power and earn more rewards.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TargetIcon className="mr-2" />
                Complete Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Participate in daily and weekly challenges to earn bonus rewards and climb the leaderboard.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChartIcon className="mr-2" />
                Increase Your Profit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>The more rare tokens you collect, the higher your profit per hour becomes, giving you an edge in trading.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrophyIcon className="mr-2" />
                Earn Rewards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Achieve milestones and top the leaderboards to earn DRUGS tokens and exclusive benefits.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Reward Distribution</h2>
        <Card>
          <CardContent className="prose max-w-none">
            <ul>
              <li>Daily Trading Volume: Earn DRUGS tokens based on your daily trading activity.</li>
              <li>Rare Token Collection: Receive bonus rewards for collecting complete sets of rare tokens.</li>
              <li>Challenge Completion: Win DRUGS tokens and special NFTs for completing platform challenges.</li>
              <li>Leaderboard Rankings: Top traders receive weekly and monthly reward payouts.</li>
              <li>Community Engagement: Earn points for participating in forums, voting on proposals, and referring new users.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Benefits of Collecting Tokens</h2>
        <Card>
          <CardContent className="prose max-w-none">
            <ul>
              <li>Increased Trading Power: Each rare token boosts your overall trading capacity.</li>
              <li>Higher Staking Rewards: Unlock better staking tiers with more diverse token collections.</li>
              <li>Exclusive Access: Certain platform features and events are only available to users with specific token collections.</li>
              <li>Voting Rights: Influence platform decisions with governance power tied to your token holdings.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Features</h2>
        <p className="text-lg mb-4">
          We're constantly evolving our gamification and rewards system. Stay tuned for these exciting additions:
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>Token Fusion: Combine lower-tier tokens to create rare, more powerful ones.</li>
          <li>Team Battles: Form alliances with other traders for massive reward potential.</li>
          <li>Seasonal Events: Participate in themed trading competitions with unique rewards.</li>
        </ul>
      </section>

      <div className="mt-12 p-4 bg-yellow-100 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Disclaimer:</strong> DrugSwap is a fictional platform for entertainment purposes only. 
          We do not condone the use, sale, or distribution of illegal drugs. This platform deals 
          exclusively with imaginary tokens and should not be associated with real drugs or illegal activities.
        </p>
      </div>
    </div>
  );
};

export default GamificationRewards;