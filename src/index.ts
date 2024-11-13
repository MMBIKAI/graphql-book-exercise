import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { BookResolver } from "./bookResolvers";

async function main() {
  const schema = await buildSchema({
    resolvers: [BookResolver],
  });

  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at: ${url}`);
}

main().catch((error) => {
  console.error("Error starting server:", error);
});