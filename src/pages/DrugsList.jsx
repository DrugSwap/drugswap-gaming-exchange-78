import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PillIcon, LeafIcon, DropletIcon, CandyIcon, FlaskConicalIcon } from 'lucide-react';

const DrugsList = () => {
  const drugs = [
    { name: 'CannaCoin', icon: <LeafIcon className="text-neon-green" />, description: 'Relaxation and creativity booster', rarity: 'Common' },
    { name: 'CocaCrystal', icon: <DropletIcon className="text-neon-blue" />, description: 'Energy and focus enhancer', rarity: 'Rare' },
    { name: 'LysergicToken', icon: <PillIcon className="text-neon-purple" />, description: 'Mind-expanding experience', rarity: 'Epic' },
    { name: 'EcstasyEther', icon: <CandyIcon className="text-neon-pink" />, description: 'Euphoria and empathy amplifier', rarity: 'Uncommon' },
    { name: 'ShroomShares', icon: <FlaskConicalIcon className="text-neon-orange" />, description: 'Spiritual journey facilitator', rarity: 'Legendary' },
  ];

  return (
    <div className="container mx-auto py-12 gradient-bg min-h-screen text-neon-blue">
      <h1 className="text-5xl font-bold mb-8 text-center neon-text">DrugSwap Game Tokens</h1>

      <section className="mb-12">
        <Card className="bg-dark-light/50 border-neon-purple neon-border">
          <CardHeader>
            <CardTitle className="text-2xl text-neon-yellow">Available Tokens</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-neon-orange">Token</TableHead>
                  <TableHead className="text-neon-orange">Name</TableHead>
                  <TableHead className="text-neon-orange">Description</TableHead>
                  <TableHead className="text-neon-orange">Rarity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {drugs.map((drug) => (
                  <TableRow key={drug.name} className="hover:bg-dark-lighter/50 transition-colors">
                    <TableCell>{drug.icon}</TableCell>
                    <TableCell className="font-medium">{drug.name}</TableCell>
                    <TableCell>{drug.description}</TableCell>
                    <TableCell>{drug.rarity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-neon-yellow">Game Possibilities</h2>
        <Card className="bg-dark-light/50 border-neon-purple neon-border">
          <CardContent className="p-6">
            <ul className="list-disc list-inside text-neon-blue space-y-2">
              <li>Trade tokens with other players to complete your collection</li>
              <li>Stake tokens to earn passive income in DRUGS</li>
              <li>Participate in daily challenges to win rare tokens</li>
              <li>Combine tokens to create unique blends with special effects</li>
              <li>Unlock exclusive platform features by holding specific token combinations</li>
              <li>Compete in leaderboards for the most valuable token portfolio</li>
              <li>Engage in mini-games themed around each token's effects</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-neon-yellow">Telegram Mini App Integration</h2>
        <Card className="bg-dark-light/50 border-neon-purple neon-border">
          <CardContent className="p-6">
            <p className="text-neon-blue mb-4">
              The DrugSwap Telegram Mini App brings the excitement of token trading to your favorite messaging platform. Here's what you can do:
            </p>
            <ul className="list-disc list-inside text-neon-blue space-y-2">
              <li>View your token balance and portfolio value</li>
              <li>Execute quick trades with other Telegram users</li>
              <li>Receive notifications for market updates and rare token availability</li>
              <li>Participate in flash sales and limited-time events</li>
              <li>Share your achievements and rare token acquisitions with friends</li>
              <li>Access a simplified version of the DrugSwap marketplace</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <div className="mt-12 p-6 bg-dark-lighter/50 rounded-lg neon-border">
        <p className="text-sm text-neon-yellow text-center">
          <strong>Disclaimer:</strong> DrugSwap is a fictional platform for entertainment purposes only. 
          We do not condone the use, sale, or distribution of illegal drugs. This platform deals 
          exclusively with imaginary tokens and should not be associated with real drugs or illegal activities.
        </p>
      </div>
    </div>
  );
};

export default DrugsList;