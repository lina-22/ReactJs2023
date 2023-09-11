import React from "react";

type DataFetchProps = { status: "loading" | "error" | "success" };
function DataFetch({ status }: DataFetchProps) {
  if (status === "loading") {
    return <h2>Data is loading....</h2>;
  } else if (status === "error") {
    return <h2>Error. Data could not fetched</h2>;
  }
  return (
    <div>
      <h2>Data fetched successfully</h2>
    </div>
  );
}

export default DataFetch;

// const users = [
//   {
//     id: 1,
//     name: "Kashif1",
//     age: 11,
//   },
//   {
//     id: 2,
//     name: "Kashif2",
//     age: 11,
//   },
//   {
//     id: 3,
//     name: "Kashif3",
//     age: 11,
//   },
//   {
//     id: 4,
//     name: "Kashif4",
//     age: 11,
//   },
// ];
