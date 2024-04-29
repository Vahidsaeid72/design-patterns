import React from 'react';

const SmallAutherListItems = ({author}) => {
    const {name,age}=author;
    return (
        <div>
            <p>name : {name}</p>
            <p>age : {age}</p>
            --------------------------------
        </div>
    );
}

export default SmallAutherListItems;
