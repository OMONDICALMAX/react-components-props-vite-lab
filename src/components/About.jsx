import React from "react";

function About({ about, image, blog }) {
  const defaultImage = "https://via.placeholder.com/215";

  return (
    <aside>
      <img
        src={image || defaultImage}
        alt="blog logo"
      />
      <p>{about || blog?.about}</p>
    </aside>
  );
}

export default About;