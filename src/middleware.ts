import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "tr", "nl", "fr", "de"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(tr|nl|en|fr|de)/:path*"],
};
