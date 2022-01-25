import GlobalStyles from "../styles/global";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const data = {
    name: "ProxCheats",
    title: "ProxCheats",
    description:
      "",
    url: "",
    image: "",
  };
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        {/* Default */}
        <meta name="description" content={data.description} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={data.name} key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content={data.url} key="ogurl" />
        <meta property="og:image" content={data.image} key="ogimage" />
        <meta property="og:site_name" content={data.title} key="ogsitename" />
        <meta property="og:title" content={data.title} key="ogtitle" />
        <meta
          property="og:description"
          content={data.description}
          key="ogdesc"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
