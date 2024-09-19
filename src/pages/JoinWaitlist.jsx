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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // This is where you would make an API call to your backend
      const response = await fetch('/api/join-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Thank you for joining the waitlist! We'll be in touch soon.");
        setFormData({ name: '', email: '', wallet: '' }); // Reset form
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Oops! Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-neon-blue">Join the DrugSwap Waitlist</h1>

      <Card className="max-w-md mx-auto bg-dark-light border-neon-purple">
        <CardHeader>
          <CardTitle className="text-neon-pink">Sign Up for Early Access</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neon-blue">Name</label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={formData.name} 
                onChange={handleChange} 
                className="bg-dark-lighter text-neon-yellow border-neon-purple focus:border-neon-pink"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neon-blue">Email</label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={formData.email} 
                onChange={handleChange} 
                className="bg-dark-lighter text-neon-yellow border-neon-purple focus:border-neon-pink"
              />
            </div>
            <div>
              <label htmlFor="wallet" className="block text-sm font-medium text-neon-blue">Ethereum Wallet Address</label>
              <Input 
                type="text" 
                id="wallet" 
                name="wallet" 
                required 
                value={formData.wallet} 
                onChange={handleChange} 
                className="bg-dark-lighter text-neon-yellow border-neon-purple focus:border-neon-pink"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-neon-purple hover:bg-neon-pink text-dark-light"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Joining...' : 'Join Waitlist'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <p className="text-lg text-neon-yellow">
          By joining our waitlist, you'll be prioritized for DRUGS token airdrops and early access to the platform.
        </p>
      </div>

      <div className="mt-12 p-4 bg-dark-lighter rounded-lg max-w-2xl mx-auto border border-neon-purple">
        <p className="text-sm text-neon-orange">
          <strong>Disclaimer:</strong> DrugSwap is a fictional platform for entertainment purposes only. 
          We do not condone the use, sale, or distribution of illegal drugs. This platform deals 
          exclusively with imaginary tokens and should not be associated with real drugs or illegal activities.
        </p>
      </div>
    </div>
  );
};

export default JoinWaitlist;
