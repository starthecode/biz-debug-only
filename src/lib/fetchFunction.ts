export const fetchFunction = async (
  graphqlUrl: any,
  query: any,
  slug: string | null | undefined
) => {
  const { data } = await fetch(graphqlUrl, {
    method: 'POST',
    body: JSON.stringify({
      query: query,
      variables: { id: slug },
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 5 },
  }).then((res) => res.json());

  return data;
};
