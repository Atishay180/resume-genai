import Groq from "groq-sdk";
import 'dotenv/config';

const ai = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});


export const invokeGroqAI = async () => {
    try {
        const response = await ai.chat.completions.create({
            model: "openai/gpt-oss-20b",
            messages: [
                {
                    role: 'user',
                    content: 'Explain what is interview'
                }
            ]
        })

        console.log(response.choices[0]?.message?.content);
    } catch (error) {
        console.log(error);
    }
}