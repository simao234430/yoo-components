import { useState } from 'react'
import './App.css'
import { Trigger, Button, Tooltip,Input,  Typography,Space }  from '../packages/components/src'
import React from 'react'
import IconPlus from '../Icon/react-icon/IconPlus';
import IconLeft from '../Icon/react-icon/IconLeft';
import IconRight from '../Icon/react-icon/IconRight';
import IconStar from '../Icon/react-icon/IconStar';
import IconMessage from '../Icon/react-icon/IconMessage';
import IconSettings from '../Icon/react-icon/IconSettings';
import IconDelete from '../Icon/react-icon/IconDelete';
const InputSearch = Input.Search;
function Element(props) {
  return (
    <Typography.Text {...props} style={{ marginRight: 20 }}>
      Hover me
    </Typography.Text>
  );
}

function Popup() {
  return (
    <div className='demo-trigger-popup' style={{ width: 300 }}>
      <Tooltip content='123' defaultPopupVisible>
        <span>123123</span>
      </Tooltip>
    
    </div>
  );
}
const ButtonGroup = Button.Group;
function App() {
  const [count, setCount] = useState(0)
  return(
  <>
  <Space style={{ width: 1000, overflow: 'auto' }} size={40}>
      <Trigger
        popup={() => <Popup />}
        mouseEnterDelay={400}
        mouseLeaveDelay={400}
        position='bottom'
      >
        <Element />
      </Trigger>
      <Trigger  popup={() => <Popup />} trigger='click' position='bottom' classNames='zoomInTop'>
        <Button>Click me</Button>
      </Trigger>
      <Trigger popup={() => <Popup />} trigger='focus' position='top' classNames='zoomInBottom'>
        <Input style={{ width: 200 }} placeholder='Focus on me' />
      </Trigger>
    </Space>
 
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
