import { useState } from 'react'
import './App.css'
import {Cascader,Select , Calendar,Trigger, Switch,Button,Badge,Avatar, Tooltip,Input,Divider,  Typography,Space }  from '../packages/components/src'
import React from 'react'
import IconPlus from '../Icon/react-icon/IconPlus';
import IconMinus from '../Icon/react-icon/IconMinus';
 
import IconStar from '../Icon/react-icon/IconStar';
import IconMessage from '../Icon/react-icon/IconMessage';
import IconSettings from '../Icon/react-icon/IconSettings';
import IconDelete from '../Icon/react-icon/IconDelete';
const InputSearch = Input.Search;
const { Paragraph } = Typography;
const orientations = ['left', 'center', 'right'];
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
const options = [
  {
    value: 'beijing',
    label: 'Beijing',
    children: [
      {
        value: 'Beijing',
        label: 'Beijing',
        children: [
          {
            value: 'chaoyang',
            label: 'Chaoyang',
            children: [
              {
                value: 'datunli',
                label: 'Datunli',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'shanghaishi',
        label: 'Shanghai',
        children: [
          {
            value: 'huangpu',
            label: 'Huangpu',
          },
        ],
      },
    ],
  },
];

function App() {
  const [trigger, setTrigger] = React.useState(['click']);
  const [count, setCount] = React.useState<number>(12);
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
 
  return (
 <>
   <div>
   <Cascader
      placeholder='Please select ...'
      style={{ width: 300 }}
      options={options}
      onChange={(value, option) => {
        console.log(value, option);
      }}
      defaultValue={['shanghai', 'shanghaishi', 'huangpu']}
      allowClear
    />
    </div>
 
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
