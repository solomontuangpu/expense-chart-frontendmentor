import React from "react";

const Chart = ({ date, amount }) => {

  

  return (
    <div className='py-5 flex justify-between'>
      <div>
        <div className={`w-[50px] h-[${amount}px] bg-primary rounded`}></div>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Chart;
