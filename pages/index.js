import Card from "../components/card";

export default () => (
  <div className="min-h-full min-w-full  bg-blue-900 text-gray-200">
    <main className="p-6 m-auto my-0 container">
      <header className="mb-5">
        <h1 className="text-orange-700 font-sans text-4xl">Johnni.codes</h1>
        <h5 className="font-mono text-gray-400 text-sm">
          personal site of Johnni D. Mortensen
        </h5>
      </header>

      <section className="">
        <h1 className="text-orange-600 text-lg">Bio:</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          commodo elit pulvinar maximus rutrum. Sed eu gravida justo. Sed
          sollicitudin elit nec ullamcorper convallis. In sem nisi, feugiat quis
          porttitor vitae, ultricies quis risus. In ut odio in turpis venenatis
          vehicula. Fusce eu scelerisque tellus. In urna arcu, ultrices at eros
          at, vulputate posuere leo. Suspendisse nibh lorem, gravida ut felis
          eu, suscipit maximus velit. Suspendisse ac ante a risus faucibus
          mattis. Nunc porta malesuada erat, euismod efficitur risus ultrices
          eget. Phasellus justo nisi, sollicitudin eget accumsan et, cursus at
          magna.
        </p>
      </section>
      <section className="grid">
        <Card
          title="Url Shortner"
          description="A typical url shortner, with auto or custom slug. New Urls are saved trough NextJS API route on Vercel Now, to a FaunaDB instance. The Redirects are handled serverside"
          stack={["NextJS", "Faunadb", "Vercel now"]}
          source="https://github.com/donjo9/shorturl"
          demo="https://jo9.dk/"
        />
        <Card
          title="Run With Johnni"
          description="My personal Endomondo Lite, a static site that displayes data taken from my Garmin Forerunner 30 in a Endomondo like fasion"
          stack={["Gatsby", "MongoDB", "Netlify"]}
          source="https://github.com/donjo9/run-with-gatsby"
          demo="https://run.with.johnni.ninja/"
        />
      </section>
    </main>
  </div>
);
