import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GithubIcon, TwitterIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      <header className="container mx-auto py-6">
        <h1 className="text-4xl font-bold">DrugSwap</h1>
      </header>

      <main className="container mx-auto py-12">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Welcome to DrugSwap</h2>
          <p className="text-xl mb-8">The imaginary drug token trading platform</p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">Join Waitlist</Button>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-semibold mb-6">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-purple-800 text-white">
              <CardHeader>
                <CardTitle>Imaginary Tokens</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Trade fictional drug tokens in a safe, gamified environment.</p>
              </CardContent>
            </Card>
            <Card className="bg-purple-800 text-white">
              <CardHeader>
                <CardTitle>Crypto Trading</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Use cryptocurrency to buy, sell, and trade imaginary drug tokens.</p>
              </CardContent>
            </Card>
            <Card className="bg-purple-800 text-white">
              <CardHeader>
                <CardTitle>Rewards System</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Earn rewards for active participation and trading strategies.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-semibold mb-6">Key Features</h3>
          <ul className="list-disc list-inside">
            <li>Secure and anonymous trading</li>
            <li>Gamified experience with leaderboards</li>
            <li>Earn DRUGS tokens through active participation</li>
            <li>Stake tokens for additional rewards</li>
          </ul>
        </section>

        <section className="text-center mb-16">
          <h3 className="text-3xl font-semibold mb-6">Join Our Community</h3>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
              Telegram
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
              <TwitterIcon className="mr-2 h-4 w-4" />
              Twitter
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
              <GithubIcon className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </section>

        <section className="bg-red-600 p-4 rounded-lg text-center">
          <h4 className="text-xl font-bold mb-2">Disclaimer</h4>
          <p>
            DrugSwap is a fictional platform for entertainment purposes only. We do not condone the use, sale, or distribution of illegal drugs. 
            This platform deals exclusively with imaginary tokens and should not be associated with real drugs or illegal activities. 
            Please do not use drugs and seek help if you're struggling with addiction.
          </p>
        </section>
      </main>

      <footer className="container mx-auto py-6 text-center">
        <p>&copy; 2024 DrugSwap. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;