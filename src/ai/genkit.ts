
import {genkit, type GenkitPlugin} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

const effectiveMockAiEnabled = process.env.MOCK_AI_ENABLED === 'true';
const googleGenaiApiKey = process.env.GOOGLE_GENAI_API_KEY;

const plugins: GenkitPlugin[] = [];
let model: string | undefined = undefined;

if (!effectiveMockAiEnabled) {
  // Not mocking, try to set up real AI
  if (googleGenaiApiKey && googleGenaiApiKey !== 'test' && googleGenaiApiKey !== 'dummy_key_for_now' && googleGenaiApiKey.trim() !== '') {
    plugins.push(googleAI({ apiKey: googleGenaiApiKey }));
    model = 'googleai/gemini-2.0-flash';
    console.log('Genkit: Initializing with real Google AI plugin.');
  } else {
    // Real AI mode, but API key is missing or invalid.
    console.error(
      'Genkit WARNING: Running in REAL AI mode, but GOOGLE_GENAI_API_KEY is missing or invalid.' +
      ' Real AI features will likely fail. Set MOCK_AI_ENABLED=true in .env to use mock data, or provide a valid GOOGLE_GENAI_API_KEY.'
    );
    // Intentionally not adding the googleAI plugin to prevent crashes.
    // Non-mocked flows will fail if they try to use it.
  }
} else {
  // Mocking is enabled. No need to initialize googleAI plugin with potentially bad keys.
  // Genkit will be initialized with no plugins or a minimal set if required by Genkit core.
  // This is fine if all flows that would use Genkit for actual AI calls are also mocked out.
  console.log('Genkit: MOCK_AI_ENABLED is true. Real AI plugins are NOT initialized.');
}

export const ai = genkit({
  plugins, // Will be empty if mocking or if API key is bad in real mode
  ...(model ? { model } : {}), // Conditionally set model
  // Genkit should be able to initialize with an empty plugins array.
  // If it requires a default model even with no plugins, this might need adjustment,
  // but flows using mocks shouldn't hit `ai.generate()` through the unmocked path.
});
