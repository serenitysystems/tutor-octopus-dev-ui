import React, { useState } from 'react';
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { imageUpload } from './apicalls/cloudinary';
// import { useSelector } from "react-redux";
// import { Avatar, Badge } from "antd";

function Testings() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle file selection
  const handleImageChange = (event) => {
    let files = event.target.files; // 3
    // let allUploadedFiles = values.images;

    if (files) {
      // setLoading(true);
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
            console.log(uri)
            axios.post(
              'http://localhost:3000/cloudinary/uploadimages', // Include protocol (http://)
              { image: uri }
            );
           
          },
          "base64"
        );
      }
  };
}

  // Function to handle image upload


  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" 
      onChange={handleImageChange} 
      accept="image/*" 
      multiple
      
      />
      <button>Upload</button>
      {selectedImage && (
        <div>
          <h3>Selected Image:</h3>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default Testings;
