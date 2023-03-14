import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export interface Meta {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
}

const CustomHead = ({ ...customMeta }: Meta) => {
  const router = useRouter();

  const defaultMeta = {
    title: "AstraPay",
    description: "Astrapay is a bank...",
    image: "https://astrapay.com/AstraPayImg.PNG",
    type: "website",
  };

  const meta = { ...defaultMeta, ...customMeta };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />

      {/* og */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      {/* <meta
        property="og:url"
        content={`https://101training.xyz${router.asPath}`}
      /> */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="AstraPay" />

      {/* tw */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@my_acc" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} /> */}

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;
