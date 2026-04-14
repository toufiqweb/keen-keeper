import React from "react";
import { BiMessageDots } from "react-icons/bi";
import { LiaVideoSolid } from "react-icons/lia";
import { LuPhoneCall } from "react-icons/lu";

const FriendDetailsTimelineCard = ({ timeline }) => {
//   console.log(timeline.date);

  return (
    <div className=" text-xl text-black flex flex-col sm:flex-row justify-center gap-4 sm:gap-2 sm:justify-between items-center border-b border-black/20 p-5">
      <div className="flex items-center justify-center gap-3 ">
        <div>
          {timeline.type === "call" && (
            <LuPhoneCall className="text-3xl md:text-4xl font-bold" />
          )}

          {timeline.type === "text" && (
            <BiMessageDots className="text-3xl md:text-4xl font-bold " />
          )}
          {timeline.type === "video" && (
            <LiaVideoSolid className="text-3xl md:text-4xl font-bold " />
          )}
        </div>
        <div>
          <p className="text-lg md:text-2xl ">
            {timeline.type === "call" && "Meetup"}
            {timeline.type === "text" && "text"}
            {timeline.type === "video" && "Video"}
          </p>

          <p className="text-black/50 text-sm sm:text-md ">
            {timeline.type === "call" && "Industry conference meetup"}
            {timeline.type === "text" && "Asked for career advice"}
            {timeline.type === "video" && "Asked for career advice"}
          </p>
        </div>
      </div>
      <span className="font-semibold text-black text-sm md:text-lg"> {timeline.formatted}</span>
    </div>
  );
};

export default FriendDetailsTimelineCard;
