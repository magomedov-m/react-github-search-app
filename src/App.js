import React from "react";
import Header from "./components/Header/Header";
import './components/Header/Header'
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import './assets/reset.css'

function App() {
  return (
    <div className="container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
