import React from 'react';

const List = ({items,sourceName,ItemComponent}) => {
    return (
        <div>
            {items.map((item,index)=><ItemComponent key={index} {...{[sourceName]:item}}/>)}
        </div>
    );
}

export default List;
