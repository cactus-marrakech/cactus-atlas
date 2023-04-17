import React from "react";
import pot from "../assets/potsImages/1.png";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

function MarketBodyControlers() {
  return (
    <div className="flex-1 h-full flex flex-col gap-4 justify-center items-center">
      <div>
        <div className="border border-green flex bg-dark-white gap-2 mt-4">
          <button className="p-4 hover:bg-[#0001]">
            <KeyboardArrowLeftIcon className="text-green" />
          </button>
          <div className="h-10 relative w-12">
            <img
              draggable={false}
              src={pot}
              className="h-20 object-contain -top-8 absolute"
            ></img>
          </div>
          <button className="p-4 hover:bg-[#0001]">
            <KeyboardArrowRightIcon className="text-green" />
          </button>
        </div>
        <div className=" w-44 text-dark-green">cactus name here</div>
      </div>

      <div>
        <div className="border border-green flex bg-dark-white gap-2 mt-4">
          <button className="p-4 hover:bg-[#0001]">
            <KeyboardArrowLeftIcon className="text-green" />
          </button>
          <div className="h-10 relative w-12">
            <img
              draggable={false}
              src={pot}
              className="h-20 object-contain -top-8 absolute"
            ></img>
          </div>
          <button className="p-4 hover:bg-[#0001]">
            <KeyboardArrowRightIcon className="text-green" />
          </button>
        </div>
        <div className=" w-44 text-dark-green">cactus name here</div>
      </div>

      <div className="border border-green flex bg-dark-white gap-2">
        <button className="p-4 hover:bg-[#0001]">
          <RemoveRoundedIcon className="text-green" />
        </button>
        <div className=" flex justify-center items-center w-12">
          <p className="text-xl text-dark-green">3</p>
        </div>
        <button className="p-4 hover:bg-[#0001]">
          <AddRoundedIcon className="text-green" />
        </button>
      </div>
    </div>
  );
}

export default MarketBodyControlers;
