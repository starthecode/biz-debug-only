import Blog from '@/components/TechTalks/Blog';
import { fetchGraphQL } from '@/lib/functions';
import { AllPostQuery } from '@/lib/queries/queries';

const Blogs = async () => {
  const params = '' as any;

  const { data } = await fetchGraphQL(AllPostQuery, params);

  return (
    <Blog singleBlog={data.contentNodes.edges} multiBlogs={data.posts.nodes} />
  );
};

export default Blogs;
