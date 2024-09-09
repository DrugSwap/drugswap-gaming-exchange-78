import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const TeamMember = ({ name, role, bio, avatar }) => (
  <Card>
    <CardHeader>
      <img src={avatar} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4" />
      <CardTitle>{name}</CardTitle>
      <p className="text-sm text-gray-500">{role}</p>
    </CardHeader>
    <CardContent>
      <p className="mb-4">{bio}</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-gray-400 hover:text-gray-500">
          <GithubIcon className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-500">
          <LinkedinIcon className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-500">
          <TwitterIcon className="h-5 w-5" />
        </a>
      </div>
    </CardContent>
  </Card>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "Founder & CEO",
      bio: "Blockchain enthusiast with 10 years of experience in fintech. Passionate about creating innovative DeFi solutions.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Bob Smith",
      role: "CTO",
      bio: "Former lead developer at Ethereum. Expert in smart contract development and blockchain architecture.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Charlie Brown",
      role: "Head of Product",
      bio: "UX/UI specialist with a background in game design. Focused on creating engaging and intuitive crypto experiences.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Diana Martinez",
      role: "Chief Marketing Officer",
      bio: "Digital marketing guru with experience in launching successful crypto projects. Driving community growth and engagement.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Ethan Williams",
      role: "Lead Smart Contract Developer",
      bio: "Solidity expert with a passion for creating secure and efficient smart contracts. Previously worked on major DeFi protocols.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Fiona Taylor",
      role: "Community Manager",
      bio: "Crypto enthusiast and social media expert. Dedicated to building and nurturing the DrugSwap community.",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Meet the DrugSwap Team</h1>

      <p className="text-xl text-center mb-12">
        Our team of blockchain experts, developers, and crypto enthusiasts is dedicated to revolutionizing 
        the world of decentralized finance through innovative and entertaining solutions.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">Join Our Team</h2>
        <p className="text-lg text-center mb-8">
          We're always looking for talented individuals who are passionate about blockchain technology 
          and want to contribute to the future of decentralized finance. Check out our open positions 
          or reach out to us if you think you'd be a great fit for the DrugSwap team.
        </p>
        <div className="text-center">
          <a href="#" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            View Open Positions
          </a>
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

export default Team;