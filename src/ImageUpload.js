import React, { useState } from 'react';

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(URL.createObjectURL(imageFile));
  };

  const handleManualImageChange = (event) => {
    setSelectedImage(event.target.value);
  };

  const handleDownloadImage = () => {
    const link = document.createElement('a');
    link.href = selectedImage;
    link.download = 'bengaluru.jpg';
    link.click();
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '0 auto', 
      padding: '20px', 
      border: '2px solid #ccc', 
      borderRadius: '10px', 
      backgroundColor: '#f8f9fa' 
    }}>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ marginBottom: '20px' }}
      />
      <input
        type="text"
        placeholder="Enter image URL"
        onChange={handleManualImageChange}
        style={{ marginBottom: '20px', width: '100%', padding: '8px' }}
      />
      {selectedImage && (
        <div>
          <h2>Preview:</h2>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ 
              maxWidth: '100%', 
              borderRadius: '10px', 
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
              backgroundColor: '#fff',
              marginBottom: '20px'
            }}
          />
          <button onClick={handleDownloadImage}>Download Image</button>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
