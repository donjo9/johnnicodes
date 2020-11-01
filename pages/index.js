import Card from "../components/card";
import SoMo from "../components/some";
import Head from "next/head";

export default ({projects}) => (
  <div className="min-h-full min-w-full  bg-blue-900 text-gray-200">
    <Head>
      <title>{"developer by ♥"}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main className="p-6 m-auto my-0 container">
      <header className="mb-5 grid grid-cols-4">
        <h1 className="text-orange-700 font-sans text-4xl col-span-4">
          Johnni.codes
        </h1>
        <h5 className="font-mono text-gray-400 text-sm col-span-2">
          personal site of Johnni D. Mortensen
        </h5>
        <SoMo />
      </header>

      <section className="">
        <h1 className="text-orange-600 text-xl">Bio:</h1>
        <p className="py-1">
          Hi! My name is Johnni, my work title is Engineer, but I'm more than
          that, and this is my space.
        </p>
        <p className="py-1">
          So who am i? im a father, husband and developer by ♥. Problem solving
          is what drives me, and it's what i've made my living.
        </p>
        <p className="py-1">
          This is where my work will go on display, so take a look around
        </p>
      </section>
      <section className="grid">
        {projects && projects.map(p => <Card key={p.source} {...p} ></Card>)}
      </section>
    </main>
  </div>
);

export const getStaticProps = async (context) => {
  return {
    props: {
      projects: [
        {
          title: "Url Shortner",
          description:
            "A typical url shortner, with auto or custom slug. New Urls are saved trough NextJS API route on Vercel Now, to a FaunaDB instance. The Redirects are handled serverside",
          stack: ["NextJS", "Faunadb", "Vercel now"],
          source: "https://github.com/donjo9/shorturl",
          demo: "https://jo9.dk/",
        },
        {
          title: "Run With Johnni",
          description:
            "My personal Endomondo Lite, a static site that displayes data taken from my Garmin Forerunner 30 in a Endomondo like fasion",
          stack: ["Gatsby", "MongoDB", "Netlify"],
          source: "https://github.com/donjo9/run-with-gatsby",
          demo: "https://run.with.johnni.ninja/",
        },
      ],
    },
  };
};
