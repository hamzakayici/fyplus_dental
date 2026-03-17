export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: "https://fyplus.com.tr/sitemap.xml",
    host: "https://fyplus.com.tr",
  };
}
