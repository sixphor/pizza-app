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

const nowHour = new Date().getHours();
const isOpen = nowHour >= 10 && nowHour < 22;

function Header() {
    return (
        <header>
            <h1 style={{ color: "orange", fontSize: "48px", textTransform: "uppercase" }}>Ariq's Pizza Co.</h1>
            {isOpen && <p className="tagline">Authentic Italian Cuisine</p>}
        </header>
    )

}

function Pizza({ image, name, ingredients, price }) {
    return (
        <div className="pizza">
            <img src={image} alt="Pizza" />
            <h3>{name}</h3>
            <p>{ingredients}</p>
            <p>${price}</p>
        </div>
    )
}

function Menu() {
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <ul className="pizzas">

                {pizzaData.map((pizza) => (
                    <li>
                        <Pizza
                            image={pizza.photoName}
                            name={pizza.name}
                            ingredients={pizza.ingredients}
                            price={pizza.soldOut ? "Sold Out" : pizza.price}
                        />

                    </li>

                ))}

            </ul>
        </div>
    );
}

function Order() {

    return (
        <footer className="footer">
            {isOpen ? (
                <div className="container">
                    <p>We're currently open</p>
                    <button className="btn order">Order</button>
                </div>
            ) : (
                <p>Sorry, we're closed</p>
            )}
        </footer>
    )
}
function Footer() {

    return (
        <Order />
    );
}

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);