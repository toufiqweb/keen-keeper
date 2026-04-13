import React from "react";

const FriendDetailPage = async ({ params }) => {
  const { friendId } = await params;
  
  // console.log(friendId);

  const res = await fetch("http://localhost:3000/data.json");
  const friends = await res.json();

  console.log("friendId from params:", friendId);
  
  const matchFriend = friends.find(friend => friend.id === Number(friendId))
  // console.log(matchFriend);
  

  return (
    <div className=" container mx-auto my-10 grid grid-cols-3 gap-10">
      
      <div className="col-span-1 bg-red-400"> right</div>
      <div className="col-span-2 bg-green-400"> left</div>
    </div>
  );
};

export default FriendDetailPage;
