import Anthropic from "@anthropic-ai/sdk";
import 'dotenv/config'

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
})

interface ConfigAnthropic {
    name: string,
    model: string
}

interface AnthropicResponse {
    text: string
    tokens_used: number
    model: string
}

const config: ConfigAnthropic = {
    name: "My assistant",
    model: "claude-haiku-4-5-20251001"
}

async function callAssistant(question: string): Promise<void> {
    
    console.log(`${config.name} is processing the request ...`)

    const msg = await anthropic.messages.create({
        model: config.model,
        max_tokens: 1024,
        messages: [{ role: "user", content: question }]
    })

    const bloque = msg.content[0]

    const respuesta: AnthropicResponse = {
        text: bloque?.type === 'text' ? bloque.text : '',
        tokens_used: msg.usage.input_tokens + msg.usage.output_tokens,
        model: msg.model
    }

    console.log(respuesta.text)
    console.log(`Tokens used: ${respuesta.tokens_used}`)
    console.log(`Model: ${respuesta.model}`)
}

const question = process.argv[2]

if (!question) {
    console.log("Use: npx ts-node src/index.ts \"your question here\"")
    process.exit(1)
}

callAssistant(question)