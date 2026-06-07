export default function Header({ blog = {} }) {
  return (
    <header>
      <h1>{blog.name || "Default Blog"}</h1>
    </header>
  );
}