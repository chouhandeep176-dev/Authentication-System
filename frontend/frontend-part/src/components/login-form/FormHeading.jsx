import React from 'react'

const FormHeading = ({ headingText, headingParagraph }) => {
  return (
    <div className="w-full flex flex-col justify-center gap-1 mb-2.5">
      <h2 className="text-center font-semibold text-[1.7rem] tracking-wide contrast-200">
        {headingText}
      </h2>
      <p className="text-[.8rem] tracking-wide contrast-100 text-center">
        {headingParagraph}
      </p>
    </div>
  );
};

export default FormHeading;
