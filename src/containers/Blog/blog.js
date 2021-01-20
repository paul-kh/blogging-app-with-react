import react from "react";

// COMPOENTS
import Post from "../../components/Post/post";
import FullPost from "../../components/FullPost/full-post";
import NewPost from "../../components/NewPost/new-post";

const Blog = (props) => {
  return (
    <div>
      <section>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </section>

      <section>
        <FullPost></FullPost>
      </section>

      <section>
        <NewPost></NewPost>
      </section>
    </div>
  );
};

export default Blog;
