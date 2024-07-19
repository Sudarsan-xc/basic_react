// import React, { useState } from "react";

// const Complex = () => {
//   const [data, setData] = useState([
//     { name: "aktim" },
//     { name: "ram" },
//     { name: "shyam" },
//   ]);

//   const handleChange = (e, index) => {
//     e.preventDefault();
//     const updatedData = [...data];
//     updatedData[index].name = e.target.value;
//     setData(updatedData);
//   };

//   return (
//     <div>
//       <ul>
//         {data.length > 0 &&
//           data.map((item, index) => {
//             return (
//               <>
//                 <li key={index}>{item?.name}</li>
//                 <input
//                   placeholder="enter the correct name"
//                   onChange={(e) => handleChange(e, index)}
//                 />
//               </>
//             );
//           })}
//       </ul>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
function Complex() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return <h1>I've rendered ={count}</h1>;
}

export default Complex;
