import { useAtom } from "jotai";
import { countAtom } from "../atoms/couter";

const Counter = () => {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}></button>
      <button onClick={() => setCount(count - 1)}></button>
    </div>
  );
};

export default Counter;
