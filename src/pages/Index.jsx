import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GithubIcon, TwitterIcon } from "lucide-react";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="text-center min-h-screen flex flex-col justify-center items-center">
      <section className="mb-16 pt-16">
        <h1 className="text-6xl font-bold mb-4 text-white">Welcome to DrugSwap</h1>
        <p className="text-2xl mb-8 text-green-200">The imaginary drug token trading platform</p>
        <Link to="/join-waitlist">
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-3 rounded-full transition-all transform hover:scale-105">
            Join Waitlist
          </Button>
        </Link>
      </section>

      <section className="mb-16 w-full max-w-6xl">
        <h2 className="text-4xl font-semibold mb-8 text-white">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Imaginary Tokens', 'Crypto Trading', 'Rewards System'].map((title, index) => (
            <Card key={index} className="bg-green-800/50 border-green-600 hover:bg-green-700/50 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-300">{title}</h3>
                <p className="text-green-100">
                  {index === 0 && "Trade fictional drug tokens in a safe, gamified environment."}
                  {index === 1 && "Use cryptocurrency to buy, sell, and trade imaginary drug tokens."}
                  {index === 2 && "Earn rewards for active participation and trading strategies."}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16 w-full max-w-2xl">
        <h2 className="text-4xl font-semibold mb-6 text-white">Key Features</h2>
        <ul className="text-left text-lg text-green-200 space-y-2">
          <li>• Secure and anonymous trading</li>
          <li>• Gamified experience with leaderboards</li>
          <li>• Earn DRUGS tokens through active participation</li>
          <li>• Stake tokens for additional rewards</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold mb-8 text-white">Join Our Community</h2>
        <div className="flex justify-center space-x-6">
          <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-green-900 transition-all">
            Telegram
          </Button>
          <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-green-900 transition-all">
            <TwitterIcon className="mr-2 h-5 w-5" />
            Twitter
          </Button>
          <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-green-900 transition-all">
            <GithubIcon className="mr-2 h-5 w-5" />
            GitHub
          </Button>
        </div>
      </section>

      <section className="bg-red-900/20 p-6 rounded-lg text-left max-w-2xl mx-auto backdrop-blur-sm">
        <h3 className="text-2xl font-bold mb-2 text-red-300">Disclaimer</h3>
        <p className="text-red-100">
          DrugSwap is a fictional platform for entertainment purposes only. We do not condone the use, sale, or distribution of illegal drugs. 
          This platform deals exclusively with imaginary tokens and should not be associated with real drugs or illegal activities. 
          Please do not use drugs and seek help if you're struggling with addiction.
        </p>
      </section>
    </div>
  );
};

export default Index;