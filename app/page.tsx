import Heading from "./components/UI_components/Heading";

export default function Home() {
  return (
    <main className="h-screen flex flex-col p-6 md:p-24 md:gap-24">
      <Heading  title={'My Blog'} />
      <div>
      <a href="/posts" className="text-blue">
        My posts
      </a>
      <a href="/admin" className="text-blue ml-5">
        Admin view
      </a>
      </div>
    </main>
  );
}
