import { useState } from 'react'
import Header from './header';
import MainUI from './mainui';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainUI />
    </>
  )
}

export default App
