import React from 'react';

const Price = ({ data }: { data: Number }) => {
  if (data < 0) {
    return (
      <span className="text-red-500 flex flex-row">
        <strong>
        {data}
        </strong>
      </span>
    );
  }
  return <span className="text-blue-500">^ {data}</span>;
};

export default Price;
