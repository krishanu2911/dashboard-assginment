import React from "react";

export const Sidebar = () => {
  return (
    <div className=" min-w-fit  pt-4 rounded-tr-2xl rounded-br-2xl rightShadow lg:px-5">
      <div className="w-full flex justify-start mb-4 pl-9">
        <img src="/zag-logo.svg" />
      </div>
      <div className="flex justify-start items-center gap-4 mb-4 py-2 px-4">
        <img src="/report-logo.svg" />
        <h1 className=" text-lg hidden md:block">Reports</h1>
      </div>
      <div className="flex justify-start items-center gap-4 mb-4 primary-bg py-2 px-4 rounded-lg">
        <img src="/report-logo.svg" />
        <h1 className=" text-lg text-[#1B59F8] hidden md:block">Workspace</h1>
      </div>
      <div className="flex justify-start items-center gap-4 mb-4 py-2 px-4">
        <img src="/settings.svg" />
        <h1 className=" text-lg hidden md:block">Settings</h1>
      </div>
    </div>
  );
};
