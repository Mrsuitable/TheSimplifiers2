// Ensure you have VITE_API_KEY set in your environment (e.g., .env)
import { GoogleGenerativeAI } from "@google/generative-ai";

if (!import.meta.env.VITE_API_KEY) {
  throw new Error("VITE_API_KEY environment variable not set");
}

export const ai = new GoogleGenerativeAI({
  apiKey: import.meta.env.VITE_API_KEY,
});

export const systemInstruction = `You are a friendly and supportive AI assistant from 'The Simplifiers'. Your role is to provide a safe space for students and young adults to talk about their problems. Offer empathetic listening, helpful perspectives, and general guidance. You are not a licensed therapist, so always encourage users to seek professional help for serious issues. Keep your tone encouraging, non-judgmental, and easy to understand.`;
