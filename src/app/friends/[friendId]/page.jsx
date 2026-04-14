import FriendDetailsPageLeft from "@/components/friendDetailsPages/FriendDetailsPageLeft";
import FriendDetailsPageRight from "@/components/friendDetailsPages/FriendDetailsPageRight";
import React from "react";


const FriendDetailPage = async ({ params }) => {
  const { friendId } = await params;

  // console.log(friendId);

  const res = await fetch("https://keen-keeper-liard.vercel.app/data.json");
  const friends = await res.json();

  console.log("friendId from params:", friendId);

  const matchFriend = friends.find((friend) => friend.id === Number(friendId));
  // console.log(matchFriend);
 

  return (
    <div className=" container mx-auto my-10 grid justify-items-center  md:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 ">
      {/* left */}
      <FriendDetailsPageLeft matchFriend={matchFriend}/>
      {/* right */}
      <FriendDetailsPageRight matchFriend={matchFriend}/>
    </div>
  );
};

export default FriendDetailPage;
