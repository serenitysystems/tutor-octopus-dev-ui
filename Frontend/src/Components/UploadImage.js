import React, { memo } from "react";
import { MdAttachFile } from "react-icons/md";

const CloudinaryUploadWidget = memo(({ setImage }) => {
  var myWidget = window?.cloudinary?.createUploadWidget(
    {
      cloudName: "dux0hkb6o",
      uploadPreset: "ml_default",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log('-----------------------------------upload image', result.info.url)
        setImage(result.info.url);
      }
    }
  );

  return (
    
    <button
      
      type="button"
      className="m-2 p-1 btn btn-link text-decoration-none btn-lg"
      onClick={() => myWidget.open()}
    >
     <MdAttachFile></MdAttachFile>
     
    </button>
    
  );
});

export default CloudinaryUploadWidget;
