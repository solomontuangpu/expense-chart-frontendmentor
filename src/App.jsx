import "./App.css";
import HeaderCard from "./components/HeaderCard";
import MainCard from "./components/MainCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=' flex justify-center flex-col items-center h-screen'>
      <main className=' sm:w-full md:w-3/4  w-1/4'>
        <HeaderCard />

        <MainCard />
      </main>

      <Footer />
    </div>
  );
}

export default App;
