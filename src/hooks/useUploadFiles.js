import { useState } from 'react';
import { geoTransApi } from '../api';

export const useUploadFiles = () => {
  const [fileData, setFileData] = useState(null);

  const handleFileChange = (fieldName, event) => {
    const file = event.target.files[0];
    setFileData((prevFileData) => ({
      ...prevFileData,
      [fieldName]: file,
    }));
  };

  const uploadFiles = async () => {
    try {
      const formData = new FormData();
      for (const fieldName in fileData) {
        formData.append(fieldName, fileData[fieldName]);
      }

      const response = await geoTransApi.post('/files/upload', formData);
      return response.data;
    } catch (error) {
      console.error('Error uploading files:', error);
      throw error;
    }
  };

  return { fileData, handleFileChange, uploadFiles };
};