# Hello AI from TypeScript

A minimal TypeScript CLI that calls the Anthropic API and returns
a response to the console. Built as part of a 12-month roadmap
to transition from Laravel/PHP to AI engineering.

## What it does

- Accepts a question as a command-line argument
- Calls the Anthropic API and returns the response to the console
- Returns token usage alongside the response
- Model is configurable directly in `src/index.ts`

## Tech stack

- TypeScript
- Node.js
- Anthropic SDK (`@anthropic-ai/sdk`)
- dotenv

## Model

Currently using `claude-haiku-4-5-20251001` — configurable in `src/index.ts`

## Setup

1. Clone the repository
2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root folder
```bash
ANTHROPIC_API_KEY=your_api_key_here
```

4. Run the project
```bash
npx ts-node src/index.ts "your question here"
```

## Example
```bash
npx ts-node src/index.ts "What is a closure in JavaScript?"
```

## Project structure
```
src/
└── index.ts        Main entry point
.env.example        Environment variables template
tsconfig.json       TypeScript configuration
package.json        Dependencies
```

## Context

Built as Week 1 of a 12-month roadmap transitioning from Laravel/PHP
to AI engineering — covering TypeScript, Next.js, RAG systems, and
AI agents for the international market.