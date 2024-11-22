import './App.css';
import MyCard from './components/Card';

function App() {
  return (
    <>
      <div className="bg-gradient-to-l from-[#c6beee] via-[#d094ea] to-[#d094ea] overflow-y-hidden h-full">
        <h1 className="text-white uppercase mt-20 font-extrabold text-4xl underline-offset-4">
          Glassmorphism Concept
        </h1>
        <div className=" flex justify-center self-center max-h-screen h-full overflow-hidden">
          <MyCard id="first-card"></MyCard>
          <MyCard id="second-card"></MyCard>
        </div>
      </div>

    </>
  );
}

export default App;
