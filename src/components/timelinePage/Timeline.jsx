"use client";
import React, { useContext, useState } from "react";
import { TimelineContext } from "@/lib/contexts/TimelineContextProvider";
import TimelineCard from "../ui/TimelineCard";
import { MdKeyboardArrowDown } from "react-icons/md";

const Timeline = () => {
  const { timelines, setTimelines, selectedType, setSelectedType } =
    useContext(TimelineContext);

  // const {type } = timelines

  // const CallBtnFiltered = timelines.filter(timeline =>  timeline.type === "call")

  // console.log(CallBtnFilteredTimelines);

  const handlerClick = (type) => {
    setSelectedType(type);
  };
  const filteredTimelines =
    selectedType === "all"
      ? timelines
      : timelines.filter((timeline) => timeline.type === selectedType);

  return (
    <div className="my-20 px-5 space-y-5">
      <h1 className="text-4xl font-bold">Timeline</h1>
      <div  className="dropdown dropdown-bottom ">
        <div
          tabIndex={0}
          role="button"
          className="btn font-normal text-black/50 gap-5 rounded-lg border border-base-300 px-2 py-3 m-1 flex justify-between items-center"
        >
          <span className="text-xl"> Filter timeline</span>
          <MdKeyboardArrowDown className="text-2xl" />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={() => handlerClick("all")}>
            <a>Default</a>
          </li>
          <li onClick={() => handlerClick("call")}>
            <a>Call</a>
          </li>
          <li onClick={() => handlerClick("text")}>
            <a>Text</a>
          </li>
          <li onClick={() => handlerClick("video")}>
            <a>Video</a>
          </li>
        </ul>
      </div>

      <div className=" space-y-4">
        {
          filteredTimelines.map((timeline, ind) => (
            <TimelineCard key={ind} timeline={timeline} />
          ))

          //  { console.log(timeline);}
        }
      </div>
    </div>
  );
};

export default Timeline;
