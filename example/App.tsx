import { useState } from 'react'
import './App.css'
import { Button, Space ,ButtonProps } from '../packages/components/src'
import React from 'react'
import IconPlus from '../Icon/react-icon/IconPlus';
import IconLeft from '../Icon/react-icon/IconLeft';
import IconRight from '../Icon/react-icon/IconRight';
import IconStar from '../Icon/react-icon/IconStar';
import IconMessage from '../Icon/react-icon/IconMessage';
import IconSettings from '../Icon/react-icon/IconSettings';
import IconDelete from '../Icon/react-icon/IconDelete';

const ButtonGroup = Button.Group;
function App() {
  const [count, setCount] = useState(0)
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  function onClickBtn1() {
    setLoading1(true);
    setTimeout(() => {
      setLoading1(false);
    }, 4000);
  }

  function onClickBtn2() {
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 4000);
  }

  function onClickBtn3() {
    setLoading3(true);
    setTimeout(() => {
      setLoading3(false);
    }, 4000);
  }
  return (
    <>
      <Space
      style={{
        width: 360,
        border: '1px solid var(--color-border)',
        borderRadius: 4,
        padding: 20,
      }}
      direction='vertical'
      size='large'
    >
      <Button type='primary' long>
        Primary
      </Button>
      <Button type='secondary' long>
        Secondary
      </Button>
      <Button type='dashed' long>
        Dashed
      </Button>
      <Button type='default' long>
        Default
      </Button>
      <Button type='text' long>
        Text
      </Button>
    </Space>
    <Space size='large'>
      <Button type='primary' icon={<IconPlus/>} />
      <Button type='primary' icon={<IconDelete />}>
        Delete
      </Button>
    </Space>
    <Space size='large'>
      <Button type='primary' icon={<IconPlus />} />
      <Button shape='circle' type='primary' icon={<IconPlus />} />
      <Button shape='round' type='primary'>
        Primary
      </Button>
      <Button type='primary'>Primary</Button>
    </Space>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 100px)',
        gridRowGap: 24,
        gridColumnGap: 24,
      }}
    >
      <Button type='primary' status='warning'>
        Warning
      </Button>
      <Button status='warning'>Warning</Button>
      <Button type='outline' status='warning'>
        Warning
      </Button>
      <Button type='text' status='warning'>
        Warning
      </Button>

      <Button type='primary' status='danger'>
        Danger
      </Button>
      <Button status='danger'>Danger</Button>
      <Button type='outline' status='danger'>
        Danger
      </Button>
      <Button type='text' status='danger'>
        Danger
      </Button>

      <Button type='primary' status='success'>
        Success
      </Button>
      <Button status='success'>Success</Button>
      <Button type='outline' status='success'>
        Success
      </Button>
      <Button type='text' status='success'>
        Success
      </Button>
    </div>

    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 100px)',
          rowGap: 24,
          columnGap: 24,
          marginLeft: 24,
        }}
      >
        <Button type='primary' loading>
          Loading
        </Button>
        <Button type='secondary' loading>
          Loading
        </Button>
        <Button type='dashed' loading>
          Loading
        </Button>
        <Button type='primary' shape='circle' loading />
        <Button type='secondary' shape='circle' loading />
        <Button type='dashed' shape='circle' loading />
      </div>
      <Button
        type='primary'
        loading={loading1}
        onClick={onClickBtn1}
        style={{ margin: 24 }}
      >
        Click Me
      </Button>
      <Button
        type='primary'
        loading={loading2}
        onClick={onClickBtn2}
        style={{ margin: 24 }}
      >
        {!loading2 && <IconPlus />}Click Me
      </Button>
 
      <Button
        type='primary'
        loadingFixedWidth
        loading={loading3}
        onClick={onClickBtn3}
        style={{ margin: 24 }}
      >
        Search
      </Button>
    </div>

    <Space size='large'>
        <ButtonGroup>
          <Button
            type='primary'
            icon={<IconLeft />}
            shape='round'
            style={{ padding: '0 8px' }}
          >
            Prev
          </Button>
          <Button
            type='primary'
            shape='round'
            style={{ padding: '0 8px' }}
          >
            Next
            <IconRight />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button type='primary' icon={<IconStar />} />
          <Button type='primary' icon={<IconMessage />} />
          <Button type='primary' icon={<IconSettings />} />
        </ButtonGroup>
        <ButtonGroup>
          <Button type='primary' icon={<IconStar />}>
            Favorite
          </Button>
          <Button type='primary' icon={<IconSettings />}>
            Setting
          </Button>
        </ButtonGroup>
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
