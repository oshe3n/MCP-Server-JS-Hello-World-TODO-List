import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import {z} from "zod"

// Sample todo list, will be hooked to Azure Table Storage in future
const todos = [
  "Learn MCP",
  "Build a Todo List MCP Server",
  "Profit!",
];

// Create the MCP server instance
const server = new McpServer({
  name: "todo-mcp-server",
  version: "1.0.0",
});

// Register a tool to list all todo items
server.registerTool(
  "listTodoItemsAction",
  {
    title: "List All Todos",
    description: "Returns all todo items in the Todo List MCP server.",
  },
  async () => {
    return {
      content: [
        {
          type: "text",
          text: todos.join("\n"),
        },
      ],
    };
  }
);

// Register a tool to add a new todo item
server.registerTool(
  "addTodoItemAction",
  {
    title: "Add Todo Item",
    description: "Adds a new todo item to the Todo List MCP server.",
    inputSchema: { item: z.string() },
  },
  async (params) => {
    const { item } = params;
    todos.push(item);
    return {
      content: [
        {
          type: "text",
          text: `Added todo item: ${item}`,
        },
      ],
    };
  }
);

// Register a tool to list todo items with given id
server.registerTool(
  "listTodoItemsWithId",
  {
    title: "List Todos with given id",
    description: "Returns todo item with the given id in Todo List MCP server.",
    inputSchema: { id: z.number() },
  },
  async (params) => {
    const { id } = params;
    return {
      content: [
        {
          type: "text",
          text: todos[id] || "Item not found",
        },
      ],
    }
  }
);

// Clear all todo items
server.registerTool(
  "clearTodoItemsAction",
  {
    title: "Clear All Todos",
    description: "Clears all todo items from the Todo List MCP server.",
  },
  async () => {
    todos.length = 0;
    return {
      content: [
        {
          type: "text",
          text: "All todo items have been cleared.",
        },
      ],
    };
  }
);


export { server };

