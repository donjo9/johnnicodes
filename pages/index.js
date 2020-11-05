import Card from "../components/card";
import SoMe from "../components/some";
import Head from "next/head";
import contentful from "../utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";
import tw from "twin.macro";

const Bio = styled.section`
  h1 {
    ${tw`text-orange-600 text-xl`}
  }

  p {
    ${tw`py-1`}
  }
`;

export default ({ main }) => {
  const { projects, some } = main;
  return (
    <div className="min-h-full min-w-full  bg-blue-900 text-gray-200">
      <Head>
        <title>{main.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="p-6 m-auto my-0 container">
        <header className="mb-5 grid grid-cols-2 sm:grid-cols-4">
          <h1 className="text-orange-700 font-sans text-4xl col-span-2 sm:col-span-4">
            {main.header}
          </h1>
          <h5 className="font-mono text-gray-400 text-sm col-span-2">
            {main.subtitle}
          </h5>
          <SoMe some={some} />
        </header>

        <Bio>{documentToReactComponents(main.bio)}</Bio>
        <section className="grid">
          {projects &&
            projects.map((p) => (
              <Card key={p.fields.sourceUrl} {...p.fields}></Card>
            ))}
        </section>
      </main>
    </div>
  );
};
export const getStaticProps = async (context) => {
  const all = await contentful.getEntries({ content_type: "mainPage" });
  const main = all.items[0].fields || { projects: [], some: [] };
  return {
    props: {
      main: all.items[0].fields,
    },
  };
};
