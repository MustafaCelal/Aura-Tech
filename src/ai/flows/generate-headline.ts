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
import type {Flow, Prompt} from 'genkit'; // Import types for proper typing

const GenerateHeadlineInputSchema = z.object({
  topic: z.string().describe('The topic of the headline.'),
  tone: z.string().describe('The desired tone of the headline (e.g., humorous, serious, professional).'),
});
export type GenerateHeadlineInput = z.infer<typeof GenerateHeadlineInputSchema>;

const GenerateHeadlineOutputSchema = z.object({
  headlines: z.array(z.string()).describe('An array of generated headline options.'),
});
export type GenerateHeadlineOutput = z.infer<typeof GenerateHeadlineOutputSchema>;

// Declare types for prompt and flow
let prompt: Prompt<typeof GenerateHeadlineInputSchema, typeof GenerateHeadlineOutputSchema> | undefined;
let generateHeadlineFlow: Flow<typeof GenerateHeadlineInputSchema, typeof GenerateHeadlineOutputSchema> | undefined;

if (process.env.MOCK_AI_ENABLED !== 'true') {
  prompt = ai.definePrompt({
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

  generateHeadlineFlow = ai.defineFlow(
    {
      name: 'generateHeadlineFlow',
      inputSchema: GenerateHeadlineInputSchema,
      outputSchema: GenerateHeadlineOutputSchema,
    },
    async (input: GenerateHeadlineInput) => {
      if (!prompt) {
        // This should ideally not be reached if MOCK_AI_ENABLED is false,
        // as prompt would be defined.
        throw new Error('Generate headline prompt is not initialized');
      }
      const {output} = await prompt(input);
      return output!;
    }
  );
}

export async function generateHeadline(input: GenerateHeadlineInput): Promise<GenerateHeadlineOutput> {
  if (process.env.MOCK_AI_ENABLED === 'true') {
    console.log("Mocking generateHeadline flow. Input:", input);
    return new Promise((resolve) => {
      setTimeout(() => {
        let mockHeadlines: string[];
        if (!input.topic && !input.tone) {
          mockHeadlines = [
            'Default Mocked Headline 1: Stunning Web Design',
            'Default Mocked Headline 2: Marketing Magic',
            'Default Mocked Headline 3: Innovative Solutions',
            'Default Mocked Headline 4: Your Brand, Elevated',
            'Default Mocked Headline 5: Creative Digital Agency',
          ];
        } else {
          mockHeadlines = [
            `Mocked: ${input.topic || 'General Topic'} with ${input.tone || 'Neutral Tone'} - Option 1`,
            `Mocked: ${input.topic || 'General Topic'} with ${input.tone || 'Neutral Tone'} - Option 2`,
            `Mocked: ${input.topic || 'General Topic'} with ${input.tone || 'Neutral Tone'} - Option 3`,
            `Mocked: ${input.topic || 'General Topic'} with ${input.tone || 'Neutral Tone'} - Option 4`,
            `Mocked: ${input.topic || 'General Topic'} with ${input.tone || 'Neutral Tone'} - Option 5`,
          ];
        }
        resolve({ headlines: mockHeadlines });
      }, 500);
    });
  }

  if (!generateHeadlineFlow) {
    // This case implies MOCK_AI_ENABLED was false, but flow definition failed or was skipped.
    // Or, MOCK_AI_ENABLED changed runtime (not possible for env vars like this usually)
    console.error("generateHeadlineFlow is not defined. MOCK_AI_ENABLED:", process.env.MOCK_AI_ENABLED);
    throw new Error('Headline generation service is currently unavailable. Genkit flow not initialized.');
  }
  return generateHeadlineFlow(input);
}
