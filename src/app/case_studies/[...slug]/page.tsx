import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { Heading3 } from '@/components/Headings/Heading3';
import { CaseStudy } from '@/components/page/CaseStudy/CaseStudy';
import { fetchGraphQL } from '@/lib/functions';
import { SingleCaseStudyQuery } from '@/lib/queries/queries';

export default async function SingleCaseStudy({
  params,
}: {
  params: { slug: string[] };
}) {
  const { data } = await fetchGraphQL(SingleCaseStudyQuery, params);

  console.log('datadata', data);

  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <div className="px-10 pt-32 text-left w-[80em]">
          <div className="flex justify-start mb-10 mt-10">
            <Breadcrumbs
              props={'Case Study'}
              title={'Success Stories'}
              excerpt={'test'}
            />
          </div>
          <div className="w-full flex justify-start items-start text-left">
            <Heading3
              small={'Case Study'}
              main={data?.caseStudy?.title}
              specialTitle={''}
              classes={'font-inter'}
              desc={data?.caseStudy?.excerpt}
            />
          </div>
        </div>
        <CaseStudy data={data} />
      </section>
    </>
  );
}
