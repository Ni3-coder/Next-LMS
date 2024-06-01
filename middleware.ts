import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/api/webhook"]
});
 
export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Matches all routes except static files and Next.js internal files
    "/", // Protects the root route
    "/api/(.*)", // Protects all API routes
    "/trpc/(.*)", // Protects all tRPC routes
  ],
};