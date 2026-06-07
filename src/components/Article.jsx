import React from "react";

export default function Article({ post }) {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.date}</p>
      <p>{post.preview}</p>
      <p>{post.minutes} min read</p>
    </article>
  );
}