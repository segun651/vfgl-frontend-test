import GirlImage from "../../assets/images/image 19.png"
import AddCart from "../../assets/images/Frame 136.png"
import AddWishlist from "../../assets/images/Frame 137.png"
import PrevArrow from "../../assets/images/Frame139.png"
import NextArrow from "../../assets/images/Frame140.png"
export default function  Carousel(){
    const ImgArray = []
    return(
        <div className="grid mb-8 pb-4">
  
  <div className="flex  gap-3 ">
 <div className=" basis-[90%] bg-[#EBEBEB]">
<img src={GirlImage} alt="GirlImage" className="object-contain w-full "  loading="lazy" />
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

        </div>
    )
}