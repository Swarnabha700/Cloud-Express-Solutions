import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';

const ImageUploader = () => {
  const { setValue, watch } = useFormContext();
  const image = watch('image');

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setValue('image', acceptedFiles[0]);
    }
  }, [setValue]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'image/*': [] } });

  return (
    <div
      {...getRootProps()}
      className={`mt-4 border-2 border-dashed rounded p-4 cursor-pointer text-center ${
        isDragActive ? 'bg-blue-100' : 'bg-gray-100'
      }`}
    >
      <input {...getInputProps()} />
      {image ? (
        <img src={URL.createObjectURL(image)} alt="Thumbnail" className="w-24 h-24 object-cover mx-auto" />
      ) : (
        <p className="text-sm text-gray-600">Drag and drop or click to upload image</p>
      )}
    </div>
  );
};

export default ImageUploader;
