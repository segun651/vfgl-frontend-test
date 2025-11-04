import GirlImage from "../../assets/images/image 19.png"
import AddCart from "../../assets/images/Frame 136.png"
import AddWishlist from "../../assets/images/Frame 137.png"
import PrevArrow from "../../assets/images/Frame139.png"
import NextArrow from "../../assets/images/Frame140.png"
import Frame139 from "../../assets/images/Frame 139.png"
import Frame140 from "../../assets/images/Frame 140.png"
import Frame141 from "../../assets/images/Frame 141.png"
import Frame1143 from "../../assets/images/Frame 143.png"
import Frame144 from "../../assets/images/Frame 144.png"
export default function  Carousel(){
    const ImgArray = [Frame139,Frame140,Frame141,Frame1143,Frame144]
    return(
        <div className="grid mb-8 pb-4">
  
  <div className="flex  gap-3 ">
    <div className="basis-[90%] ">
        <div className="grid bg-[#EBEBEB]">
<img src={GirlImage} alt="GirlImage" className="object-contain w-full "  loading="lazy" />
</div>

    </div>
 
 <div className=" basis-[10%] relative ">
<div className="absolute top-0">
<img src={AddCart} alt="Add to cart icon" className="my-2 cursor-pointer " loading="lazy" />
<img src={AddWishlist} alt="Add to Wishlist icon" className="my-2 cursor-pointer" loading="lazy" />
</div>
<div className="absolute bottom-0">
<img src={PrevArrow} alt="Prev" className="my-2 cursor-pointer" loading="lazy" />
<img src={NextArrow} alt="Next" className="my-2 cursor-pointer" loading="lazy" />
</div>
 </div>

  </div>

<div className="flex gap-1 my-2 py-2">
{
    ImgArray.map((img,index)=>(
        <div key={index} className="inline-block mx-2 my-2 ">
<img src={img} alt={`Carousel Image ${index + 1}`} className="w-20 h-25 rounded-lg bg-[#F2F2F2] object-contain cursor-pointer " loading="lazy" />
        </div>
    ))
}
</div>
        </div>
    )
}