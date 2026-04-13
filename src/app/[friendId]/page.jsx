import FriendDetailsPageLeft from "@/components/friendDetailsPages/FriendDetailsPageLeft";
import FriendDetailsPageRight from "@/components/friendDetailsPages/FriendDetailsPageRight";
import Image from "next/image";
import React from "react";
import { BiMessageDots } from "react-icons/bi";
import { BsArchive } from "react-icons/bs";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { LiaVideoSolid } from "react-icons/lia";
import { LuPhoneCall } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

const FriendDetailPage = async ({ params }) => {
  const { friendId } = await params;

  // console.log(friendId);

  const res = await fetch("http://localhost:3000/data.json");
  const friends = await res.json();

  console.log("friendId from params:", friendId);

  const matchFriend = friends.find((friend) => friend.id === Number(friendId));
  // console.log(matchFriend);
 

  return (
    <div className=" container mx-auto my-10 grid grid-cols-3 gap-4 md:gap-10">
      {/* left */}
      <FriendDetailsPageLeft matchFriend={matchFriend}/>
      {/* right */}
      <FriendDetailsPageRight matchFriend={matchFriend}/>
    </div>
  );
};

export default FriendDetailPage;
