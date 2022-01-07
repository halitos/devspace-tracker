import fs from "fs";
import path from "path";
import Layout from "../../../components/Layout";
import CategoryList from "../../../components/CategoryList";
import Pagination from "../../../components/Pagination";
import Post from "../../../components/Post";
import { getPosts } from "../../../lib/posts";

export default function BlogPage({ posts, numPages, currentPage, categories }) {
  return (
    <Layout>
      <div className="flex justify-between">
        <div className="w-full lg:w-3/4 lg:mr-10">
          <h1 className="text-3xl text-center md:text-5xl md:text-left border-b-4 p-5 font-bold">
            All Posts
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
          <Pagination currentPage={currentPage} numPages={numPages} />
        </div>
        <div className="hidden lg:inline w-1/4">
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  );
}

const POSTS_PER_PAGE = 3;

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

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1);

  const files = fs.readdirSync(path.join("posts"));

  const posts = getPosts();

  // Get Categoried for Sidebar

  const categories = [
    ...new Set(posts.map((post) => post.frontmatter.category)),
  ];

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;
  const orderedPosts = posts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  );

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      categories,
    },
  };
}
