import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GiftIcon, CheckCircleIcon, AlertCircleIcon } from "lucide-react";
import { Link } from 'react-router-dom';

const AirdropAnnouncement = () => {
  return (
    <div className="container mx-auto py-12 bg-green-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-green-800">DRUGS Token Airdrop Announcement</h1>

      <Card className="mb-8 bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl text-green-700">
            <GiftIcon className="mr-2" />
            Exciting News: DRUGS Token Airdrop for Early Adopters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4 text-green-600">
            We're thrilled to announce our upcoming airdrop of DRUGS tokens to the first 10,000 users who provide their details!
            This is your chance to be part of the DrugSwap ecosystem from the very beginning.
          </p>
          <p className="text-lg mb-4 text-green-600">
            A total of 10,000,000 DRUGS tokens will be distributed among eligible participants, with each user receiving 1,000 DRUGS tokens.
          </p>
        </CardContent>
      </Card>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">How to Qualify</h2>
        <Card className="bg-white shadow-lg">
          <CardContent className="prose max-w-none">
            <ul className="text-green-600">
              <li>Be among the first 10,000 users to provide your details through the registration form.</li>
              <li>Claim your tokens via the system when prompted.</li>
              <li>Pay the associated gas fees for claiming your tokens.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Benefits of Participating</h2>
        <Card className="bg-white shadow-lg">
          <CardContent className="prose max-w-none">
            <ul className="text-green-600">
              <li>Receive 1,000 DRUGS tokens to start trading and earning rewards.</li>
              <li>Get early access to the DrugSwap platform.</li>
              <li>Become part of the founding community with potential governance rights.</li>
              <li>Exclusive NFT for airdrop participants.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">How to Claim Your Tokens</h2>
        <Card className="bg-white shadow-lg">
          <CardContent className="prose max-w-none">
            <ol className="text-green-600">
              <li>Provide your details through the registration form.</li>
              <li>Wait for the airdrop announcement and claiming period.</li>
              <li>Connect your Ethereum wallet to the platform.</li>
              <li>Click on the "Claim Airdrop" button when available.</li>
              <li>Confirm the transaction and pay the gas fees.</li>
              <li>DRUGS tokens will be transferred to your wallet after successful claiming.</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <div className="flex justify-center space-x-4 mb-8">
        <Button className="flex items-center bg-green-600 hover:bg-green-700 text-white">
          <CheckCircleIcon className="mr-2" />
          Join Telegram for Updates
        </Button>
        <Button className="flex items-center bg-green-600 hover:bg-green-700 text-white">
          <AlertCircleIcon className="mr-2" />
          Follow us on Twitter
        </Button>
      </div>

      <div className="text-center mb-8">
        <p className="text-xl font-semibold text-green-700">Don't Miss Out!</p>
        <p className="text-lg text-green-600">Sign up now to secure your spot in the airdrop.</p>
        <Link to="/join-waitlist" className="mt-4 inline-block">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">Join Waitlist</Button>
        </Link>
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