'use server';

export async function fetchData(url: string) {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
  const response = await fetch(apiDomain + url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
