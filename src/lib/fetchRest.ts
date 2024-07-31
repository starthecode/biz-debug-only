export async function fetchRest(url: string) {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

  const { res } = await fetch(apiDomain + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 10 },
  }).then((res) => res.json());
}
