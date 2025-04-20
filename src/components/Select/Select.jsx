// import React from "react";
// import { useState } from "react";

// const Select = ({ onUpdate, label, values, name }) => {
//   const [selectedItem, setSelectedItem] = useState(" ");

//   const handleSelected = (event) => {
//     setSelectedItem(event.target.value);
//     onUpdate(event.target.value);
//   };

//   const renderOptions = (values) => {
//     return values.map((value) => {
//       return (
//         <option key={value.key} value={value.key}>
//           {" "}
//           {value.label}
//         </option>
//       );
//     });
//   };

//   return (
//     <div>
//       <div className="select ">
//         <label htmlFor={name}>
//           <span>{label}</span>
//           <select
//             name={name}
//             value={selectedItem}
//             onChange={handleSelected}
//             className="border"
//           >
//             {renderOptions(values)}
//           </select>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Select;

import React from "react";
import { useState } from "react";

const Select = ({ label, name, values }) => {
  return (
    <div className="select">
      <label htmlFor={name}></label>
      <select name={name} className="border"></select>
    </div>
  );
};

export default Select;
