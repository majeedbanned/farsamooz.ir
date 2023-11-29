import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      {" "}
      <header>
        <h1>Your Blog Post Title</h1>
        <p>
          Published on <time>January 1, 2023</time> by Your Name
        </p>
      </header>
      <article>
        <p>Introduction to your blog post...</p>

        <h2>Section 1: Heading</h2>
        <p>Content of section 1...</p>

        <h2>Section 2: Another Heading</h2>
        <p>Content of section 2...</p>
      </article>
    </div>
  );
}
