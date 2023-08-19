import { useState } from 'react'
import './App.css'
import { Button } from '../packages/components/src'
import React from 'react'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Button style={{color:'blue'}}>Button</Button>
    {/* <Tag color='red'>我是标签</Tag> */}
 
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
