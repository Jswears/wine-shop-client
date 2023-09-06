import { auth, authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/shop/wines", "/contact"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
