import { posts } from "@/content/portfolio";

export default function Writing() {
  return (
    <section id="blog" className="section" aria-labelledby="writing-heading">
      <div className="container">
        <div data-reveal className="writing__head">
          <h2 id="writing-heading" className="eyebrow mono">
            WRITING
          </h2>
          <a href="#blog" className="writing__all mono">
            ALL POSTS →
          </a>
        </div>
        <div className="writing__grid">
          {posts.map((post) => (
            <a key={post.title} data-reveal href={post.href} className="post">
              <span className="post__date mono">{post.date}</span>
              <h3 className="post__title">{post.title}</h3>
              <p className="post__blurb">{post.blurb}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
