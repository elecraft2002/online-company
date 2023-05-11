import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices/";
import { Layout } from "../components/Layout";
import Scene from "../components/Scene";

const Index = ({ page, navigation, settings }) => {
  return (
    <Layout
      alternateLanguages={page.alternate_languages}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head>
      <div className="h-[100vh] w-full">
        <Scene />
        <h1 className="text-6xl font-bold tablet:text-8xl desktop:text-[10vw]">
          <span className="px-8 absolute top-24 z-10 tracking-widest before:absolute before:-z-10 before:h-full before:w-4/5 before:translate-x-8 before:translate-y-8 before:bg-lightSlate before:content-['']">
            VOJTÍK
          </span>
          <span className="px-8 absolute bottom-24 right-0 z-10 tracking-widest before:absolute before:-z-10 before:h-full before:w-4/5 before:translate-x-8 before:translate-y-8 before:bg-lightSlate before:content-['']">
            DESIGN
          </span>
        </h1>
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}
