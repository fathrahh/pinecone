import { Pinecone } from "@pinecone-database/pinecone";
import dotenv from "dotenv";

dotenv.config();

export async function main() {
  const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
  });
}

main();
