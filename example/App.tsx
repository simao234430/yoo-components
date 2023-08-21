import { useState } from 'react'
import './App.css'
import { Button, Space } from '../packages/components/src'
import React from 'react'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Space size='large'>
      <Button size='mini' type='primary'>
        Mini
      </Button>
      <Button size='small' type='primary'>
        Small
      </Button>
      <Button size='default' type='primary'>
        Default
      </Button>
      <Button size='large' type='primary'>
        Large
      </Button>
    </Space>
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
