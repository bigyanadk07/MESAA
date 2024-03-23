import React from 'react';

interface Props {
    imgsrc: string;
    name: string;
    description: string;
    price: number;
    onClick: () => void; // Define the onClick event handler function
}

const FoodCard: React.FC<Props> = ({ imgsrc, name, description, price, onClick }) => {
    return (
        <div className='flex flex-col mb-10 font4 w-4/5  hover:shadow-xl p-8'>
            <div className=' rounded-xl flex'>
                <div>
                    <img src={imgsrc} alt={name} className='h-48 w-64 rounded-xl'/>
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='text-left ml-5 text-lg font-bold uppercase'>{name} - <span className='ryc-text font-bold'>${price}</span></div>
                    <div className='text-left ml-5 text-sm'>{description}</div>
                    <div className='flex justify-start mt-10 btn2'>
                    <button className='link2' onClick={onClick}>Add <span></span><span></span><span></span><span></span></button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default FoodCard;
