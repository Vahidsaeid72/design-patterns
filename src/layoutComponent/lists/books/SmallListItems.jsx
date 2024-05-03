import React from 'react';

const SmallBookListItems = ({book}) => {
    const {title,price}= book;
    return (
        <div>
            <h2>{title} / {price}</h2>
        </div>
    );
}

export default SmallBookListItems;
