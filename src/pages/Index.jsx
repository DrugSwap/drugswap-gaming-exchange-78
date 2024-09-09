import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GithubIcon, TwitterIcon } from "lucide-react";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="text-center">
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to DrugSwap</h1>
        <p className="text-xl mb-8">The imaginary drug token trading platform</p>
        <Link to="/join-waitlist">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">Join Waitlist</Button>
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Imaginary Tokens</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Trade fictional drug tokens in a safe, gamified environment.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Crypto Trading</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Use cryptocurrency to buy, sell, and trade imaginary drug tokens.</p>
            </CardContent>
          </Card>
          <Card>
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
        <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
        <ul className="list-disc list-inside text-left max-w-md mx-auto">
          <li>Secure and anonymous trading</li>
          <li>Gamified experience with leaderboards</li>
          <li>Earn DRUGS tokens through active participation</li>
          <li>Stake tokens for additional rewards</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Join Our Community</h2>
        <div className="flex justify-center space-x-4">
          <Button variant="outline">
            Telegram
          </Button>
          <Button variant="outline">
            <TwitterIcon className="mr-2 h-4 w-4" />
            Twitter
          </Button>
          <Button variant="outline">
            <GithubIcon className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
      </section>

      <section className="bg-red-100 p-4 rounded-lg text-left max-w-2xl mx-auto">
        <h3 className="text-xl font-bold mb-2">Disclaimer</h3>
        <p>
          DrugSwap is a fictional platform for entertainment purposes only. We do not condone the use, sale, or distribution of illegal drugs. 
          This platform deals exclusively with imaginary tokens and should not be associated with real drugs or illegal activities. 
          Please do not use drugs and seek help if you're struggling with addiction.
        </p>
      </section>
    </div>
  );
};

export default Index;