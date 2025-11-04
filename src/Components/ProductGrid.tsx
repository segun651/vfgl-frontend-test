import ProductImage1 from "../assets/images/image 28.png"
import ProductImage2 from "../assets/images/image 29.png"
import ProductImage3 from "../assets/images/image 30.png"
import ProductImage4 from "../assets/images/image 31.png"
import ProductImage5 from "../assets/images/image 32.png"
import CardStars2 from "../assets/images/Frame22.png"
import CardStars3 from "../assets/images/Frame 22.png"
import CardStars1 from "../assets/images/Frame23.png"
export default function  ProductGrid({message}: {message: string}){
return (
    <div className="mb-8 pb-4">
 <h2 className="font-semibold text-[28px]">{message}</h2>
 <button className="flex justify-end w-full underline font-medium text-[16px] text-[#525252]"> View All</button>
 <div className="grid  grid-cols-2  md:grid-cols-3 lg:grid-cols-5 my-7 gap-x-3 gap-y-7">
<div className="grid justify-center gap-3 rounded-lg">

<img src={ProductImage1} className="bg-[#F2F2F2] rounded-lg" alt="ProductImage1" loading="lazy" />
<p className="font-semibold text-[18px]">Whistle</p>
<p className="font-semibold text-[18px]">$26</p>
<p className="font-normal text-[16px] text-[#7A7A7A]">Wide Leg Cropped Jeans,
Denim</p>
<img src={CardStars1} alt="Ratings" loading="lazy" />
</div>

<div className="grid  justify-center gap-3 rounded-lg">

<img src={ProductImage2} className="bg-[#F2F2F2] rounded-lg" alt="ProductImage1" loading="lazy" />
<p className="font-semibold text-[18px]">John Lewis ANYDAY</p>
<p className="font-semibold text-[18px]">$26</p>
<p className="font-normal text-[16px] text-[#7A7A7A]">Long Sleeve Utility Shirt, Navy, 6</p>
<img src={CardStars1} alt="Ratings" loading="lazy" />
</div>
<div className="grid gap-3  justify-center rounded-lg">

<img src={ProductImage3} className="bg-[#F2F2F2] rounded-lg" alt="ProductImage1" loading="lazy" />
<p className="font-semibold text-[18px]">John Lewis ANYDAY</p>
<p className="font-semibold text-[18px]">$32</p>
<p className="font-normal text-[16px] text-[#7A7A7A]">Stripe Curved Hem Shirt, Blue</p>
<img src={CardStars2} alt="Ratings" loading="lazy" />
</div>
<div className="grid gap-3  justify-center rounded-lg">

<img src={ProductImage4} className="bg-[#F2F2F2] rounded-lg" alt="ProductImage1" loading="lazy" />
<p className="font-semibold text-[18px]">John Lewis ANYDAY</p>
<p className="font-semibold text-[18px]">$40</p>
<p className="font-normal text-[16px] text-[#7A7A7A]">Denim Overshirt, Mid Wash</p>
<img src={CardStars3} alt="Ratings" loading="lazy" />
</div>
<div className="grid gap-3   justify-center rounded-lg">

<img src={ProductImage5} className="bg-[#F2F2F2] rounded-lg" alt="ProductImage1" loading="lazy" />
<p className="font-semibold text-[18px]">John Lewis</p>
<p className="font-semibold text-[18px]">$79</p>
<p className="font-normal text-[16px] text-[#7A7A7A]">Linen Blazer, Navy</p>
<img src={CardStars1} alt="Ratings" loading="lazy" />
</div>
 </div>
    </div>
)
}