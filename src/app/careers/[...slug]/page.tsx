import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { Heading3 } from '@/components/Headings/Heading3';
import { SingleJobPost } from '@/components/page/Careers/SingleJobPage/SingleJobPost';
import { fetchGraphQL } from '@/lib/functions';
import { SingleJobPostQuery } from '@/lib/queries/queries';

export default async function Page({ params }: { params: { slug: string } }) {
  const { data } = await fetchGraphQL(SingleJobPostQuery, params);

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="px-10 pt-32 text-left w-[80em]">
        <div className="flex justify-center mb-5 mt-10">
          <Breadcrumbs
            props={'Case Study'}
            title={'Success Stories'}
            excerpt={'test'}
          />
        </div>
        <div className="w-full flex items-center justify-center text-center">
          <Heading3
            align={'center'}
            small={'Careers'}
            main={data?.career?.title}
            specialTitle={''}
            classes={'font-inter'}
            desc={''}
          />
        </div>
      </div>
      <div className="container mt-20">
        <SingleJobPost />
      </div>
    </section>
  );
}
