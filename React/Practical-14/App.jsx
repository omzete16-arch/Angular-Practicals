import { useState, useEffect } from 'react';

function App() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Digital Clock</h2>
      <h3>{now.toLocaleTimeString()}</h3>
      <p>{now.toLocaleDateString()}</p>
    </div>
  );
}

export default App;
