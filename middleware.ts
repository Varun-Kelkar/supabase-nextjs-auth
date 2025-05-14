import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
    matcher: [
        /**
         * Match all paths except:
         * - /_next (static assets & data)
         * - /favicon.ico
         * - Public routes: /, /login, /signup
         */
        '/((?!api|_next|favicon.ico|login|signup|^$).*)',
      ],
};
