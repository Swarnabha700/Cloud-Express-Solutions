import React from 'react';
import { useFormContext } from 'react-hook-form';
import ImageUploader from './ImageUploader';
import TextInput from './TextInput';

const FormStyle1 = () => {
  const { register, watch } = useFormContext();
  const image = watch('image');

  return (
    <div className="bg-gradient-to-br from-slate-50 to-white text-slate-800 p-8 rounded-2xl shadow-lg grid md:grid-cols-3 gap-8 max-w-6xl mx-auto border border-slate-100">
      <div className="col-span-1 flex flex-col items-center justify-center space-y-4">
        {image ? (
          <img 
            src={URL.createObjectURL(image)} 
            alt="T-shirt preview" 
            className="max-h-[350px] w-full object-contain rounded-lg shadow-sm border border-slate-200 bg-white p-2" 
          />
        ) : (
          <div className="w-full h-[350px] border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-500 bg-white transition-colors duration-200 hover:bg-slate-50">
            <svg className="w-12 h-12 mb-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="font-medium">No Image Selected</p>
            <p className="text-sm text-slate-400 mt-1">Click to upload</p>
          </div>
        )}
      </div>
      <div className="col-span-1 flex flex-col gap-6 justify-start">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Height (cm)</span>
          <input 
            {...register('height')} 
            type="number" 
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200" 
            defaultValue="180" 
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Weight (kg)</span>
          <input 
            {...register('weight')} 
            type="number" 
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200" 
            defaultValue="80" 
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Build</span>
          <select 
            {...register('build')} 
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200" 
            defaultValue="athletic"
          >
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
