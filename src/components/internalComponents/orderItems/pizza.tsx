import React from 'react'
import pizzaData from './pizza.json'
import Props from './foodProps'
const pizza = ({onAddItem}) => {

  const handleAddItemClick = (itemName,itemPrice) => {
    // Call the onAddItem function passed as prop and pass the item name
    onAddItem(itemName,itemPrice);
};
  return (
    <div className='mb-5'>
        {pizzaData.map((values)=>(
            <Props 
            imgsrc={values.imgsrc}
            name = {values.name}
            description={values.description}
            price={values.price}
            onClick={() => handleAddItemClick(values.name, values.price)}
            />
        ))}
    </div>
  )
}

export default pizza
