import React from 'react';
import burgerData from './burger.json';
import Props from './foodProps';

const Burger = ({ onAddItem }) => { // Receive onAddItem function as prop
    const handleAddItemClick = (itemName, itemPrice) => {
        // Call the onAddItem function passed as prop and pass the item name
        onAddItem(itemName,itemPrice);
    };

    return (
        <div className='mb-5'>
            {burgerData.map((values) => (
                <Props
                    key={values.name} // Make sure to add a unique key prop
                    imgsrc={values.imgsrc}
                    name={values.name}
                    description={values.description}
                    price={values.price}
                    onClick={() => handleAddItemClick(values.name, values.price)} // Pass the item name to the handler
                />
            ))}
        </div>
    );
}

export default Burger;
