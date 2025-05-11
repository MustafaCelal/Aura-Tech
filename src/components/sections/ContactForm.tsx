"use client";

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Container } from '@/components/layout/Container';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { Send } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </>
      ) : (
        <>
          Send Message <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export function ContactForm() {
  const initialState: ContactFormState = { message: '', success: false, errors: {} };
  const [formState, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (formState?.timestamp) { // Check timestamp to ensure it's a new state
      if (formState.success) {
        toast({
          title: "Success!",
          description: formState.message,
        });
        // Optionally reset the form fields here if not using react-hook-form's reset
        const form = document.getElementById('contact-form') as HTMLFormElement;
        form?.reset();

      } else if (formState.message && formState.errors) {
         const errorMessages = Object.values(formState.errors).flat().join('\n');
         toast({
          title: "Oops! Something went wrong.",
          description: formState.message + (errorMessages ? `\n${errorMessages}` : ''),
          variant: "destructive",
        });
      }
    }
  }, [formState, toast]);

  return (
    <Container id="contact" className="bg-primary/5 rounded-xl">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Get In Touch</CardTitle>
            <CardDescription className="mt-2 text-lg text-muted-foreground">
              Have a project in mind or just want to say hello? We'd love to hear from you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form id="contact-form" action={formAction} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" type="text" placeholder="Your Name" required className="mt-1" />
                {formState?.errors?.name && (
                  <p className="text-sm text-destructive mt-1">{formState.errors.name.join(', ')}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required className="mt-1" />
                 {formState?.errors?.email && (
                  <p className="text-sm text-destructive mt-1">{formState.errors.email.join(', ')}</p>
                )}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={5} required className="mt-1" />
                {formState?.errors?.message && (
                  <p className="text-sm text-destructive mt-1">{formState.errors.message.join(', ')}</p>
                )}
              </div>
               {formState?.errors?._form && (
                  <p className="text-sm text-destructive mt-1">{formState.errors._form.join(', ')}</p>
                )}
              <div className="text-center sm:text-right">
                <SubmitButton />
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
