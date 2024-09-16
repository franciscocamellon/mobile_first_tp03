import React from "react";
import Post from "./post";
import styles from "./styles.module.css";

function Feed() {
  const posts = [
    {
      image: "https://via.placeholder.com/150",
      title: "Postagem 1",
      text: "Este é o conteúdo da postagem 1.",
      date: "15 de setembro de 2024",
      author: "João",
      likes: 10,
      shares: 2,
      comments: ["Muito bom!", "Adorei o post."],
    },
  ];
  return (
    <div className={styles.feed}>
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}

export default Feed;
