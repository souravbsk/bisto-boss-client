import React from 'react';

const MenuItem = ({item}) => {
    console.log(item);
    const {name,image,recipe,price} = item;
    return (
        <div className='flex items-center gap-4'>
            <div>
                <img className='w-28 h-20 rounded-full rounded-tl-none' src={image} alt="" />
            </div>
            <div>
                <h3 className='text-xl'>{name}---------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;