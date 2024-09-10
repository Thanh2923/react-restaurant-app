import HomeContainer from "./HomeContainer"
import OurFresh from "./OurFresh"


const MainContent = () => {
  return (
   <main className="w-full h-full p-6 px-16 mt-20">
      <div className="w-full h-auto flex-col flex items-center justify-center">
        <HomeContainer/>
        <OurFresh/>
      </div>
   </main>
  )
}

export default MainContent
