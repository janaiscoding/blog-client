export default function Home() {
  return (
    <main className="h-screen flex flex-col items-start justify-center p-24 gap-24">
      Welcome to my blog
      <a href="/posts" className="text-blue">
        My posts
      </a>
      <a href="/admin" className="text-blue">
        Admin view
      </a>
    </main>
  );
}
