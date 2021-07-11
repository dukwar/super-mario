import './App.css';
import {useEffect} from "react";
import {start} from "./game/main";

function App() {

    useEffect(() => {
        start()
    }, [])

  return (

      <>
        <canvas id="screen" width={1000} height={1000}>

        </canvas>
      </>


  );
}

export default App;
