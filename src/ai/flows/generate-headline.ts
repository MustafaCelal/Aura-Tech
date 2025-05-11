'use server';
/**
 * @fileOverview AI-powered headline generator for marketing campaigns.
 *
 * - generateHeadline - Generates multiple headline options based on a topic and desired tone.
 * - GenerateHeadlineInput - The input type for the generateHeadline function.
 * - GenerateHeadlineOutput - The return type for the generateHeadline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeadlineInputSchema = z.object({
  topic: z.string().describe('The topic of the headline.'),
  tone: z.string().describe('The desired tone of the headline (e.g., humorous, serious, professional).'),
});
export type GenerateHeadlineInput = z.infer<typeof GenerateHeadlineInputSchema>;

const GenerateHeadlineOutputSchema = z.object({
  headlines: z.array(z.string()).describe('An array of generated headline options.'),
});
export type GenerateHeadlineOutput = z.infer<typeof GenerateHeadlineOutputSchema>;

export async function generateHeadline(input: GenerateHeadlineInput): Promise<GenerateHeadlineOutput> {
  return generateHeadlineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHeadlinePrompt',
  input: {schema: GenerateHeadlineInputSchema},
  output: {schema: GenerateHeadlineOutputSchema},
  prompt: `You are a marketing expert specializing in creating engaging headlines.

  Generate multiple headline options (minimum 5) based on the given topic and desired tone. Return your response as a JSON array of strings. The output should be suitable for marketing copy for a creative agency.

  Topic: {{{topic}}}
  Tone: {{{tone}}}
  Headlines:
  `,
});

const generateHeadlineFlow = ai.defineFlow(
  {
    name: 'generateHeadlineFlow',
    inputSchema: GenerateHeadlineInputSchema,
    outputSchema: GenerateHeadlineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
