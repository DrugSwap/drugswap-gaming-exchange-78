import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WalletIcon, ArrowRightIcon, CoinsIcon } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">How DrugSwap Works</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Getting Started</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <WalletIcon className="mr-2" />
                Connect Wallet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Link your Ethereum wallet to start trading on DrugSwap.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ArrowRightIcon className="mr-2" />
                Trade Tokens
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Buy, sell, and swap imaginary drug tokens using DRUGS or ETH.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CoinsIcon className="mr-2" />
                Collect Imaginary Drugs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Build your collection of unique imaginary drug tokens.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Participating in the DrugSwap Game</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Trade tokens to earn rewards and climb the leaderboard</li>
          <li>Complete challenges to unlock special bonuses and rare tokens</li>
          <li>Stake your DRUGS tokens to earn passive income</li>
          <li>Engage with the community to learn strategies and stay updated</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The DrugFi Ecosystem</h2>
        <img src="/placeholder.svg" alt="DrugFi Ecosystem" className="w-full max-w-2xl mx-auto mb-4" />
        <p className="text-lg">
          The DrugFi ecosystem revolves around the trading and collection of imaginary drug tokens, 
          supported by staking mechanisms, community engagement, and a gamified experience that 
          rewards active participation and strategic trading.
        </p>
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

export default HowItWorks;