import React from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post/Post";

export type PostType = {
  id: number;
  author: { avatarUrl: string; name: string; role: string };
  content: { type: string; content: string }[];
  publishedAt: Date;
};

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/NicolasLOrtiz.png",
      name: "Nícolas Lopes Ortiz",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "https://github.com/NicolasLOrtiz" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];

const App = () => (
  <>
    <Header />

    <section className="max-w-screen-lg my-8 mx-auto py-0 px-4 grid grid-cols-1 gap-8 items-start text-sm md:text-md md:grid-cols-feed">
      <Sidebar />
      <main>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </main>
    </section>
  </>
);

export default App;
