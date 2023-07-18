import React from "react";

export const DashTable = () => {
  return (
    <div class=" overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 table-auto">
        <thead className=" text-lg  text-[#B5B7C0] uppercase border-b">
          <tr>
            <th scope="col" class="px-6 py-3 font-normal">
              Customer Name
            </th>
            <th scope="col" class="px-6 py-3 font-normal">
              Company
            </th>
            <th scope="col" class="px-6 py-3 font-normal">
              Phone Number
            </th>
            <th scope="col" class="px-6 py-3 font-normal">
              Email
            </th>
            <th scope="col" class="px-6 py-3 font-normal">
              Country
            </th>
            <th scope="col" class="px-6 py-3 font-normal">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b text-lg">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Jane Cooper
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Microsoft
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              (225) 555-0118
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              jane@microsoft.com
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              United States
            </th>
            <th
              scope="row"
              class="px-6 flex justify-center items-center py-4 font-medium whitespace-nowrap "
            >
                <div style={{backgroundColor: "rgba(22, 192, 152, 0.38)"}} className=" text-[#00B087] border border-[#00B087]  px-3 py-1 rounded-lg bg-[rgba(22, 192, 152, 0.38)]">
                Hello
                </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
