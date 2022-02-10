import React, { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div
      className="wrapper"
      style={{
        height: "100vh",
        width: "100vw",
        background: "yellow"
      }}
    >
      <header className="header">header</header>

      <aside className="navbar">navbar</aside>
      <section className="content">content</section>

      <section className="sidebar">sidebar</section>
      <section className="ad">Ad</section>
      <footer className="footer">footer</footer>
    </div>
  );
}
