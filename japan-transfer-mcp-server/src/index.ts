import { McpAgent } from "agents/mcp";
import server from "japan-transfer-mcp"

export class JapanTransferMCP extends McpAgent {  
    server = server; 
    async init() {  

    }  
}  
  
export default {  
    fetch(request: Request, env: Env, ctx: ExecutionContext) {  
        const url = new URL(request.url);  
  
        if (url.pathname === "/sse" || url.pathname === "/sse/message") {  
            return JapanTransferMCP.serveSSE("/sse").fetch(request, env, ctx);  
        }  
  
        if (url.pathname === "/mcp") {  
            return JapanTransferMCP.serve("/mcp").fetch(request, env, ctx);  
        }  
  
        return new Response("Not found", { status: 404 });  
    },  
};