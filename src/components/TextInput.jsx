import React from 'react';
import { useFormContext } from 'react-hook-form';

const TextInput = () => {
  const { register } = useFormContext();

  return (
    <label className="block w-full">
      <span className="block mb-2 text-lg font-medium">Text to Print (max 3 lines)</span>
      <textarea
        {...register('text')}
        rows={3}
        maxLength={180}
        className="w-full  p-3 border border-gray-400 rounded resize-none"
        placeholder="Enter text to be printed..."
      />
    </label>
  );
};

export default TextInput;
