import { CohereClient } from "cohere-ai";
import dotenv from "dotenv";

dotenv.config();

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

export async function getCourseSuggestions(input) {
  const prompt = `
Respond ONLY with a valid JSON array.

Suggest 5 online courses for a ${input.skill} learner at ${input.level} level who wants to ${input.goal}.

Each course should have: name, platform, description, and link.

Respond in this format:
[
  {
    "name": "Course Name",
    "platform": "Platform",
    "description": "Short description",
    "link": "https://..."
  }
]
`;

  const response = await cohere.generate({
    model: "command-r-plus",
    prompt,
    max_tokens: 500,
    temperature: 0.7,
  });

  return response.generations[0].text;
}
