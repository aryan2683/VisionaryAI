import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (input) {
      const newImage = await generateImage(input);
      if (newImage) {
        setIsImageLoaded(true);
        setImage(newImage);
      }
    }
    setLoading(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center relative overflow-hidden"
    >
      {/* Blurred Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          filter: 'blur(8px)',
          opacity: 0.5,
          
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        {/* Display Generated Image */}
        {isImageLoaded && (
          <div className="relative flex flex-col items-center mb-6">
            <img
              src={image}
              alt="Generated"
              className="max-w-xs sm:max-w-md md:max-w-lg rounded-lg shadow-lg border-4 border-zinc-900"
              style={{ height: 'auto' }}
            />
          </div>
        )}

        {/* Loading Input & Button */}
        {!isImageLoaded && (
          <div className="flex flex-col sm:flex-row justify-between w-full max-w-xl bg-neutral-500 text-white text-sm p-1 mt-10 rounded-full px-4">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Describe what you want to generate"
              className="flex-1 bg-transparent outline-none placeholder-white px-2 sm:px-4 mb-2 sm:mb-0"
            />
            <button
              type="submit"
              className="bg-zinc-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white text-base hover:bg-zinc-700 transition-all"
            >
              Generate
            </button>
          </div>
        )}

        {/* Options After Image Is Loaded */}
        {isImageLoaded && (
          <div className="flex flex-wrap gap-4 justify-center items-center text-white text-sm p-0.5 mt-10 rounded-full">
            <p
              onClick={() => {
                setIsImageLoaded(false);
              }}
              className="bg-white border border-zinc-900 text-black cursor-pointer px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all"
            >
              Generate another
            </p>

            <a
              href={image}
              download
              className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer text-white hover:bg-zinc-700 transition-all"
            >
              Download
            </a>
          </div>
        )}
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <div className="flex items-center justify-center space-x-2 text-white text-lg">
            <span className="loader"></span>
            <p>Loading...</p>
          </div>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
