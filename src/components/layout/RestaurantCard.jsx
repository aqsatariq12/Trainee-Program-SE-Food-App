// function RestaurantCard({ image, title }) {
//   const isTexas = title === "Texas Chicken";

//   return (
//     <div
//       className={`w-[238px] h-[266px] rounded-t-[12px] overflow-hidden flex flex-col ${
//         isTexas ? "border border-[#D9D9D9]" : ""
//       }`}
//     >
//       {/* Logo Area - Figma: 238 x 203 */}
//       <img
//         src={image}
//         alt={title}
//         className="w-[238px] h-[203px] object-cover"
//       />

//       {/* Title - takes remaining height (266 - 203 = 63px) */}
//       <div className="w-full flex-1 bg-[#FF8A00] flex items-center justify-center">
//         <p className="text-white text-[14px] font-medium text-center px-2">
//           {title}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default RestaurantCard;
function RestaurantCard({ image, title }) {
  const isTexas = title === "Texas Chicken";

  return (
    <div
      className={`w-full rounded-[12px] overflow-hidden flex flex-col ${
        isTexas ? "border border-[#D9D9D9]" : ""
      }`}
    >
      {/* Logo Area - proportion matches Figma (238:203 ratio) */}
      <div className="w-full aspect-[238/203]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title - proportion matches Figma (238:63 ratio) */}
      <div className="w-full aspect-[238/63] bg-[#FF8A00] flex items-center justify-center px-2">
        <p className="text-white text-[14px] font-medium text-center">
          {title}
        </p>
      </div>
    </div>
  );
}

export default RestaurantCard;