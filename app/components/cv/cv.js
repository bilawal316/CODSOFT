import React from "react";

const CV = () => {
  const handleDownload = () => {
    const cvFile = "/MBilawalZaman(Web-developer)-Resume.pdf";
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "MBilawalZaman(Web-developer)-Resume.pdf";
    link.click();
  };

  return (
    <div className="flex">
      <button onClick={handleDownload} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Download CV
      </button>
    </div>
  );
};

export default CV;
