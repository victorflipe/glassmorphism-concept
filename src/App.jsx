import './App.css';

function App() {
  return (
    <>
      <div className="bg-gradient-to-l from-[#c6beee] via-[#d094ea] to-[#d094ea] from-[#c6beee]  overflow-y-hidden h-full">
        <h1 className="text-white uppercase mt-20 font-extrabold text-4xl underline-offset-4">
          Glassmorphism Concept
        </h1>
        <div className=" flex justify-center self-center max-h-screen h-full overflow-hidden">
          <div id="first-card" className="mt-[230px] z-20">
            <div className="relative border-solid border-x-white border-[1px] rounded-xl shadow-2x1 w-[500px] h-[300px]  glassmorphism-cardOne hover:glassmorphism-cardOne drop-shadow-2xl ">
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
          <div
            id="second-card"
            className="rotate-[14deg] mt-[120px] -ml-[400px] z-10"
          >
            <div className="relative border-solid border-x-white border-[1px] rounded-xl shadow-2x1 w-[500px] h-[300px] glassmorphism-cardTwo hover:glassmorphism-cardTwo drop-shadow-2xl">
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
                <p className=" pl-5 uppercase flex-1 font-bold">
                  victor felipe
                </p>
                <p className=" flex-1">05/24</p>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
