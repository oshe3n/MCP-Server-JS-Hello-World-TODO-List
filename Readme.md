# 🚀 Simple Hello World MCP Server (Javascript) – Todo List Example

This is a **minimal Model Context Protocol (MCP) server example** written in Javascript (using TypeScript SDK).  
It demonstrates a **Hello World MCP Server** that manages a simple **Todo List**.  

👉 Perfect for anyone who wants to learn how to build tools with the MCP TypeScript SDK.

📖 Official MCP SDK Docs: [modelcontextprotocol/typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk)

---

## ✨ Features – Todo List MCP App
This server exposes multiple MCP tools that show how to interact with a Todo List:

- ✅ **List todos** – Get all items in the todo list  
- ➕ **Add todo (text)** – Add a new item to the list  
- 🔍 **List todo item by ID** – Fetch a specific todo by ID  
- 🧹 **Clear all todos** – Remove all items in the list  

Each tool is a simple MCP endpoint, making this project a great **starter template** or **Hello World** for MCP servers.

## Setting up on local

```
npm install
npm run serve
```

## Test via bash

### List all todos

```
curl -X POST http://localhost:3000/mcp-server \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "listTodoItemsAction",
      "arguments": {}
    }
  }'
```

### Add todo item

```
curl -X POST http://localhost:3000/mcp-server \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "addTodoItemAction",
      "arguments": {
        "item": "Write more tests"
      }
    }
  }'
```

### List todo item by id

```
curl -X POST http://localhost:3000/mcp-server \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "listTodoItemsWithId",
      "arguments": {
        "id": 2
      }
    }
  }'
```

### Clear todo list

```
curl -X POST http://localhost:3000/mcp-server \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "clearTodoItemsAction",
      "arguments": {}
    }
  }'
```