// Import the GoogleGenerativeAI class from the library
import { GoogleGenerativeAI } from "@google/generative-ai"

// Get your API key from Google AI Studio and place it here.
// For production apps, use environment variables to keep your key secret.
const API_KEY = "AIzaSyCSfVIAF3Ly-rLxR-YjAJl85m2Tbb_Lnbs";
const MODEL_ID = "gemini-2.5-pro"; // Example model ID, adjust as needed
// Initialize the GoogleGenerativeAI client with your API key

async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);

  try {
    // For text-only input, use a model like "gemini-1.5-flash"
    const model = genAI.getGenerativeModel({ model: MODEL_ID });

    // Await the result from the model
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    console.log(text);

  } catch (error) {
    console.error("An error occurred:", error);
  }
}

export default runChat;