// use State (this ex. is a state about number)
import { useState } from "react";

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>; 
    children: ReactNode;
    handleIncreaseCount: () => void;
    handleIncreaseCount: () => void;
};

// EX. destructing array
function Counter({
    setCount, 
    children,
    handleIncreaseCount,
    handleDecreaseCount,
}: CounterProps ) {
  // const [any name of state, value using to update state] = useState<>
    // EX. const as number (move to App.tsx to use with more than 2 component)
    // const [count, setCount] = useState<number>(0);
    // EX. const as string (not in use, just write this line as example)
    // const [username, setUsername] = useState<string>("");

  // Sol 2. arrow function (move to Aqpp.tsx)
//   const handleIncreaseCount = () => {
//     setCount(count + 1);
//   }; 

//   const handleDecreaseCount = () => {
//     setCount(count - 1);
//   };

  return (
    <>
        {/* <div>{count}</div> */}
        <div>{children}</div>

        {/* EX. use {console.log} to check if the button work or not */}
        {/* <button onClick={console.log}>Increase</button> */}

        {/* Sol 1. use {function} : in this case is arrow function*/}
        {/* <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
        <button onClick={() => setCount((prev) => prev -1)}>Decrease</button> */}

        {/* test with console.log */}
        {/* <button 
            onClick={() => 
                setCount((prev) => {
                    console.log(prev);
                    return prev + 1;
                })
            }
        >
            Increase (test)
        </button> */}

        {/* Sol 2. use {const} from arrow function above */}
        <button onClick={handleIncreaseCount}>Increase (2)</button>
        <button onClick={handleDecreaseCount}>Decrease (2)</button>

    </>
  );
}

export default Counter;