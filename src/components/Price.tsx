import React from 'react';

const Price = ({ data }: { data: Number }) => {
  console.log('price');
  if (data < 0) {
    console.log('>');
    return (
      <span className="text-red-500 flex flex-row">
        <p className="rotate-180">^</p>
       {data}
      </span>
    );
  }
  return <span className="text-blue-500">^ {data}</span>;
};

export default Price;
