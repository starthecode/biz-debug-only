import ParentPage from '@/components/page/ServicesPage/ParentPage';
import { fetchGraphQL } from '@/lib/functions';
import { PageQuery } from '@/lib/queries/queries';

export default async function Services({
  params,
}: {
  params: { slug: string[] };
}) {
  const { data } = await fetchGraphQL(PageQuery, params);

  return (
    <>
      <ParentPage postData={data?.page} />
    </>
  );
}
