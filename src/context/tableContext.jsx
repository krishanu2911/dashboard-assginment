import { createContext, useContext, useState } from "react";
import { userData } from "../utlis/data";

const tableContext = createContext();

export const TableProvider = ({ children }) => {
  const [data, setData] = useState(userData);
  const totalPages = Math.ceil(userData.length/10);
  console.log(totalPages, "totalPages", userData.length)
  const [pageNumber , setPageNumber] = useState(1);
  const sortUsers = (sortName) => {
    if (sortName === "NEWEST") {
      console.log("hello")
      setData([...data].sort((a, b) => b.timeStamp - a.timeStamp));
    } else {
      setData([...data].sort((a, b) => a.timeStamp - b.timeStamp));
    }
  };
  const searchQurey = (qureyName) => {
    if (qureyName === "") {
      setData([...userData].splice(0, 10));
      return;
    }
    const searchData = userData.filter((item) =>
      item.customerName.toLowerCase().includes(qureyName.toLowerCase())
    );
    setData([...searchData]);
    return;
  };

  return (
    <tableContext.Provider value={{ data, setData, searchQurey, sortUsers, pageNumber , setPageNumber, totalPages }}>
      {children}
    </tableContext.Provider>
  );
};

export const useTable = () => useContext(tableContext);
