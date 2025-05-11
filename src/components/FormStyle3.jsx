import React from 'react';
import { useFormContext } from 'react-hook-form';
import ImageUploader from './ImageUploader';
import TextInput from './TextInput';

const FormStyle3 = () => {
  const { register, watch } = useFormContext();
  const image = watch('image');

  return (
    <div className="bg-gradient-to-bl from-gray-400 to-gray-200 text-gray-900 p-6 rounded-lg shadow-sm space-y-8">
      <div className="flex justify-center">
        {image ? (
          <img src={URL.createObjectURL(image)} alt="Preview" className="w-[28%] max-h-[300px] object-contain" />
        ) : (
          <div className="w-[28%] h-[300px] flex items-center border border-black rounded-xl justify-center text-gray-800">Upload an image</div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm mb-1">Height (cm)</label>
          <input {...register('height')} type="number" className="w-full px-3 py-2 rounded bg-white border border-gray-300" />
        </div>
        <div>
          <label className="block text-sm mb-1">Weight (kg)</label>
          <input {...register('weight')} type="number" className="w-full px-3 py-2 rounded bg-white border border-gray-300" />
        </div>
        <div>
          <label className="block text-sm mb-1">Build</label>
          <select {...register('build')} className="w-full px-3 py-2 rounded bg-white border border-gray-300">
            <option value="lean">Lean</option>
            <option value="reg">Regular</option>
            <option value="athletic">Athletic</option>
            <option value="big">Big</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <ImageUploader />
        <TextInput />
      </div>
    </div>
  );
};

export default FormStyle3;
