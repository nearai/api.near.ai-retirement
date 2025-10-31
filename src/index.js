addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const jsonResponse = {
    detail:
      "The NEAR AI Developer Hub and Completions API were retired on October 31, 2025. We recommend switching to our new private, confidential completions API at https://cloud.near.ai.",
  };

  return new Response(JSON.stringify(jsonResponse, null, 2), {
    status: 410,
    statusText: "Gone",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
