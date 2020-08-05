import React, {useState, useEffect, useRef} from 'react';

export const CounterOne = () => {
  // Объявляем новую переменную состояния "count"
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count;  
    document.title = `you press the button ${count} times`;
    console.log(count, prevCountRef);
  }, [count]);
  console.log('render', prevCountRef);
  const prevCount = prevCountRef.current;
  return (
    <div>
      <p>Вы нажали {count} раз, а раньше было {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
};

export const Counter = () => {
    const [count, setCount] = useState(0);
  
    function handleAlertClick() {
      setTimeout(() => {
        alert('Вы кликнули по: ' + count);
      }, 3000);
    }
  
    return (
      <div>
        <p>Вы кликнули {count} раз(а)</p>
        <button onClick={() => setCount(count + 1)}>
          Кликни меня
        </button>
        <button onClick={handleAlertClick}>
          Показать предупреждение
        </button>
      </div>
    );
  }
