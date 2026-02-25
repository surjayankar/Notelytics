// test-keys.js
import OpenAI from "openai";
import { Pinecone } from "@pinecone-database/pinecone";

// Load environment variables (make sure you have a .env file with your keys)
import dotenv from "dotenv";
dotenv.config();

async function testOpenAI() {
  console.log("🔹 Testing OpenAI API Key...");
  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const models = await client.models.list();
    console.log("✅ OpenAI key works. Models available:", models.data.map(m => m.id));
  } catch (err) {
    console.error("❌ OpenAI test failed:", err.message);
  }
}

async function testPinecone() {
  console.log("🔹 Testing Pinecone API Key...");
  try {
    const client = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
    const indexes = await client.listIndexes();
    console.log("✅ Pinecone key works. Indexes available:", indexes);
  } catch (err) {
    console.error("❌ Pinecone test failed:", err.message);
  }
}

async function runTests() {
  await testOpenAI();
  await testPinecone();
}

runTests();
