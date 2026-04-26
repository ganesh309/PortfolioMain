import { knowledgeBase } from './knowledgeBase.js';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        // 🔎 1. Full Context Strategy (No Search)
        // Since dataset is small (~18 items), we send everything to let LLM reason.
        const context = knowledgeBase.map(k => k.content).join("\n---\n");

        if (!context.trim()) {
            return res.status(200).json({
                response: "This information is not available in Ganesh's portfolio."
            });
        }

        // 🧠 2. Construct Reasoning Prompt
        const today = new Date().toDateString();

        const prompt = `
Context:
${context}

Question:
${message}
`;

        // 🚀 3. Call OpenRouter (gemma-4-31b-it:free)
        const response = await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": "https://ganeshghorai.vercel.app", // Update with your actual domain
                    "X-Title": "Ganesh Portfolio AI"
                },
                body: JSON.stringify({
                    "model": "openai/gpt-oss-20b:free",
                    messages: [
                        {
                            role: "system",
                            content: `You are G-Insight, the Intelligent Portfolio Assistant for Ganesh. You answer questions ABOUT Ganesh, not AS Ganesh.

Today's date: ${today}

STRICT RULES:
1. You are an AI assistant answering ABOUT Ganesh Ghorai. You are NOT Ganesh himself.
2. When asked "your name" or "who are you", say you are G-Insight, Ganesh's AI assistant.
3. Read the entire context carefully.
4. If dates are provided (e.g., July 2025 – Present), calculate duration based on today's date.
5. When calculating duration:
   - Convert years and months properly.
   - If "Present" is mentioned, use today's date (${today}).
   - Round to the nearest month or year as appropriate.
6. Do NOT invent dates or facts.
7. Only use information found in the context.
8. If the answer cannot be found, say: "This information is not available in Ganesh's portfolio."
9. Be concise, professional, and accurate.`
                        },
                        {
                            role: "user",
                            content: prompt
                        }
                    ],
                    temperature: 0.1, // Lower temperature for precision
                }),
            }
        );

        const data = await response.json();

        if (data.error) {
            console.error('OpenRouter API Error:', data.error);
            return res.status(500).json({ error: 'AI provider error' });
        }

        return res.status(200).json({
            response: data.choices[0].message.content,
        });

    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ error: 'AI failed to respond' });
    }
}
