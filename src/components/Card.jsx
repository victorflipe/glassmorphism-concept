import { motion } from "motion/react"

function MyCard({id}) {

    let classParent = id == "first-card" ? "mt-[230px] z-20" : "rotate-[14deg] mt-[120px] -ml-[400px] z-10" 

    let classCard = id == "first-card" ? "glassmorphism-cardOne hover:glassmorphism-cardOne" : "glassmorphism-cardTwo hover:glassmorphism-cardTwo";

    return (
        <div
            id={id}
            className={classParent}
          >
            <div className={`relative border-solid border-x-white border-[1px] rounded-xl shadow-2x1 w-[500px] h-[300px] drop-shadow-2xl cursor-pointer ${classCard}`}>
              <div className="flex px-6 pt-4">
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
              <div className="flex text-white text-md text-left pt-3 font-semibold">
                <p className=" pl-5 uppercase flex-1 font-bold">
                  victor felipe
                </p>
                <p className=" flex-1">05/24</p>
              </div>
            </div>
          </div>
    );
}

export default MyCard;