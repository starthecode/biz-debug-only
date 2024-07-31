import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { Heading2 } from '@/components/Headings/Heading2';
import { SearchBar } from '@/components/page/CaseStudy/SearchBar';

export default async function CaseStudies() {
  return (
    <>
      <section className="container flex flex-col items-center justify-center">
        <div className="px-20 pt-44 text-center w-[80em]">
          <div className="flex justify-center">
            <Breadcrumbs
              props={'home'}
              title={'Success Stories'}
              excerpt={'This is demo'}
            />
          </div>
          <Heading2
            small={'Case Studies'}
            main={'Our Success Stories'}
            specialTitle={''}
            classes={'font-inter'}
            desc={
              'Helping customers achieve success with dynamic digital solutions and enterprise-driven best practices.'
            }
          />
        </div>

        <SearchBar />
      </section>
    </>
  );
}
