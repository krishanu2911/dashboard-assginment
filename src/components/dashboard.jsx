import React from "react";
import { DashTable } from "./index";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DonutChart from "react-donut-chart";
import { Doughnut } from "react-chartjs-2";
import { PieChart } from "react-minimal-pie-chart";

ChartJS.register(ArcElement, Legend);

const chartData = {
  datasets: [
    {
      data: [85, 15],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      borderWidth: 15,
    },
  ],
};

const chartOptions = {
  responsive: true, // Instruct chart js to respond nicely.
  maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
  cutoutPercentage: 70,
};

export const Dashboard = () => {
  return (
    <div className="w-5/6 px-12 py-8">
      <div className="flex justify-between items-center">
        <h1 className=" text-2xl font-bold">Orders</h1>{" "}
        <button className=" py-2 px-3 rounded-lg bg-[#1B59F8] text-white">
          Add Order
        </button>
      </div>
      <hr className=" mt-9 mb-16 h-0.5 bg-gray-400 opacity-100 dark:opacity-50" />
      <div className=" flex md:flex-row flex-col gap-4 mb-11">
        <div className="flex flex-col shadowCard p-8 gap-4 rounded-lg w-3/5">
          <h1 className=" text-xl font-bold">All Customers</h1>
          <div className=" flex justify-around gap-6 flex-wrap">
            <div
              className="relative"
              style={{ maxWidth: "6rem", maxHeight: "6rem" }}
            >
              <PieChart
                lineWidth={20}
                data={[
                  { title: "Two", value: 85, color: "#5F27CD" },
                  { title: "One", value: 15, color: "#E2E2E2" },
                ]}
              />
              <div className="font-bold text-[#5F27CD] flex justify-center items-end absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <h1 className="text-xl">85</h1>
                <span className=" text-sm">%</span>
              </div>
            </div>
            <div
              className="relative"
              style={{ maxWidth: "6rem", maxHeight: "6rem" }}
            >
              <PieChart
                lineWidth={20}
                data={[
                  {
                    title: "Two",
                    value: 66,
                    color: "rgba(22, 192, 152, 0.38)",
                  },
                  { title: "One", value: 34, color: "#E2E2E2" },
                ]}
              />
              <div
                style={{ color: "rgba(22, 192, 152, 0.38)" }}
                className="font-bold flex justify-center items-end absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
              >
                <h1 className="text-xl">66</h1>
                <span className=" text-sm">%</span>
              </div>
            </div>
            <div
              className="relative"
              style={{ maxWidth: "6rem", maxHeight: "6rem" }}
            >
              <PieChart
                lineWidth={20}
                data={[
                  { title: "Two", value: 90, color: "#FF6B6B" },
                  { title: "One", value: 10, color: "#E2E2E2" },
                ]}
              />
              <div className="font-bold text-[#FF6B6B] flex justify-center items-end absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <h1 className="text-xl">90</h1>
                <span className=" text-sm">%</span>
              </div>
            </div>
            <div
              className="relative"
              style={{ maxWidth: "6rem", maxHeight: "6rem" }}
            >
              <PieChart
                lineWidth={20}
                data={[
                  { title: "Two", value: 30, color: "#FFC5C5" },
                  { title: "One", value: 70, color: "#E2E2E2" },
                ]}
              />
              <div className="font-bold text-[#FFC5C5] flex justify-center items-end absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <h1 className="text-xl">30</h1>
                <span className=" text-sm">%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col shadowCard p-8 gap-8 rounded-lg w-2/5">
          <h1 className=" text-xl font-bold">Stats Overview</h1>
          <div>
            <h2 className="text-[#A7A7A7] font-semibold">Active</h2>
            <div className=" relative">
              <div className=" h-3 w-full rounded-lg bg-[#EEEEEE]"></div>
              <div className="h-3 w-[63%] rounded-lg bg-[#16C098] absolute top-0"></div>
              <h1 className=" absolute right-0 font-semibold text-[#A7A7A7]">
                63%
              </h1>
            </div>
          </div>
          <div>
            <h2 className="text-[#A7A7A7] font-semibold">Active</h2>
            <div className=" relative">
              <div className=" h-3 w-full rounded-lg bg-[#EEEEEE]"></div>
              <div className="h-3 w-[88%] rounded-lg bg-[#FF6B6B] absolute top-0"></div>
              <h1 className=" absolute right-0 font-semibold text-[#A7A7A7]">
                88%
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="shadowCard rounded-lg px-4">
        <div className="flex items-end justify-between mb-4">
          <h1 className="text-[#16C098]">Active Members</h1>
          <div className="flex items-end gap-2">
            <div className="flex gap-2 mt-4">
              <div className="primary-bgInput p-1 rounded-lg flex flex-grow">
                <img src="/search.svg" alt="search-icon" />
                <input
                  placeholder="Search anything"
                  className="primary-bgInput outline-none text-lg max-w-xs"
                  type="text"
                />
              </div>
            </div>
            <div className="flex gap-2 px-3 justify-center items-end p-1 primary-bgInput rounded-lg">
              <h1>Sort By</h1>{" "}
              <select className=" outline-none primary-bgInput font-bold">
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>
        </div>
        <DashTable />
      </div>
    </div>
  );
};
