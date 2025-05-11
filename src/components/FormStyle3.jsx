import React from 'react';
import { useFormContext } from 'react-hook-form';
import ImageUploader from './ImageUploader';
import TextInput from './TextInput';

const FormStyle3 = () => {
  const { register, watch } = useFormContext();
  const image = watch('image');

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900 p-6 rounded-2xl shadow-lg max-w-6xl mx-auto h-[calc(100vh-2rem)] flex flex-col gap-6 border border-gray-100">
      <div className="flex justify-center flex-shrink-0">
        {image ? (
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <img 
              src={URL.createObjectURL(image)} 
              alt="Preview" 
              className="relative w-[35%] h-[250px] object-contain rounded-xl bg-white p-3 shadow-sm" 
            />
          </div>
        ) : (
          <div className="w-[35%] h-[250px] rounded-xl bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center group hover:bg-white transition-all duration-300 shadow-sm border border-gray-100">
            <div className="transform group-hover:scale-105 transition-transform duration-300">
              <svg className="w-12 h-12 mb-3 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 font-medium group-hover:text-gray-700">Upload an image</p>
              <p className="text-sm text-gray-400 mt-1">Click or drag & drop</p>
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-shrink-0">
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
          <div className="relative">
            <input 
              {...register('height')} 
              type="number" 
              className="w-full pl-4 pr-10 py-2 rounded-xl bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200" 
              placeholder="Enter height"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">cm</span>
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
          <div className="relative">
            <input 
              {...register('weight')} 
              type="number" 
              className="w-full pl-4 pr-10 py-2 rounded-xl bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200" 
              placeholder="Enter weight"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">kg</span>
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-gray-700">Build</label>
          <select 
            {...register('build')} 
            className="w-full px-4 py-2 rounded-xl bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          >
            <option value="">Select build type</option>
            <option value="lean">Lean</option>
            <option value="reg">Regular</option>
            <option value="athletic">Athletic</option>
            <option value="big">Big</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 bg-white/50 rounded-xl p-5 flex-grow min-h-0">
        <ImageUploader />
        <TextInput />
      </div>
    </div>
  );
};

export default FormStyle3;
