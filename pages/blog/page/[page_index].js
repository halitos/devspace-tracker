import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Layout from "../../../components/Layout";
import Post from "../../../components/Post";
import { sortByDate } from "../../../utils";

export default function BlogPage({ posts }) {
  return (
    <Layout>
      <h1 className="text-3xl text-center md:text-5xl md:text-left border-b-4 p-5 font-bold">
        All Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </Layout>
  );
}

const POSTS_PER_PAGE = 6;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);

  let paths = [];

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((postName) => {
    const slug = postName.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", postName),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
