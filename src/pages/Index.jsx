import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GithubIcon, TwitterIcon, TrendingUpIcon, TrendingDownIcon } from "lucide-react";
import { Link } from 'react-router-dom';

const FeaturedToken = ({ name, trend }) => (
  <div className="flex items-center justify-between p-2 bg-dark-light/30 rounded-lg">
    <span className="text-neon-blue">{name}</span>
    {trend === 'up' ? (
      <TrendingUpIcon className="text-green-400" />
    ) : (
      <TrendingDownIcon className="text-red-400" />
    )}
  </div>
);

const Index = () => {
  const featuredTokens = [
    { name: 'CannaCoin', trend: 'up' },
    { name: 'LysergicToken', trend: 'down' },
    { name: 'ShroomShares', trend: 'up' },
  ];

  return (
    <div className="text-center min-h-screen flex flex-col justify-center items-center gradient-bg">
      <section className="mb-16 pt-16">
        <h1 className="text-6xl font-bold mb-4 text-neon-blue neon-text">Welcome to DrugSwap</h1>
        <p className="text-2xl mb-8 text-neon-purple">The imaginary drug token trading platform</p>
        <Link to="/join-waitlist">
          <Button size="lg" className="bg-neon-pink hover:bg-neon-purple text-dark-light text-lg px-8 py-3 rounded-full transition-all transform hover:scale-105 neon-border">
            Join Waitlist
          </Button>
        </Link>
      </section>

      <section className="mb-16 w-full max-w-6xl">
        <h2 className="text-4xl font-semibold mb-8 text-neon-yellow">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Imaginary Tokens', 'Crypto Trading', 'Rewards System'].map((title, index) => (
            <Card key={index} className="bg-dark-light/50 border-neon-purple hover:border-neon-pink transition-all duration-300 transform hover:scale-105 neon-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-neon-orange">{title}</h3>
                <p className="text-neon-blue">
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
        <h2 className="text-4xl font-semibold mb-6 text-neon-yellow">Key Features</h2>
        <ul className="text-left text-lg text-neon-blue space-y-2">
          <li>• Secure and anonymous trading</li>
          <li>• Gamified experience with leaderboards</li>
          <li>• Earn DRUGS tokens through active participation</li>
          <li>• Stake tokens for additional rewards</li>
        </ul>
      </section>

      <section className="mb-16 w-full max-w-2xl">
        <h2 className="text-4xl font-semibold mb-6 text-neon-yellow">Featured Tokens</h2>
        <Card className="bg-dark-light/50 border-neon-purple neon-border">
          <CardContent className="p-6">
            <div className="space-y-4">
              {featuredTokens.map((token, index) => (
                <FeaturedToken key={index} name={token.name} trend={token.trend} />
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold mb-8 text-neon-yellow">Join Our Community</h2>
        <div className="flex justify-center space-x-6">
          <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-light transition-all neon-border">
            Telegram
          </Button>
          <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark-light transition-all neon-border">
            <TwitterIcon className="mr-2 h-5 w-5" />
            Twitter
          </Button>
          <Button variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-dark-light transition-all neon-border">
            <GithubIcon className="mr-2 h-5 w-5" />
            GitHub
          </Button>
        </div>
      </section>

      <section className="bg-dark-lighter/50 p-6 rounded-lg text-left max-w-2xl mx-auto backdrop-blur-sm neon-border">
        <h3 className="text-2xl font-bold mb-2 text-neon-orange">Disclaimer</h3>
        <p className="text-neon-yellow">
          DrugSwap is a fictional platform for entertainment purposes only. We do not condone the use, sale, or distribution of illegal drugs. 
          This platform deals exclusively with imaginary tokens and should not be associated with real drugs or illegal activities. 
          Please do not use drugs and seek help if you're struggling with addiction.
        </p>
      </section>
    </div>
  );
};

export default Index;