import React from "react";

const ImpactDetails = ({ label, total }) => {
  return (
    <div className="flex flex-col justify-center xl:justify-evenly lg:mb-10 w-full">
      <h1 className="text-color-darkBlue poppinsBold h5 space-x-0 space-y-0 md:h1 text-left">
        {total}
      </h1>
      <p className="poppinsRegular text-color-darkBlue body-1">{label}</p>
    </div>
  );
};

export default ImpactDetails;
