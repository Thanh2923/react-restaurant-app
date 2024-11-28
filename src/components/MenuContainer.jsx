import AnimotionItemPro from "./AnimotionItemPro"
import ButtonCategory from "./ButtonCategory"
import ItemMenu from "./ItemMenu"



const MenuContainer = () => {
   
  return (
     <section className="w-full h-auto my-10">
            <div className="w-full flex flex-col justify-center items-center">
                <p className="text-3xl font-semibold flex flex-col relative before:absolute before:w-12 before:-bottom-2 before:rounded-md before:h-1 before:bg-orange-600 w-full text-textColor">Our Hot Dishes</p>
                 <AnimotionItemPro animotion={"animotion-right-to-left"}>
                 <div className="w-full  py-10 md:flex  justify-center gap-7 items-center" > 
                <ButtonCategory/>
                
                 </div>
                 </AnimotionItemPro>
                
               <AnimotionItemPro animotion={"animotion-bottom-to-top"}>
               <div className="flex flex-wrap justify-center mb-10  gap-3 items-center mt-5">
                  <ItemMenu/>
                  

                  </div>
               </AnimotionItemPro>
            </div>
     </section>
  )
}

export default MenuContainer
