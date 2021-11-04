import Stock from "../../components/Stock/Stock"

const categoryItemsQuery = `
  query CategoryItemsQuery {
    categories {
      name
      id
      category_items {
        item {
          id
          name
          in_stock
          restock_soon
          unit
        }
      }
    }
  }
`;

export async function getServerSideProps(context) {
  console.log(process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT)
  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": process.env.NEXT_PUBLIC_GRAPHQL_SECRET
    },
    body: JSON.stringify({
      "query": categoryItemsQuery,
      "variables": {}
    })
  }).then( response => response.json()).then( ({data}) => data.categories);

  return {
    props: {
      categories: res
    }
  };

}

export default function stockPage({categories}) {
  return (
    <Stock categories={categories}/>
  )
}