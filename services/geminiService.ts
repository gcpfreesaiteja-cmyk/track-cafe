
import { GoogleGenAI } from "@google/genai";

// Fix: Initializing GoogleGenAI with exactly the required parameters as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCoffeeRecommendation = async (userMood: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User says: "${userMood}". 
      You are the Head Race Engineer at "Off-Track Cafe". 
      Recommend a coffee from our categories: "Quick Laps" (Intense Espresso), "Long Stints" (Milky Lattes/Matcha), or "Pit Stops" (Sweet Treats).
      Keep it brief, cool, and use racing terminology.`,
      config: {
        systemInstruction: "You are a cool, professional racing engineer who now runs a high-end minimalist cafe. Your tone is sleek, efficient, and slightly technical but friendly.",
        maxOutputTokens: 150,
        temperature: 0.8,
      }
    });

    // Fix: Accessing .text as a property, not a method, as per guidelines
    return response.text || "Box this lap for a classic Espresso. You need the kick.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error in telemetry. Just grab a Double Shot and keep moving.";
  }
};
