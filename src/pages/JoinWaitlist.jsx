import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const JoinWaitlist = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    wallet: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("New DrugSwap Waitlist Signup");
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Wallet: ${formData.wallet}
    `);
    window.location.href = `mailto:drugswap@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Thank you for joining the waitlist! Please send the email to complete your registration.");
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Join the DrugSwap Waitlist</h1>

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Sign Up for Early Access</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="wallet" className="block text-sm font-medium text-gray-700">Ethereum Wallet Address</label>
              <Input type="text" id="wallet" name="wallet" required value={formData.wallet} onChange={handleChange} />
            </div>
            <Button type="submit" className="w-full">Join Waitlist</Button>
          </form>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <p className="text-lg">
          By joining our waitlist, you'll be prioritized for DRUGS token airdrops and early access to the platform.
        </p>
      </div>

      <div className="mt-12 p-4 bg-yellow-100 rounded-lg max-w-2xl mx-auto">
        <p className="text-sm text-yellow-800">
          <strong>Disclaimer:</strong> DrugSwap is a fictional platform for entertainment purposes only. 
          We do not condone the use, sale, or distribution of illegal drugs. This platform deals 
          exclusively with imaginary tokens and should not be associated with real drugs or illegal activities.
        </p>
      </div>
    </div>
  );
};

export default JoinWaitlist;
