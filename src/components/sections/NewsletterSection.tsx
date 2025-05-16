// src/components/sections/NewsletterSection.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Container } from '@/components/layout/Container';
import { Mail, Loader2 } from 'lucide-react'; 

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSubscribed(false);
    setIsLoading(true);

    if (!email) {
      setError('Please enter your email address.');
      setIsLoading(false);
      return;
    }

    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    console.log('Subscribing email:', email);
    // In a real app, you'd connect to a newsletter service (e.g., Mailchimp, SendGrid)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      // Simulate success/failure
      // const success = Math.random() > 0.2; // 80% success rate
      const success = true; // Let's assume success for now

      if (success) {
        setSubscribed(true);
        setEmail(''); // Clear email field on success
      } else {
        setError('Could not subscribe. Please try again later.');
      }
    } catch (apiError) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Newsletter subscription error:', apiError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container id="newsletter" className="bg-muted/30 dark:bg-muted/10 rounded-xl">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Mail className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          Stay Updated with Our Newsletter
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Subscribe to get the latest news, updates, and special offers delivered directly to your inbox.
        </p>
        
        {subscribed ? (
          <p className="text-lg text-green-600 dark:text-green-400 py-4 px-6 bg-green-500/10 rounded-md">
            Thank you for subscribing! You&apos;re now on our list.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-start max-w-md mx-auto">
            <div className="w-full flex-grow">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(''); // Clear error when user types
                }}
                aria-label="Email for newsletter"
                className={`h-12 text-base w-full ${error ? 'border-destructive focus:ring-destructive' : 'focus:ring-primary'}`}
                disabled={isLoading}
              />
              {error && <p className="text-xs text-destructive mt-1 text-left leading-normal">{error}</p>}
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto shrink-0 h-12" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                'Subscribe'
              )}
            </Button>
          </form>
        )}
        
        <p className="text-xs text-muted-foreground mt-6 leading-normal">
          We respect your privacy. Unsubscribe at any time. No spam!
        </p>
      </div>
    </Container>
  );
}
