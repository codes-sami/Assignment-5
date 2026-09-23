import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import type { TechType } from "./type"
import MainLayout from "./components/MainLayout";
import { Footer } from "./components/Footer";


const techPromise = async ():Promise<TechType[]> =>{
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}


function App() {
 
  

  return (
    <>
    <Nav/>
    <Banner/>
    
    <Suspense fallback={<h3 className="text-center text-4xl font-bold">loading....</h3>}>
    <MainLayout techPromise={techPromise()} />
    </Suspense>
    <Footer/>
    </>
  )
}

export default App
