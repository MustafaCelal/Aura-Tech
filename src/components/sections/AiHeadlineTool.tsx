
"use client";

import { useState } from 'react';
import { generateHeadline, type GenerateHeadlineInput, type GenerateHeadlineOutput } from '@/ai/flows/generate-headline';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Container } from '@/components/layout/Container';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Sparkles, Loader2 } from 'lucide-react';


export function AiHeadlineTool() {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('');
  const [headlines, setHeadlines] = useState<string[]>([
    'Headline 1',
    'Headline 2',
    'Headline 3',
    'Headline 4',
    'Headline 5',
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    // Keep existing headlines for a moment or clear them
    // setHeadlines([]); 

    // Simulate API call
    setTimeout(() => {
      const mockHeadlines: string[] = [
        `Amazing Headline for ${topic} with a ${tone} Tone!`,
        `Another Great Idea: ${topic} in a ${tone} Style`,
        `${tone.toUpperCase()}! ${topic} Will Never Be the Same`,
        `Unlock ${topic}'s Potential with a ${tone} Approach`,
        `Why ${topic} is the Next Big Thing (Hint: It's ${tone})`,
      ];
      
      // If topic and tone are empty, use default, otherwise generate based on input
      if (topic || tone) {
        setHeadlines(mockHeadlines);
      } else {
         setHeadlines([
            'Headline 1',
            'Headline 2',
            'Headline 3',
            'Headline 4',
            'Headline 5',
          ]);
      }
      setIsLoading(false);
    }, 1500);

    // try {
    //   const input: GenerateHeadlineInput = { topic, tone };
    //   // const result: GenerateHeadlineOutput = await generateHeadline(input);
    //   // setHeadlines(result.headlines);
    // } catch (err) {
    //   console.error("Error generating headlines:", err);
    //   setError('Failed to generate headlines. Please try again.');
    // } finally {
    //   // setIsLoading(false); // Moved into setTimeout for simulation
    // }
  };

  return (
    <Container id="ai-tool">
      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-12 h-12 text-primary" />
          </div>
          <CardTitle className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">AI Headline Generator</CardTitle>
          <CardDescription className="mt-2 text-lg text-muted-foreground">
            Craft compelling headlines that resonate with your audience. Enter a topic and desired tone to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="topic">Topic</Label>
              <Input
                id="topic"
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Sustainable Fashion, Tech Startups"
                
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="tone">Tone</Label>
              <Input
                id="tone"
                type="text"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                placeholder="e.g., Professional, Playful, Urgent"
                
                className="mt-1"
              />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  Generate Headlines <Sparkles className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          {error && (
            <p className="mt-6 text-center text-destructive">{error}</p>
          )}

          {headlines.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Generated Headlines:</h3>
              <ul className="space-y-3 list-disc list-inside bg-muted/50 p-4 rounded-md">
                {headlines.map((headline, index) => (
                  <li key={index} className="text-foreground text-sm leading-relaxed p-2 rounded hover:bg-primary/10 transition-colors">
                    {headline}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

