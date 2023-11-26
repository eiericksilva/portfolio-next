"use client";

import About from "@/components/about";
import Contacts from "@/components/contacts";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MyHome from "@/components/myhome";
import Projects from "@/components/projects";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main>
      <Header />
      <MyHome />
      <About />
      <Projects />
      {/* <Contacts /> */}
      <Footer />
      <Toaster position="top-right" />
    </main>
  );
}
