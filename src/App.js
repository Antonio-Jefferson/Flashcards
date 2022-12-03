import ScreenHome from "./components/ScreenHome";
import ScreenTwo from "./components/ScreenTwo";
import { useState } from "react";
import GlobalStyle from "./css/GlobalStyle";
export default function App() {
  const [play, setPlay] = useState(false)
  return(
   <>
      <GlobalStyle/>
      {play === false && <ScreenHome play={play} setPlay={setPlay} />}

      {play === true && <ScreenTwo/>}
   </>
  )
}




