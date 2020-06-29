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
          magna. Ut a consequat eros, sit amet mollis nunc. Vivamus in fringilla
          nunc. Morbi tempor faucibus ipsum, sit amet tincidunt diam euismod
          nec. In eu ornare neque. Praesent posuere egestas eros ut facilisis.
          Vivamus venenatis tristique erat, ut suscipit turpis facilisis eu. Ut
          in eros quis lorem fermentum gravida. Etiam euismod elit in dolor
          laoreet sodales. Nullam sit amet lacinia diam, eget pulvinar justo.
          Cras vulputate risus bibendum molestie lobortis. Sed quis enim augue.
          Integer blandit nunc at ligula auctor consequat. In ac tellus nec
          justo tincidunt rutrum. Nulla commodo dui id nisl elementum, et
          convallis ante sodales. Morbi dictum justo massa, eget fermentum arcu
          iaculis eleifend. Etiam sed consectetur sapien, vel congue turpis.
        </p>
      </section>
      <section>
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
