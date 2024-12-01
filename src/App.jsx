
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react'


function App() {
  
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className='m-10'>
      
      
      <h1 className='text-6xl text-center text-purple-600'>Hot Hot cold coffee{coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4 mt-10'>
      {
        coffees?.map(coffee=><CoffeeCard key={coffee._id} setCoffees={setCoffees} coffees={coffees} coffee={coffee}></CoffeeCard>)
      }
      </div>
      
    </div>
  )
}

export default App
