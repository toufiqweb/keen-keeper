import React from "react";
import { BiMessageDots } from "react-icons/bi";
import { LiaVideoSolid } from "react-icons/lia";
import { LuPhoneCall } from "react-icons/lu";

const FriendDetailsPageRight = ({ matchFriend }) => {
  const { days_since_contact, goal, next_due_date } = matchFriend;
  return (
    <div className="col-span-2 px-5 bg-green-400 space-y-5">
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-15">
        <div className="card bg-base-100 justify-center border border-base-200 items-center shadow-sm">
          <div className="p-10 text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#244D3F]">
              {days_since_contact}
            </h2>
            <p className="text-gray-500">Days Since Contact</p>
          </div>
        </div>
        <div className="card bg-base-100 justify-center items-center shadow-sm border border-base-200">
          <div className="p-10 text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#244D3F]">{goal}</h2>
            <p className="text-gray-500">Goal (Days)</p>
          </div>
        </div>
        <div className="card bg-base-100 justify-center items-center shadow-sm border border-base-200">
          <div className="p-10 text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#244D3F]">
              {next_due_date}
            </h2>
            <p className="text-gray-500">Next Due</p>
          </div>
        </div>
      </div>

      <div className=" p-8 rounded-lg bg-base-100   shadow-sm space-y-3">
        <div className="flex justify-between items-center">
          <p className="text-2xl text-black/75 font-semibold">
            Relationship Goal
          </p>
          <button className="btn">Edit</button>
        </div>
        <p className=" text-xl text-black/50">
          Connect every
          <span className="font-semibold text-black"> {goal} days</span>
        </p>
      </div>

      <div className="card bg-base-100 justify-center border border-base-200 p-7 space-y-4">
        <h2 className="text-2xl text-black/75 font-semibold">Quick Check-In</h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-15">
          <div className="card bg-[#F8FAFC] justify-center border border-base-300 items-center shadow-sm">
            <div className="px-5 py-7 text-center flex flex-col justify-center items-center">
              <LuPhoneCall className="text-4xl font-bold mb-4" />
              <p className="text-2xl ">Call</p>
            </div>
          </div>
          <div className="card bg-[#F8FAFC] justify-center border border-base-300 items-center shadow-sm">
            <div className="px-5 py-7 text-center flex flex-col justify-center items-center">
              <BiMessageDots className="text-4xl font-bold mb-4" />
              <p className="text-2xl ">Text</p>
            </div>
          </div>
          <div className="card bg-[#F8FAFC] justify-center border border-base-300 items-center shadow-sm">
            <div className="px-5 py-7 text-center flex flex-col justify-center items-center ">
              <LiaVideoSolid className="text-4xl font-bold mb-4" />
              <p className="text-2xl ">Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPageRight;
