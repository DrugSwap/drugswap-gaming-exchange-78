import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldIcon, LockIcon, ScaleIcon } from "lucide-react";

const SecurityLegal = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Security & Legal</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Commitment to Security</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShieldIcon className="mr-2" />
                User Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>We prioritize the protection of your personal information and trading data.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <LockIcon className="mr-2" />
                Transaction Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>All cryptocurrency transactions on DrugSwap are secured using advanced encryption.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ScaleIcon className="mr-2" />
                Regulatory Compliance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>We adhere to all applicable cryptocurrency regulations and best practices.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Legal Disclaimer</h2>
        <Card>
          <CardContent className="prose max-w-none">
            <p>
              DrugSwap is a fictional platform created for entertainment and educational purposes only. 
              No real drugs or illegal substances are involved in any way with this platform.
            </p>
            <p>
              All "drug" references on DrugSwap are purely imaginary and part of a gamified token trading experience. 
              Users are not buying, selling, or trading any real drugs or controlled substances.
            </p>
            <p>
              By using DrugSwap, you acknowledge that:
            </p>
            <ul>
              <li>All tokens and "drugs" on the platform are fictional and have no relation to real illegal substances.</li>
              <li>DrugSwap does not promote or endorse the use, sale, or distribution of illegal drugs.</li>
              <li>The platform is designed for entertainment and to demonstrate blockchain and cryptocurrency concepts.</li>
              <li>Real money may be involved in purchasing DRUGS tokens, but these tokens have no real-world value outside of the DrugSwap ecosystem.</li>
            </ul>
            <p>
              DrugSwap complies with all relevant cryptocurrency and blockchain regulations. We implement strict KYC (Know Your Customer) 
              and AML (Anti-Money Laundering) procedures to ensure the legitimacy of all transactions on our platform.
            </p>
            <p>
              If you are struggling with drug addiction or substance abuse, please seek professional help. 
              DrugSwap is not a substitute for medical advice or treatment.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg">
          If you have any questions or concerns about our security measures or legal compliance, 
          please contact our team at legal@drugswap.fictional.
        </p>
      </section>

      <div className="mt-12 p-4 bg-yellow-100 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Remember:</strong> DrugSwap is a fictional platform. Never use, buy, or sell real illegal drugs. 
          If you're struggling with addiction, please seek professional help.
        </p>
      </div>
    </div>
  );
};

export default SecurityLegal;