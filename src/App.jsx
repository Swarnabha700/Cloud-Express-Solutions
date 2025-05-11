import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import FormWrapper from './components/FormWrapper';
import StyleSwitcher from './components/StyleSwitcher';

const defaultValues = {
  height: '180',
  weight: '80',
  build: 'athletic',
  text: '',
  image: null,
};

function App() {
  const methods = useForm({ defaultValues });
  const [styleIndex, setStyleIndex] = useState(0);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.altKey && e.key.toLowerCase() === 'q') {
        setStyleIndex((prev) => (prev + 1) % 3);
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <FormProvider {...methods}>
        <FormWrapper styleIndex={styleIndex} />
      </FormProvider>
      <StyleSwitcher current={styleIndex} />
    </div>
  );
}

export default App;
