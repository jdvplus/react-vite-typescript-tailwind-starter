import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='w-screen h-scren flex flex-col items-center justify-center my-10'>
      <h1 className='text-3xl font-bold my-4 text-zinc-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
        react + vite + typescript + tailwind
      </h1>
      <button
        className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600'
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </div>
  );
};

export default App;
