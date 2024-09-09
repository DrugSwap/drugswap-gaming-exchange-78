import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircleIcon, CircleIcon } from "lucide-react";

const RoadmapItem = ({ phase, title, items, completed }) => (
  <Card className={completed ? "border-green-500" : ""}>
    <CardHeader>
      <CardTitle className="flex items-center">
        {completed ? (
          <CheckCircleIcon className="mr-2 text-green-500" />
        ) : (
          <CircleIcon className="mr-2" />
        )}
        {phase}: {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Roadmap = () => {
  const roadmapData = [
    {
      phase: "Phase 1",
      title: "Foundation",
      items: [
        "Conceptualization and team formation",
        "Initial smart contract development",
        "Website and branding design",
        "Community building on social media platforms"
      ],
      completed: true
    },
    {
      phase: "Phase 2",
      title: "Token Launch",
      items: [
        "DRUGS token launch on Ethereum network",
        "Token distribution to early supporters",
        "Listing on decentralized exchanges",
        "Marketing campaign kickoff"
      ],
      completed: false
    },
    {
      phase: "Phase 3",
      title: "Platform Development",
      items: [
        "DrugSwap platform beta launch",
        "Implementation of basic trading features",
        "Security audits and bug bounty program",
        "Onboarding of initial set of imaginary drug tokens"
      ],
      completed: false
    },
    {
      phase: "Phase 4",
      title: "Gamification and Rewards",
      items: [
        "Introduction of gamification elements",
        "Launch of staking and rewards program",
        "Implementation of leaderboards and challenges",
        "Release of mobile app for iOS and Android"
      ],
      completed: false
    },
    {
      phase: "Phase 5",
      title: "Expansion and Partnerships",
      items: [
        "Integration with other DeFi protocols",
        "Expansion to additional blockchain networks",
        "Partnerships with cannabis-related crypto projects",
        "Launch of DrugSwap DAO for community governance"
      ],
      completed: false
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">DrugSwap Roadmap</h1>

      <p className="text-xl text-center mb-12">
        Our journey to revolutionize the world of decentralized finance through 
        innovative and entertaining solutions. Here's what we have planned:
      </p>

      <div className="space-y-8">
        {roadmapData.map((item, index) => (
          <RoadmapItem key={index} {...item} />
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">Future Developments</h2>
        <p className="text-lg text-center mb-8">
          We're constantly evolving and adapting our roadmap based on community feedback 
          and market trends. Some potential future developments include:
        </p>
        <ul className="list-disc list-inside text-lg max-w-2xl mx-auto">
          <li>Integration with virtual reality platforms for immersive trading experiences</li>
          <li>Expansion into NFTs representing rare and unique imaginary drug strains</li>
          <li>Collaboration with educational institutions for blockchain and DeFi research</li>
          <li>Development of AI-powered trading assistants for DrugSwap users</li>
        </ul>
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

export default Roadmap;