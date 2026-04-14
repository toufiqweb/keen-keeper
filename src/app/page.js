import Banner from "@/components/homePage/banner/Banner";
import YourFriends from "@/components/yourFriends/YourFriends";
import { Suspense } from "react";
import { CircleLoader } from "react-spinners";

export default function Home() {
  return (
    <>
      <Banner />
      <Suspense
        fallback={
          <div className="h-[81vh] flex justify-center items-center  w-full text-5xl">
            <CircleLoader color="green" />
          </div>
        }
      >
        <YourFriends />
      </Suspense>
    </>
  );
}
