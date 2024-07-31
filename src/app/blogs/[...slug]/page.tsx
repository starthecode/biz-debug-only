import { SinglePost } from '@/components/TechTalks/SinglePost';
import { fetchGraphQL } from '@/lib/functions';
import { SinglePostQuery } from '@/lib/queries/queries';
import React from 'react';

const SingleBlog = async ({ params }: { params: { slug: string } }) => {
  const { data } = await fetchGraphQL(SinglePostQuery, params);

  return (
    <>
      <SinglePost postData={data} />
    </>
  );
};
export default SingleBlog;
