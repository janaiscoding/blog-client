import Heading from "./components/UI_components/Heading";

export default function Home() {
  return (
    <main className="flex flex-col p-6 md:p-24 min-h-screen">
      <Heading title={"My Blog"} />
      <div>
        <p>
          I should add some sort of homescreen welcoming something something
          here..
        </p>
        <a href="/posts" className="text-blue">
          See posts
        </a>
      </div>
    </main>
  );
}
