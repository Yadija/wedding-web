import { useState } from 'react';

import Home from './components/Home';

function App() {
  const [isShow, setIsShow] = useState(false);

  if (!isShow) return <Home setIsShow={() => setIsShow(true)} />;

  return null;
}

export default App;
