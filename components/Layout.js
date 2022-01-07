import Head from "next/head";
import Header from "./header";
import Search from "./Search";
export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Search />
      <main className="container mx-auto my-5">{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: "Welcome to Devspace",
  keywords: "development, coding, programming",
  description: "This is a place for devs",
};
