import SingleSolution from '@/components/Solutions/SingleSolution';
import { fetchGraphQL } from '@/lib/functions';
import { SolutionsQuery } from '@/lib/queries/queries';

export default async function Page({ params }: { params: { slug: string } }) {
  const { data } = await fetchGraphQL(SolutionsQuery, params);
  return (
    <>
      <SingleSolution postData={data} />
    </>
  );
}
