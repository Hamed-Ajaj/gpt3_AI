import { Footer , Blog , Possibility , Header , WhatGPT3, Features} from "./containers";
import { Cta , Brand , Navbar} from "./components"
import "./App.css"
export default function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header/>  
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}
