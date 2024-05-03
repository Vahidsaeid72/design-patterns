import React from 'react';

const LargeBookListItems = ({book}) => {
    const {title,price,page}= book;
    return (
        <ul>
            <li>{title}</li>
            <li>{price}</li>
            <li>{page}</li>
        </ul>
    );
}

export default LargeBookListItems;
