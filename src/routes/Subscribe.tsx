import { useState } from 'react';

export const Subscribe = () => {
  const [email, setEmail] = useState('');
  return (
    <div className="bg-green p-12" id="subscribe">
      <h2 className="text-center text-24 font-bold text-white">
        SUBSCRIBE NOW
      </h2>
      <h3 className="font-poppins text-center text-28 text-white">
        Get a Free Chapter of this Book
      </h3>
      <div className="mx-auto flex flex-col gap-y-1 md:w-1/2">
        <input
          className="font-poppins my-4 rounded-lg bg-white p-2 font-bold leading-10"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="font-poppins rounded-lg bg-green-500 p-2 font-bold leading-10 text-white">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};
