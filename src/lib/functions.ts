// import { GraphQLResponse, SearchResults } from '../lib/types';

// /**
//  * Function to execute a GraphQL query.
//  */
// export async function fetchGraphQL<T = any>(
//   query: string,
//   params: { [key: string]: any },
//   preview = false
// ): Promise<GraphQLResponse<T>> {
//   try {
//     // Validate the WordPress GraphQL URL.
//     const graphqlUrl = process.env.WP_GRAPHQL_URL;
//     if (!graphqlUrl) {
//       throw new Error('Missing WordPress GraphQL URL environment variable!');
//     }

//     // Get the refresh token.
//     const refreshToken = process.env.NEXTJS_AUTH_REFRESH_TOKEN;

//     // Prepare headers.
//     const headers: { [key: string]: string } = {
//       'Content-Type': 'application/json',
//     };

//     // If preview mode is enabled and we have a token.
//     if (preview && refreshToken) {
//       // Add refresh token to fetch headers.
//       headers['Authorization'] = `Bearer ${refreshToken}`;
//     }

//     // Get the slug.
//     const slug = params ? params.slug[0] : params;

//     // const slug = variables?.slug || variables?.id || 'graphql';

//     const body = {
//       query: query,
//       ...(slug && { variables: { id: slug } }),
//     };

//     // Fetch data from external API.
//     const response = await fetch(graphqlUrl, {
//       method: 'POST',
//       headers,
//       body: JSON.stringify(body),
//       next: { revalidate: 5 },
//     });

//     // If the response status is not 200, throw an error.
//     if (!response.ok) {
//       console.error('Response Status:', response.status);
//       throw new Error(response.statusText);
//     }

//     // Read the response as JSON.
//     const data = await response.json();

//     // Throw an error if there was a GraphQL error.
//     if (data.errors) {
//       console.error('GraphQL Errors:', data.errors);
//       throw new Error('Error executing GraphQL query');
//     }

//     // Finally, return the data.
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

// /**
//  * Search the WordPress REST API for posts matching the query.
//  *
//  * @see https://developer.wordpress.org/rest-api/reference/search-results/
//  */
// export async function searchQuery(query: string): Promise<SearchResults[]> {
//   // Sanitize the search query.
//   query = encodeURIComponent(query.trim());

//   try {
//     // If there is no URL, throw an error.
//     if (!process.env.NEXT_PUBLIC_API_DOMAIN) {
//       throw new Error('Missing WordPress REST API URL environment variable!');
//     }

//     // Always fetch fresh search results.
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_API_DOMAIN}/search?search=${query}&subtype=any&per_page=100`
//     );

//     // If the response status is not 200, throw an error.
//     if (!response.ok) {
//       console.error('Response Status:', response.status);
//       throw new Error(response.statusText);
//     }

//     // Read the response as JSON.
//     const data = await response.json();

//     // Verify data has posts.
//     if (!data || data.length === 0) {
//       throw new Error('No posts found.');
//     }

//     // Return the data.
//     return data as SearchResults[];
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// }

import { GraphQLResponse, SearchResults } from '../lib/types';

/**
 * Function to execute a GraphQL query.
 */
export async function fetchGraphQL<T = any>(
  query: string,
  params: { [key: string]: any },
  preview = false
): Promise<GraphQLResponse<T>> {
  try {
    // Validate the WordPress GraphQL URL.
    const graphqlUrl = process.env.WP_GRAPHQL_URL;
    if (!graphqlUrl) {
      throw new Error('Missing WordPress GraphQL URL environment variable!');
    }

    // Get the refresh token.
    const refreshToken = process.env.NEXTJS_AUTH_REFRESH_TOKEN;

    // Prepare headers.
    const headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
    };

    // If preview mode is enabled and we have a token.
    if (preview && refreshToken) {
      // Add refresh token to fetch headers.
      headers['Authorization'] = `Bearer ${refreshToken}`;
    }

    // Get the slug.
    const slug = params ? params.slug[0] : params;

    // const slug = variables?.slug || variables?.id || 'graphql';

    const body = {
      query: query,
      ...(slug && { variables: { id: slug } }),
    };

    // Fetch data from external API.
    const response = await fetch(graphqlUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
      next: { revalidate: 5 },
    });

    // If the response status is not 200, throw an error.
    if (!response.ok) {
      console.error('Response Status:', response.status);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Read the response as text.
    const text = await response.text();

    try {
      // Attempt to parse the response as JSON.
      const data = JSON.parse(text);

      // Throw an error if there was a GraphQL error.
      if (data.errors) {
        console.error('GraphQL Errors:', data.errors);
        throw new Error('Error executing GraphQL query');
      }

      // Finally, return the data.
      return data;
    } catch (jsonError) {
      // If parsing fails, log the raw response text for debugging.
      console.error('Failed to parse JSON:', text);
      throw jsonError;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

/**
 * Search the WordPress REST API for posts matching the query.
 *
 * @see https://developer.wordpress.org/rest-api/reference/search-results/
 */
export async function searchQuery(query: string): Promise<SearchResults[]> {
  // Sanitize the search query.
  query = encodeURIComponent(query.trim());

  try {
    // If there is no URL, throw an error.
    if (!process.env.NEXT_PUBLIC_API_DOMAIN) {
      throw new Error('Missing WordPress REST API URL environment variable!');
    }

    // Always fetch fresh search results.
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/search?search=${query}&subtype=any&per_page=100`
    );

    // If the response status is not 200, throw an error.
    if (!response.ok) {
      console.error('Response Status:', response.status);
      throw new Error(response.statusText);
    }

    // Read the response as JSON.
    const data = await response.json();

    // Verify data has posts.
    if (!data || data.length === 0) {
      throw new Error('No posts found.');
    }

    // Return the data.
    return data as SearchResults[];
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
