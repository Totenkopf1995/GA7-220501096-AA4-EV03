import React, { useState } from 'react';

const InventoryPage = () => {
    const [inventory, setInventory] = useState([
        { id: 1, name: 'Producto 1', quantity: 100 },
        { id: 2, name: 'Producto 2', quantity: 50 },
    ]);

    const updateQuantity = (id, newQuantity) => {
        setInventory(inventory.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    return (
        <div>
            <h2>Inventario</h2>
            <ul>
                {inventory.map(item => (
                    <li key={item.id}>
                        {item.name} - Cantidad: {item.quantity}
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>Agregar</button>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InventoryPage;
