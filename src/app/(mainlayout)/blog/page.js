import Link from "next/link";
import React from "react";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";

const Blog = () => {
  return (
    <div>
      {/* blog cover start */}
      <div className="bg-black">
        <div className="h-[400px] w-full border sm:-mt-8 bg-[url('/Assets/contact.jpg')] opacity-50">
          <div className="text-white max-w-fit">
            <h1 className="text-5xl font-semibold uppercase">Blog</h1>
            <div className="flex items-center justify-between text-lg">
              <Link href={"/home"}>Home</Link>
              <BiArrowToRight />
              <Link href={"/blog"}>Blog</Link>
            </div>
          </div>
        </div>
      </div>
      {/* blog cover end */}

      <div className="container px-4 py-12 mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {/* blog cards start */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((e, i) => (
              <div className="sm:w-[352px] w-full bg-white" key={i}>
                <img className="h-[235px] w-full border" src="" alt="" />
                <div className="p-4 space-y-2 border">
                  <h3 className="text-sm font-normal uppercase sm:text-base text-lime-600">
                    Admin | Tours & Travels
                  </h3>
                  <h1 className="text-xl font-medium sm:text-2xl">
                    Cox's Bazar such a beautiful place look like
                  </h1>
                </div>
              </div>
            ))}
            <div className="col-span-2 px-40 py-8 bg-white">
              <div className="grid grid-cols-6 text-lime-600">
                <button className="text-2xl border border-lime-600 hover:bg-gray-200 hover:text-lime-800">
                  <BiArrowToLeft />
                </button>
                {[1, 2, 3, 4].map((e, i) => (
                  <button
                    key={i}
                    className="py-4 text-xl border hover:bg-gray-200 border-y hover:text-lime-800"
                  >
                    {e}
                  </button>
                ))}
                <button className="text-2xl border border-lime-600 hover:bg-gray-200 hover:text-lime-800">
                  <BiArrowToRight />
                </button>
              </div>
            </div>
          </div>
          {/* blog cards end */}

          {/* recent post & tags start */}
          <div>
            <h1 className="mb-6 text-2xl font-semibold tracking-widest uppercase">
              Recent Post
            </h1>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((e, i) => (
                <div
                  key={i}
                  className="xl:w-[350px] h-[100px] flex items-center gap-2 bg-white"
                >
                  <img className="w-[150px] border h-full" src="" alt="" />
                  <div className="p-2 space-y-1">
                    <h1 className="font-medium">
                      Sundarban awesome travel guide for joyful journey
                    </h1>
                    <h3 className="font-light text-lime-600">Jan 1, 2023</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* recent post & tags end */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
