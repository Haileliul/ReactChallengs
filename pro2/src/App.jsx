import { useState } from "react";
import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";
import Header from "./Components/header.jsx";
import Main from "./Components/mainn";
import Footer from "./Components/footer";

import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <div className="flex flex-col  min-h-screen  ">
      <header>
        <Header />
      </header>
      <main className="px-20">
        <Main />
      </main>
    </div>
  );
}

export default App;
