
import HomeContainer from "./HomeContainer"
import MenuContainer from "./MenuContainer"
import OurFresh from "./OurFresh"


const MainContent = () => {
  return (
   <main className="w-full h-full p-6 lg:px-16 px-5 mt-20">
      <div className="w-full h-auto flex-col  flex items-center justify-center">
        <HomeContainer/>
        <OurFresh/>
        <MenuContainer/>
      </div>
   </main>
  )
}

export default MainContent
