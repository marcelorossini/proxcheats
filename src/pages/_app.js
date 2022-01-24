import GlobalStyles from "../styles/global";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const data = {
    name: "Agência Clinica",
    title: "Agência Clinica  - Marketing Digital para Profissionais da Saúde",
    description:
      "O marketing tradicional não funciona mais! Somos uma agência 100% focada em estratégias humanizadas, não basta só atrair pacientes, nós te ajudamos a encantá-los.",
    url: "https://www.agenciaclinica.com.br",
    image: "https://www.agenciaclinica.com.br/assets/og-20211005.jpg",
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
