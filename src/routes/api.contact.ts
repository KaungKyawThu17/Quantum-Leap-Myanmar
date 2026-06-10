import { createFileRoute } from "@tanstack/react-router";

import { handleContactRequest } from "@/lib/contact-mail";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: ({ request }) => handleContactRequest(request, process.env),
      OPTIONS: () => new Response(null, { status: 204 }),
    },
  },
});
