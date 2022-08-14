import React from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Index } from "./components/Post";

const App = () => (
  <>
    <Header />

    <section className="max-w-screen-lg my-8 mx-auto py-0 px-4 grid grid-cols-1 gap-8 items-start text-sm md:text-md md:grid-cols-feed">
      <Sidebar />
      <main>
        <Index />
        <Index />
      </main>
    </section>
  </>
);

export default App;
