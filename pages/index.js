import Card from "../components/card";

export default () => (
  <div className="min-h-full min-w-full  bg-blue-900">
    <main className="p-6 m-auto my-0 container">
      <header>
        <h1 className="text-orange-700 font-sans text-3xl">Johnni.codes</h1>
      </header>
      <section>
        <p className="font-mono text-gray-400 text-sm">
          personal site of Johnni D. Mortensen
        </p>
      </section>
      <section className="flex flex-wrap justify-around">
        <Card
          title="lvl42 Url Shortner"
          description="A typical url shortner, with auto og custom slug"
          stack={["nextjs", "faunadb", "vercel"]}
        />
        <Card
          title="lvl42 Url Shortner"
          description="A typical url shortner, with auto og custom slug"
          stack={["nextjs", "faunadb", "vercel"]}
        />
        <Card
          title="lvl42 Url Shortner"
          description="A typical url shortner, with auto og custom slug"
          stack={["nextjs", "faunadb", "vercel"]}
        />
        <Card
          title="lvl42 Url Shortner"
          description="A typical url shortner, with auto og custom slug"
          stack={["nextjs", "faunadb", "vercel"]}
        />
        <Card
          title="lvl42 Url Shortner"
          description="A typical url shortner, with auto og custom slug"
          stack={["nextjs", "faunadb", "vercel"]}
        />
        <Card
          title="lvl42 Url Shortner"
          description="A typical url shortner, with auto og custom slug"
          stack={["nextjs", "faunadb", "vercel"]}
        />
      </section>
    </main>
  </div>
);
