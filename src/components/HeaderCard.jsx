import React from "react";

const HeaderCard = () => {
  return (
    <div className=' flex justify-between bg-primary p-5 rounded-2xl'>
      <div className=' text-start'>
        <p className=' text-textWhite text-sm'>My balance</p>
        <h3 className='text-textWhite text-xl font-bold'>$921.48</h3>
      </div>
      <div>
        <img src='./logo.svg' alt='' />
      </div>
    </div>
  );
};

export default HeaderCard;
