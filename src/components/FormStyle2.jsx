import React from 'react';
import { useFormContext } from 'react-hook-form';
import ImageUploader from './ImageUploader';
import TextInput from './TextInput';

const FormStyle2 = () => {
  const { register, watch } = useFormContext();
  const image = watch('image');

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-2xl space-y-8 shadow-xl max-w-6xl mx-auto border border-gray-700/50 backdrop-blur-sm">
      <div className="flex justify-center">
        {image ? (
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-40 transition duration-200"></div>
            <img 
              src={URL.createObjectURL(image)} 
              alt="Preview" 
              className="relative w-[32%] max-h-[300px] object-contain rounded-lg bg-gray-800/50 p-2 border border-gray-600/50" 
            />
          </div>
        ) : (
          <div className="w-[32%] h-[300px] rounded-lg bg-gray-800/30 backdrop-blur-sm flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-600/50 hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300">
            <svg className="w-12 h-12 mb-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="font-medium">Drop your image here</p>
            <p className="text-sm text-gray-500 mt-1">or click to browse</p>
          </div>
        )}
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <label className="block">
          <span className="text-sm font-medium text-gray-300 mb-1.5 block">Height (cm)</span>
          <input 
            {...register('height')} 
            type="number" 
            className="w-full px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200" 
            placeholder="Enter height"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-300 mb-1.5 block">Weight (kg)</span>
          <input 
            {...register('weight')} 
            type="number" 
            className="w-full px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200" 
            placeholder="Enter weight"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-300 mb-1.5 block">Build</span>
          <select 
            {...register('build')} 
            className="w-full px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-600/50 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
          >
            <option value="lean">Lean</option>
            <option value="reg">Regular</option>
            <option value="athletic">Athletic</option>
            <option value="big">Big</option>
          </select>
        </label>
      </div>
      <div className="grid md:grid-cols-2 gap-8 pt-2">
        <ImageUploader />
        <TextInput />
      </div>
    </div>
  );
};

export default FormStyle2;
