import { headers } from 'next/headers';

export default async function NotFound() {
  const headersList = headers();
  const referer = headersList.get('referer');

  return (
    <>
      <h1 className="text-center">404 - Not Found</h1>
      <p className="text-center text-red-500">{referer}</p>
    </>
  );
}
