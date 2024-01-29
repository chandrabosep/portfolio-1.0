"use client";
import React, { useState, useEffect } from "react";

const GreetingComponent = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateGreeting = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 5 && currentHour < 7) {
        setGreeting("Early Bird Gets the Worm!");
      } else if (currentHour >= 7 && currentHour < 9) {
        setGreeting("Breakfast and Productivity!");
      } else if (currentHour >= 9 && currentHour < 11) {
        setGreeting("Mid-Morning Energizer!");
      } else if (currentHour >= 11 && currentHour < 13) {
        setGreeting("Lunchtime Power Hour!");
      } else if (currentHour >= 13 && currentHour < 15) {
        setGreeting("Afternoon Hustle!");
      } else if (currentHour >= 15 && currentHour < 17) {
        setGreeting("Productive Afternoon!");
      } else if (currentHour >= 17 && currentHour < 19) {
        setGreeting("Early Evening Unwind!");
      } else if (currentHour >= 19 && currentHour < 22) {
        setGreeting("Dinner and Relaxation!");
      } else {
        setGreeting("Hi, Night Owl!");
      }
    };

    updateGreeting();
    const intervalId = setInterval(updateGreeting, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" flex justify-end w-full md:block">
      <div class="px-4 absolute py-2 bg-green-500 font-bold text-base h-fit w-fit md:w-fit rounded-full text-[#1c1c1c] tracking-wide">
        {greeting}
      </div>
      <svg
        viewBox="0 0 22 18"
        fill="none"
        class="relative top-[2rem] right-1/4 md:right-0 md:left-[7px] w-5 text-[#00CB2C] tracking-wide"
      >
        <path
          d="M20.9991 8C17.4991 12.5 13.4991 16 7.69476 17.4776C8.49908 10.5 6.99908 8 0.939453 3.39334L1.79694 0L21.1874 4.8999L20.9991 8Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
};

export default GreetingComponent;
