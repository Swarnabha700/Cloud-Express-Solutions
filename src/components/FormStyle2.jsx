import React from 'react';
import { useFormContext } from 'react-hook-form';
import ImageUploader from './ImageUploader';
import TextInput from './TextInput';

const FormStyle2 = () => {
  const { register, watch } = useFormContext();
  const image = watch('image');

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white p-6 rounded-xl space-y-6 shadow-inner">
      <div className="flex justify-center">
        {image ? (
          <img src={URL.createObjectURL(image)} alt="Preview" className="w-[28%] max-h-[300px] object-contain border border-purple-500" />
        ) : (
          <div className="w-[28%] h-[300px] border border-purple-500 flex items-center justify-center text-gray-500">No Image</div>
        )}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <label>Height (cm)
          <input {...register('height')} type="number" className="mt-1 w-full p-2 rounded bg-gray-800 border border-blue-500 text-white" />
        </label>
        <label>Weight (kg)
          <input {...register('weight')} type="number" className="mt-1 w-full p-2 rounded bg-gray-800 border border-blue-500 text-white" />
        </label>
        <label>Build
          <select {...register('build')} className="mt-1 w-full p-2 rounded bg-gray-800 border border-blue-500 text-white">
            <option value="lean">Lean</option>
            <option value="reg">Regular</option>
            <option value="athletic">Athletic</option>
            <option value="big">Big</option>
          </select>
        </label>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <ImageUploader />
        <TextInput />
      </div>
    </div>
  );
};

export default FormStyle2;
