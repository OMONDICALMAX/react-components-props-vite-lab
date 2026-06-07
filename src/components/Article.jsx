import React from "react";

function Article({ title, date, preview }) {
  const defaultDate = new Date(0).toDateString();

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;