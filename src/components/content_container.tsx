import React from "react";

interface ContentContainerType {
  title: string,
  children?: any,
}
export default function ContentContainer ({ title, children }: ContentContainerType) {
  return (
    <div className="flex flex-col items-center justify-start w-full my-10">
      <div className="relative top-[3.5px] h-6 text-white text-2xl font-bold bg-mgb px-4 py-1 select-none">
        {title}
      </div>
      <div className="w-full min-h-60 rounded-2xl border-gray-400 border p-4 text-white md:w-11/12 xl:w-[1200px] xl:p-10 flex flex-col">
        {children}
      </div>
    </div>
  );
}