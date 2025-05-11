import React from 'react';
import { useFormContext } from 'react-hook-form';
import ImageUploader from './ImageUploader';
import TextInput from './TextInput';

const FormStyle1 = () => {
  const { register, watch } = useFormContext();
  const image = watch('image');

  return (
    <div className="bg-gradient-to-tl from-slate-300 to-slate-50 text-black p-6 rounded-2xl shadow-xl grid md:grid-cols-3 gap-6">
      <div className="col-span-1 flex flex-col items-center justify-center">
        {image ? (
          <img src={URL.createObjectURL(image)} alt="T-shirt preview" className="max-h-[400px] w-full object-contain border" />
        ) : (
          <div className="w-full h-[400px] border border-gray-600 rounded-xl flex items-center justify-center text-gray-700">No Image Selected</div>
        )}
      </div>
      <div className="col-span-1 flex flex-col gap-4 justify-start">
        <label className="block">
          Height (cm)
          <input {...register('height')} type="number" className="mt-1 block w-full p-2 border rounded" defaultValue="180" />
        </label>
        <label className="block">
          Weight (kg)
          <input {...register('weight')} type="number" className="mt-1 block w-full p-2 border rounded" defaultValue="80" />
        </label>
        <label className="block">
          Build
          <select {...register('build')} className="mt-1 block w-full p-2 border rounded" defaultValue="athletic">
            <option value="lean">Lean</option>
            <option value="reg">Regular</option>
            <option value="athletic">Athletic</option>
            <option value="big">Big</option>
          </select>
        </label>
        <ImageUploader />
      </div>
      <div className="col-span-1">
        <TextInput />
      </div>
    </div>
  );
};

export default FormStyle1;
