import React, { useState } from 'react';

function Testings() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  // Function to handle image upload
  const handleUpload = () => {
    if (selectedImage) {
      // Perform upload logic here, e.g., using FormData and fetch API
      const formData = new FormData();
      formData.append('image', selectedImage);
      
      // Example: Upload image using fetch API
      fetch('YOUR_UPLOAD_ENDPOINT', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        // Handle response
      })
      .catch(error => {
        // Handle error
      });
    }
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <button onClick={handleUpload}>Upload</button>
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
