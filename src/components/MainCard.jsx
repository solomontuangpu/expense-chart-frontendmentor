import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import data from "../data/data.json";

const MainCard = () => {
  // const [lists, setLists] = useState([]);

  // useEffect(()=>{
  //     setLists(data);
  // },[])

  return (
    <div className=' bg-textWhite mt-5 p-5 rounded-2xl'>
      <h3 className=' text-2xl text-start font-bold text-textPrimary'>
        Spending - Last 7 days
      </h3>

      {/* chart */}
      <div className='flex justify-between items-end h-[200px]'>
        {data?.map((data, index) => (
          <Chart key={index} date={data.day} amount={Math.floor(data.amount)} />
        ))}
      </div>

      {/* divider */}
      <div className=' bg-textCream h-[1px]'></div>
      {/* total */}
      <div className='flex justify-between pt-5'>
        <div className=' text-start'>
          <p className='text-sm font-extralight text-textSecondary'>
            Total this month
          </p>
          <h1 className=' text-textPrimary font-extrabold text-3xl'>$478.33</h1>
        </div>
        <div className='text-end'>
          <p className='text-textPrimary text-sm'>+24%</p>
          <p className='text-textSecondary text-sm'>from last month</p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
