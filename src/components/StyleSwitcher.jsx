import React from 'react';

const labels = ['Style 1: Light Shadow', 'Style 2: Neon Dark', 'Style 3: Minimal'];

const StyleSwitcher = ({ current }) => {
  return (
    <div className="fixed top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-xs shadow">
      {labels[current]}
    </div>
  );
};

export default StyleSwitcher;
