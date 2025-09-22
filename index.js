import express from "express";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { server } from "./mcpServer.js";

const expressApp = express();
expressApp.use(express.json());

expressApp.all("/mcp-server", async (req, res) => {
  console.log("received");
  let transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
  });
  await server.connect(transport);  
  await transport.handleRequest(req, res, req.body);
});

expressApp.listen(3000, () => {
  console.log("Express server listening on port 3000");
});