import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="relative flex justify-center items-center w-[100%] h-[100vh] overflow-x-hidden">
          <div className="absolute w-[100%] h-[100vh] flex content-center items-center pl-[50%] z-10">
            <img
              className="absolute top-0 left-0 w-[100%] h-[100%] object-cover"
              src="src/assets/img/bg-park.jpg"
              alt=""
            />

            <img
              className="absolute top-0 left-0 w-[100%] h-[100%] object-cover z-100"
              src="src/assets/img/trees.png"
              alt=""
            />
            <div className="absolute block w-full h-full top-0 left-0 inset-0 no-pointer-events">
              <div className="">
                <img
                  className="relative left-20 linear-infinite"
                  src="src/assets/img/leaf_tree1.png"
                  alt=""
                />
              </div>
              <div className="flex justify-center self-center">
                {/* pl-[25%] pr-[25%] */}
                <div id="first-card" className="pt-[400px] z-20">
                  <div className="relative border-solid border-x-white border-[1px] rounded-xl shadow-2x1 w-[500px] h-[300px] bg-violet-500 glassmorphism">
                    <div className="flex inline px-6 pt-4">
                      <h1 className="text-white font-bold text-xl text-left flex-1 uppercase">
                        Credit Card
                      </h1>
                      <div className="inline-flex">
                        <div className="flex rounded-full w-10 h-10 bg-red-600"></div>
                        <div className="flex rounded-full w-10 h-10 bg-orange-300/[0.7] -ml-4"></div>
                      </div>
                    </div>
                    <p className="text-white text-3xl text-left font-semibold pl-5 pt-36">
                      1234 5678 1234 5678
                    </p>
                    <div className="flex text-white text-md text-left inline pt-3 font-semibold">
                      <p className=" pl-5 uppercase flex-1 ">victor felipe</p>
                      <p className=" flex-1">05/24</p>
                    </div>
                  </div>
                </div>
                {/* pl-[50%] pr-[25%] */}
                <div
                  id="second-card"
                  className="rotate-[14deg] pt-[250px] -ml-[400px] z-10"
                >
                  <div className="relative border-solid border-x-white border-[1px] rounded-xl shadow-2x1 w-[500px] h-[300px] bg-violet-500 glassmorphism">
                    <div className="flex inline px-6 pt-4">
                      <h1 className="text-white text-lg text-left flex-1 uppercase">
                        Credit Card
                      </h1>
                      <div className="inline-flex">
                        <div className="flex rounded-full w-10 h-10 bg-red-600"></div>
                        <div className="flex rounded-full w-10 h-10 bg-orange-300/[0.7] -ml-4"></div>
                      </div>
                    </div>
                    <p className="text-white text-3xl text-left font-semibold pl-5 pt-36">
                      1234 5678 1234 5678
                    </p>
                    <div className="flex text-white text-md text-left inline pt-3 font-semibold">
                      <p className=" pl-5 uppercase flex-1 font-bold">
                        victor felipe
                      </p>
                      <p className=" flex-1">05/24</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
