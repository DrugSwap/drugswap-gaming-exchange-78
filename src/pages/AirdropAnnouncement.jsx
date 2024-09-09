import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GiftIcon, CheckCircleIcon, AlertCircleIcon } from "lucide-react";

const AirdropAnnouncement = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">DRUGS Token Airdrop Announcement</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <GiftIcon className="mr-2" />
            Exciting News: DRUGS Token Airdrop for Top Ethereum Holders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            We're thrilled to announce our upcoming airdrop of DRUGS tokens to the top 10,000 Ethereum holders!
            This is your chance to be part of the DrugSwap ecosystem from the very beginning.
          </p>
          <p className="text-lg mb-4">
            A total of 100,000,000 DRUGS tokens (10% of the total supply) will be distributed among eligible participants.
          </p>
        </CardContent>
      </Card>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Qualify</h2>
        <Card>
          <CardContent className="prose max-w-none">
            <ul>
              <li>Be among the top 10,000 Ethereum holders as of [snapshot date].</li>
              <li>Hold a minimum of 1 ETH in your wallet.</li>
              <li>Have interacted with at least one DeFi protocol in the last 30 days.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits of Participating</h2>
        <Card>
          <CardContent className="prose max-w-none">
            <ul>
              <li>Get early access to the DrugSwap platform.</li>
              <li>Receive a significant amount of DRUGS tokens to start trading and earning rewards.</li>
              <li>Become part of the founding community with potential governance rights.</li>
              <li>Exclusive NFT for airdrop participants.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Claim Your Tokens</h2>
        <Card>
          <CardContent className="prose max-w-none">
            <ol>
              <li>Visit the official DrugSwap website on [airdrop date].</li>
              <li>Connect your Ethereum wallet (the one that qualifies for the airdrop).</li>
              <li>Click on the "Claim Airdrop" button.</li>
              <li>Confirm the transaction (gas fees apply).</li>
              <li>DRUGS tokens will be transferred to your wallet within 24 hours.</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <div className="flex justify-center space-x-4 mb-8">
        <Button className="flex items-center">
          <CheckCircleIcon className="mr-2" />
          Join Telegram for Updates
        </Button>
        <Button className="flex items-center">
          <AlertCircleIcon className="mr-2" />
          Follow us on Twitter
        </Button>
      </div>

      <div className="text-center mb-8">
        <p className="text-xl font-semibold">Mark Your Calendars!</p>
        <p className="text-lg">Airdrop Date: [Insert Date Here]</p>
      </div>

      <div className="mt-12 p-4 bg-yellow-100 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Disclaimer:</strong> DrugSwap and DRUGS tokens are fictional and for entertainment purposes only. 
          We do not condone the use, sale, or distribution of illegal drugs. This platform deals exclusively with 
          imaginary tokens and should not be associated with real drugs or illegal activities.
        </p>
      </div>
    </div>
  );
};

export default AirdropAnnouncement;