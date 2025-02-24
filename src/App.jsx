
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
const loadedCoffees=useLoaderData();
const [coffees,setCoffees]=useState(loadedCoffees);
  return (
    <div className='m-20'>
      <h1 className='text-2xl text-purple-600 text-center mb-20'>Hot cool coffee:{loadedCoffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-10' >
        {
          coffees.map(coffee=><CoffeeCard 
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
     
    </div>
  )
}

export default App
