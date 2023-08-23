import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const numsPizza = pizzaData.length;

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {numsPizza > 0 ? (
        <>
          <p>Authentic italian cuisine. 6 creative dishes to choose from.</p>
          <ul className="pizzas">
            {pizzaData.map((data) => (
              <Pizza key={data.name} pizza={data} />
            ))}
          </ul>
        </>
      ) : (
        <h1>No pizza available right now, please visit after sometime.</h1>
      )}
    </div>
  );
}

function Pizza({ pizza }) {
  // if pizza sold out then return null
  // if (pizza.soldOut) return null;
  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour >= 12 && hour <= 22;
  // console.log(hour)

  return (
    <footer className="footer">
      {isOpen ? (
        <Order />
      ) : (
        <p>We're happy to greet you between 12:00 and 22:00.</p>
      )}
    </footer>
  );
}

function Order() {
  return (
    <div className="order">
      <p>We're open till 22:00.Come visit to us or order online.</p>
      <button className="btn">Order Now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
