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

// import React from "react";
// import { useState } from "react";

// const Select = ({ label, name, values, onUpdate }) => {
//   const [selectedItem, setSelectedItem] = useState("default");

//   const handleSelectedChange = (event) => {
//     const selected = event.target.value;
//     setSelectedItem(selected);
//     onUpdate(selected);
//   };

//   const renderOptions = (values) => {
//     return values.map((value) => {
//       return (
//         <option key={value.key} value={value.key}>
//           {value.label}
//         </option>
//       );
//     });
//   };
//   return (
//     <div className="select">
//       <label htmlFor={name}>{label}</label>

//       <select
//         name={name}
//         className="border"
//         value={selectedItem}
//         onChange={handleSelectedChange}
//       >
//         {renderOptions(values)}
//       </select>
//     </div>
//   );
// };

// export default Select;

// ------------------------------

// import React from "react";

// const Select = ({ label, name, values, onUpdate }) => {
//   const [selectedItem, setSelectedItem] = useState("default");

//   const handleSelectedChange = (event) => {
//     const selected = event.target.value;
//     setSelectedItem(selected);
//     onUpdate(selected);
//   };

//   const renderOptions = (values) => {
//     return values.map((value) => {
//       return (
//         <option key={value.key} value={value.key}>
//           {value.label}
//         </option>
//       );
//     });
//   };

//   return (
//     <div>
//       <label htmlFor={name}>{label}</label>
//       <select
//         name={name}
//         className="border"
//         value={selectedItem}
//         onChange={handleSelectedChange}
//       >
//         {renderOptions(values)}
//       </select>
//     </div>
//   );
// };

// export default Select;

// ---------------------------

// const Select = ({ label, name, values, onUpdate }) => {
//   const [selectedItem, setSelectedItem] = useState("default");

//   const handleSelectedChange = (event) => {
//     const selected = event.target.value;
//     setSelectedItem(selected);
//     onUpdate(selected);
//   };

//   const renderOptions = (values) => {
//     return values.map((value) => {
//       return (
//         <option key={value.key} value={value.key}>
//           {value.label}
//         </option>
//       );
//     });
//   };

//   return (
//     <div>
//       <label htmlFor={name}>{label}</label>
//       <select
//         name={name}
//         className="border"
//         value={selectedItem}
//         onChange={handleSelectedChange}
//       >
//         {renderOptions(values)}
//       </select>
//     </div>
//   );
// };

// export default Select;

// ------------------------------
// const Select = ({ label, name, values, onUpdate }) => {
//   const [selectedItem, setSelectedItem] = useState("default");

//   const handleSelectedChange = (event) => {
//     const selected = event.target.value;
//     setSelectedItem(selected);
//     onUpdate(selected);
//   };

//   const renderOptions = (values) => {
//     return values.map((value) => {
//       return (
//         <option key={value.key} value={value.key}>
//           {value.label}
//         </option>
//       );
//     });
//   };

//   return (
//     <div>
//       <label htmlFor={name}>{label}</label>
//       <select
//         name={name}
//         className="border"
//         value={selectedItem}
//         onChange={handleSelectedChange}
//       >
//         {renderOptions(values)}
//       </select>
//     </div>
//   );
// };

// export default Select;


