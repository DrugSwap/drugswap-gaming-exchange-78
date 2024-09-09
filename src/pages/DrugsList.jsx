import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PillIcon, LeafIcon, DropletIcon, CandyIcon, FlaskConicalIcon } from 'lucide-react';

const DrugsList = () => {
  const drugs = [
    { name: 'CannaCoin', icon: <LeafIcon className="text-purple-400" />, description: 'Relaxation and creativity booster', rarity: 'Common' },
    { name: 'CocaCrystal', icon: <DropletIcon className="text-blue-400" />, description: 'Energy and focus enhancer', rarity: 'Rare' },
    { name: 'LysergicToken', icon: <PillIcon className="text-pink-400" />, description: 'Mind-expanding experience', rarity: 'Epic' },
    { name: 'EcstasyEther', icon: <CandyIcon className="text-orange-400" />, description: 'Euphoria and empathy amplifier', rarity: 'Uncommon' },
    { name: 'ShroomShares', icon: <FlaskConicalIcon className="text-indigo-400" />, description: 'Spiritual journey facilitator', rarity: 'Legendary' },
  ];

  return (
    <div className="container mx-auto py-12 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white">
      <h1 className="text-5xl font-bold mb-8 text-center text-blue-400 animate-pulse">DrugSwap Game Tokens</h1>

      <section className="mb-12">
        <Card className="bg-gray-800 border-purple-500 border-2">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-400">Available Tokens</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-indigo-400">Token</TableHead>
                  <TableHead className="text-indigo-400">Name</TableHead>
                  <TableHead className="text-indigo-400">Description</TableHead>
                  <TableHead className="text-indigo-400">Rarity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {drugs.map((drug) => (
                  <TableRow key={drug.name} className="hover:bg-gray-700 transition-colors">
                    <TableCell>{drug.icon}</TableCell>
                    <TableCell className="font-medium text-blue-300">{drug.name}</TableCell>
                    <TableCell className="text-gray-300">{drug.description}</TableCell>
                    <TableCell className="text-purple-400">{drug.rarity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-blue-400">Game Possibilities</h2>
        <Card className="bg-gray-800 border-purple-500 border-2">
          <CardContent className="p-6">
            <ul className="list-disc list-inside text-indigo-300 space-y-2">
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
        <h2 className="text-3xl font-semibold mb-6 text-blue-400">Telegram Mini App Integration</h2>
        <Card className="bg-gray-800 border-purple-500 border-2">
          <CardContent className="p-6">
            <p className="text-indigo-300 mb-4">
              The DrugSwap Telegram Mini App brings the excitement of token trading to your favorite messaging platform. Here's what you can do:
            </p>
            <ul className="list-disc list-inside text-indigo-300 space-y-2">
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

      <div className="mt-12 p-6 bg-gray-700 rounded-lg border-2 border-blue-400">
        <p className="text-sm text-blue-200 text-center">
          <strong>Disclaimer:</strong> DrugSwap is a fictional platform for entertainment purposes only. 
          We do not condone the use, sale, or distribution of illegal drugs. This platform deals 
          exclusively with imaginary tokens and should not be associated with real drugs or illegal activities.
        </p>
      </div>
    </div>
  );
};

export default DrugsList;