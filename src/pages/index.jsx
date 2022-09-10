import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { List } from "../components/List/List";

export function Home() {
  return (
    <>
      <Header />
      <List />
      <Footer />
    </>
  );
}
