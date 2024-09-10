import Header from "./components/Header"
import MainContent from "./components/MainContent"


const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-purple-50 ">
      <Header/>
       <MainContent/>
    </div>
  )
}

export default App
