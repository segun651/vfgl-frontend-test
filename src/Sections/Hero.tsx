import Carousel from "../Components/Hero/Carousel"
import HeroText from "../Components/Hero/HeroText"
export default function Hero(){
return(
  <div className="grid md:grid-cols-2  gap-y-5 gap-x-[10%] mb-18 ">
<Carousel />
<HeroText />
         <div className="border-[0.5px] border-[#A3A3A3]  border-dashed w-[90vw] mx-auto border-d">

         </div>
    </div>
)
  
}