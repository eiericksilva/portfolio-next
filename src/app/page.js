"use client";

import About from "@/components/about";
import Header from "@/components/header";
import MyHome from "@/components/myhome";

export default function Home() {
  return (
    <main>
      <Header />
      <MyHome />
      <About />
    </main>
  );
}
