import { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  function calculate(op) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) { setResult('Enter both numbers'); return; }
    if (op === '+') setResult(a + b);
    if (op === '-') setResult(a - b);
    if (op === '*') setResult(a * b);
    if (op === '/') setResult(b === 0 ? 'Cannot divide by zero' : a / b);
    if (op === '%') setResult((a / 100) * b);
  }

  return (
    <div>
      <h2>Calculator</h2>
      <input type="number" value={num1} onChange={e => setNum1(e.target.value)} placeholder="First number" />
      <input type="number" value={num2} onChange={e => setNum2(e.target.value)} placeholder="Second number" />
      <div>
        <button onClick={() => calculate('+')}>+</button>
        <button onClick={() => calculate('-')}>-</button>
        <button onClick={() => calculate('*')}>*</button>
        <button onClick={() => calculate('/')}>/</button>
        <button onClick={() => calculate('%')}>%</button>
      </div>
      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;
