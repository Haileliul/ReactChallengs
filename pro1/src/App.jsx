import { useState } from "react";
import reactLogo from "./assets/react.svg";
import bulb from "./assets/bulb.jpg";
import viteLogo from "/vite.svg";
import Header from "./Components/header.jsx";
import Main from "./Components/mainn";
import Footer from "./Components/footer";

import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <div className="flex flex-col  min-h-screen justify-center items-center bg-gray-900 ">
      <div className="w-64  bg-gray-800 rounded-lg  overflow-clip shadow-lg shadow-gray-600">
        <header>
          <Header />
        </header>
        <main className="text-white">
          <Main />
        </main>

        <footer className="  text-center mt-2 ">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
