export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // If the request is for a file (like .js, .css, .png), let it pass through
  if (url.pathname.includes(".")) {
    return next();
  }

  // Otherwise, serve the main index.html for all routes
  return context.env.ASSETS.fetch(new URL("/", request.url));
}
