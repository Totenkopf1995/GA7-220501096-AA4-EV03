import React, { useState } from 'react';

const SalesPage = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const products = [
        { id: 1, name: 'Producto 1', price: 10 },
        { id: 2, name: 'Producto 2', price: 20 },
        { id: 3, name: 'Producto 3', price: 30 },
    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
        setTotal(total + product.price);
    };

    return (
        <div>
            <h2>Ventas</h2>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <h4>{product.name}</h4>
                        <p>Precio: ${product.price}</p>
                        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
                    </div>
                ))}
            </div>
            <h3>Carrito</h3>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item.name} - ${item.price}</li>
                ))}
            </ul>
            <h3>Total: ${total}</h3>
        </div>
    );
};

export default SalesPage;
