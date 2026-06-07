export default function About({ blog = {} }) {
  const image = blog.image || "https://via.placeholder.com/150";

  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{blog.about || "No about text provided"}</p>
    </aside>
  );
}