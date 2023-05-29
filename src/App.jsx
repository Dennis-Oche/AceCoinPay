import './App.css';
import { useGlobalContext } from './context';

import Payment from './components/Payment';
import Customer from './components/Customer';

export default function App() {
  const { submitHandler, enterHandler } = useGlobalContext();
  
  return (
    <form 
      className='card'
      onSubmit={submitHandler}      
      onKeyDown={enterHandler}
    >
      <Payment />
      <Customer />
    </form>
  )
}
