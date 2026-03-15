# Hello AI from TypeScript

A minimal TypeScript CLI that calls the Anthropic API and returns 
a response to the console. Built as part of a 12-month roadmap 
to transition from Laravel/PHP to AI engineering.

## What it does

- Accepts a question as a command-line argument
- Calls the Anthropic API using the claude-haiku model
- Returns the response and token usage to the console

## Tech stack

- TypeScript
- Node.js
- Anthropic SDK (@anthropic-ai/sdk)
- dotenv

## Setup

1. Clone the repository
2. Install dependencies

npm install

3. Create a .env file in the root folder

ANTHROPIC_API_KEY=your_api_key_here

4. Run the project

npx ts-node src/index.ts "your question here"

## Example

npx ts-node src/index.ts "What is a closure in JavaScript?"

## Project structure

src/
  index.ts   Main entry point
.env.example  Environment variables template
tsconfig.json TypeScript configuration