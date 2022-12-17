import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../components/BlogCard";

const graphcms = new GraphQLClient(
  "https://api-ca-central-1.hygraph.com/v2/clbqqyr0f085401us9t04eduy/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        publishedAt
        createdBy {
          id
        }
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
}

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Keez</title>
        <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>KZ Web Specialist</title>
    <link rel="icon" href="/k.png"/>

    <link rel="stylesheet" href="/styles/style.css"/>
    <link rel="stylesheet" href="aos-by-red.css"/>
     <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
     <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"/>
<link rel="stylesheet" href="http://fortawesome.github.io/Font-Awesome/assets/font-awesome/css/font-awesome.css"/> 

      </Head>

      <main className={styles.main}>
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            author={post.author}
            coverPhoto={post.coverPhoto}
            key={post.id}
            datePublished={post.datePublished}
            slug={post.slug}
          />
        ))}
      </main>
    </div>
  );
}
