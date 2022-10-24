import Head from "next/head";
import Footer from "./footer";
import NavBar from "./navbar";

function Layout({ children }: { children: any }) {
  return (
    <div>
      <Head>
        <title>Slow travel family</title>
        <meta name="description" content="Slow travel family" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.cdnfonts.com/css/libre-baskerville"
          rel="stylesheet"
        ></link>
      </Head>
      <main className="relative">
        <NavBar />
        {children}
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
