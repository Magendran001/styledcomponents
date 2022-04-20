import logo from './logo.svg';
import './App.css';
// import Button from './components/button';
// import Button from '@mui/material/Button';
import { Button } from 'antd';
import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
      <Button type='primary'>Hello World</Button>
      <Button type='default'>Hello World</Button>
      <Button type='dashed'>Hello World</Button>
      <div>
        <Button type='text'>Hello World</Button>
        <Button type='link'>Hello World</Button>
      </div>

    </div>
  );
}

export default App;
