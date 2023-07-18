import React from "react";
import { useTable } from "../context/tableContext";

export const DashTable = () => {
  const { data, pageNumber, totalPages , setPageNumber } = useTable();
  const numbersArray = Array.from(
    { length: totalPages  },
    (_, index) => index + 1
  );
  return (
    <div class=" overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 table-auto">
        <thead className=" text-lg  text-[#B5B7C0] uppercase border-b">
          <tr>
            <th scope="col" class=" text-[14px] px-4 py-3 font-normal">
              Customer Name
            </th>
            <th scope="col" class="text-[14px] px-4 py-3 font-normal">
              Company
            </th>
            <th scope="col" class="text-[14px] px-4 py-3 font-normal">
              Phone Number
            </th>
            <th scope="col" class="text-[14px] px-4 py-3 font-normal">
              Email
            </th>
            <th scope="col" class="text-[14px] px-4 py-3 font-normal">
              Country
            </th>
            <th scope="col" class="text-[14px] px-4 py-3 font-normal">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {[...data]
            .slice((pageNumber - 1) * 10,(pageNumber - 1) * 10 + 10 )
            .map((item) => {
              return (
                <tr class="bg-white border-b text-lg">
                  <th
                    scope="row"
                    class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap text-[14px] "
                  >
                    {item.customerName}
                  </th>
                  <th
                    scope="row"
                    class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap text-[14px] "
                  >
                    {item.company}
                  </th>
                  <th
                    scope="row"
                    class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap text-[14px]"
                  >
                    {item.phoneNumber}
                  </th>
                  <th
                    scope="row"
                    class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap text-[14px]"
                  >
                    {item.email}
                  </th>
                  <th
                    scope="row"
                    class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap text-[14px]"
                  >
                    {item.country}
                  </th>
                  <th
                    scope="row"
                    class="px-4 flex justify-center items-center py-4 font-medium whitespace-nowrap text-[14px]"
                  >
                    <div
                      style={{ backgroundColor: "rgba(22, 192, 152, 0.38)" }}
                      className="  text-[#00B087] border border-[#00B087]  px-3 py-1 rounded-lg bg-[rgba(22, 192, 152, 0.38)]"
                    >
                      Hello
                    </div>
                  </th>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="flex justify-between py-4">
        <div className="text-gray-400 font-semibold text-[13px]">
          Showing data {pageNumber} to {totalPages} of {data.length} entries
        </div>
        <div className="flex gap-2">
          <div onClick={() => setPageNumber((prev) => {
            if(prev === 1){
              return totalPages
            }else {
              return prev  - 1
            }
          })} className=" cursor-pointer px-2 flex justify-center items-center py-1 rounded-lg bg-[#EFF0F6]">
            {"<"}
          </div>
          {numbersArray.map((item) => {
            return (
              <div onClick={() => setPageNumber(item)} className={`${pageNumber === item && "text-white bg-[#5932EA]"} cursor-pointer px-2 flex justify-center items-center py-1 rounded-lg bg-[#EFF0F6]`}>
                {item}
              </div>
            );
          })}
          <div onClick={() => setPageNumber((prev) => {
            if(prev  === totalPages){
              return 1
            }else {
              return prev  + 1
            }
          })} className="px-2 cursor-pointer flex justify-center items-center py-1 rounded-lg bg-[#EFF0F6]">
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
};
