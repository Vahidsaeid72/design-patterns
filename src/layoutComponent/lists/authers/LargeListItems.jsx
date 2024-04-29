import React from 'react';

const LargeAuthorListItems = ({author}) => {
    const {name,age,country,books}=author;
    return (
        <div>
            <h3>{name}</h3>
            <p>age : {age}</p>
            <p>{country}</p>
            <ul>books : {books.map((book,i)=><li key={i}>{book}</li>)}</ul>
            ------------------------------
        </div>
    );
}

export default LargeAuthorListItems;
