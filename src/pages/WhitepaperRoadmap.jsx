import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhitepaperRoadmap = () => {
  const roadmapItems = [
    { phase: "Phase 1", title: "Foundation", items: ["Platform development", "Smart contract audits", "Community building"] },
    { phase: "Phase 2", title: "Launch", items: ["Token generation event", "DEX listings", "Marketing campaign"] },
    { phase: "Phase 3", title: "Growth", items: ["New token partnerships", "Enhanced gamification", "Mobile app release"] },
    { phase: "Phase 4", title: "Expansion", items: ["Cross-chain integration", "DAO governance", "Real-world partnerships"] },
  ];

  return (
    <div className="container mx-auto py-12 bg-green-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Whitepaper & Roadmap</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-green-700">Whitepaper Summary</h2>
        <Card className="bg-white shadow-lg">
          <CardContent className="prose max-w-none">
            <p className="text-green-600 mb-4">
              DrugSwap is a revolutionary platform that combines the excitement of crypto trading with the thrill of collecting rare, imaginary drug tokens. Our mission is to provide a safe, entertaining, and educational environment for users to explore the world of decentralized finance.
            </p>
            <p className="text-green-600 mb-4">
              Key components of our ecosystem include:
            </p>
            <ul className="list-disc list-inside text-green-600">
              <li>DRUGS token: The native currency of the DrugSwap platform</li>
              <li>Imaginary drug tokens: Unique, collectible tokens with varying rarities</li>
              <li>Gamification: Leaderboards, challenges, and rewards to incentivize participation</li>
              <li>Staking: Earn passive income by locking up your DRUGS tokens</li>
              <li>DAO governance: Community-driven decision making for the platform's future</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-green-700">Roadmap</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {roadmapItems.map((item, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-green-700">{item.phase}: {item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-green-600">
                  {item.items.map((listItem, i) => (
                    <li key={i}>{listItem}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="mt-12 p-4 bg-yellow-100 rounded-lg">
        <p className="text-sm text-yellow-800 text-center">
          <strong>Disclaimer:</strong> DrugSwap is a fictional platform for entertainment purposes only. 
          We do not condone the use, sale, or distribution of illegal drugs. This platform deals 
          exclusively with imaginary tokens and should not be associated with real drugs or illegal activities.
        </p>
      </div>
    </div>
  );
};

export default WhitepaperRoadmap;