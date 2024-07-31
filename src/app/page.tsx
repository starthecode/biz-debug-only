import { Hero } from '@/components/Hero/Hero';
import { PartnerLogo } from '@/components/Partners/PartnerLogo';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import About from '@/components/Home/About/About';
import Services from '@/components/Home/Services/Services';
import Industries from '@/components/Home/Industries/Industries';
import Choose from '@/components/Home/Why Choose/Choose';
import Testimonials from '@/components/Home/Testimonials/Testimonials';
import Blog from '@/components/Home/Blogs/Blog';
import { fetchGraphQL } from '@/lib/functions';
import { HomeQuery } from '@/lib/queries/queries';

export default async function Home() {
  const params = { slug: ['/'] };
  const { data } = await fetchGraphQL(HomeQuery, params);

  return (
    <>
      <Hero heroData={data?.page?.HomePage?.homeSlider} />
      <PartnerLogo partners={data?.page?.HomePage?.partnerLogo} />
      <About />
      <Services services={data?.page.HomePage} />
      <Industries industries={data?.page?.HomePage?.industriesSection} />
      <Choose />
      <Testimonials testimonials={data?.page?.HomePage.testimonialsItems} />
      <Blog blogsData={data?.page?.HomePage?.homeBlogGroup} />
    </>
  );
}
