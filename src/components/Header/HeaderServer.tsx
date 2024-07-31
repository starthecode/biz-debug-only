import Header from './Header';

export default async function HeaderServer() {
  const graphqlUrl = process.env.WP_GRAPHQL_URL;
  if (!graphqlUrl) {
    throw new Error('Missing GraphQL URL environment variable!');
  }

  const { data } = await fetch(graphqlUrl, {
    method: 'POST',
    body: JSON.stringify({
      query: `{
      menuItems(where: { location: PRIMARY }, first: 45) {
        nodes {
          key: id
          parentId
          title: label
          url
          path
          description
          menuAcfFields {
            showMenuLabel
            menuLabelText
            showMegaMenu
            showServicesMegaMenu
            menuClasses
            menuIcon {
              mediaItemUrl
            }
          }
        }
      }
    }`,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 5 },
  }).then((res) => res.json());

  return <Header menus={data.menuItems} />;
}
