import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
//<button onClick={setCount(count+1)} className='text-3xl'>+</button>   
//Here, setCount(count+1) is executed immediately when the component renders, rather than when the button is clicked.
  return (
    <div className='flex gap-4'> 
    <button onClick={()=>setCount(count-1)} className='text-3xl border-gray-400 rounded-lg'>-</button>
     <p className='text-3xl m-2'>my count is <span className='text-orange-400'>{count}</span></p>
     <button onClick={()=>setCount(count+1)} className='text-3xl border-gray-400 rounded-lg'>+</button>
    </div>
  )
}

export default App
