import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="flex flex-wrap">
        <Card uName="Chai aur code" price="50$" />
        <Card uName="Hitesh" price="60$" />
        <Card uName="Tushar" price="20$" />
        <Card uName="Tushar" price="20$" />
        <Card uName="Tushar" price="20$" />
        <Card />
        <Card uName="Tushar" price="20$" />
      </div>
    </>
  );
}

export default App;
