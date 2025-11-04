import StarImage from "../../assets/images/star.png"
import ArrowUp from "../../assets/images/arrow-up.png"
import ReviewImage1 from "../../assets/images/Frame 197.png"
import ReviewImage2 from "../../assets/images/Frame 198.png"
import ReviewImage3 from "../../assets/images/Frame 199.png"
import ReviewImage4 from "../../assets/images/Frame 200.png"

export default function ReviewComments(){

return(

    <div className="flex  gap-16 my-10">
  <section className="basis-4/20  hidden lg:block border-[0.5px] border-dashed  h-fit py-4 border-zinc-400  w-fit">
   <h2 className="px-3 font-semibold text-xl">Reviews Filter</h2>
   <div className="border-[0.1px] border-zinc-300 border-spacing-2 border-dashed  my-4 w-full p-0"></div>
   <div className="grid gap-3 px-4 my-2">
    <div className="flex justify-between">
<h3 className="font-semibold text-[16px] ">Rating</h3>
<img src={ArrowUp} alt="arrow up" className="w-2 h-1.5  my-auto" loading="lazy" /> 
    </div>
 
 <article className="flex gap-2 text-[#818B9C] px-2">
<input type="checkbox" />
<div className="flex gap-1">
   <img src={StarImage}  alt="StarImage" />
   <p>5</p>
</div>
 </article>
 <article className="flex gap-2 text-[#818B9C] px-2">
<input type="checkbox" />
<div className="flex gap-1">
   <img src={StarImage}  alt="StarImage" />
   <p>4</p>
</div>
 </article>
 <article className="flex gap-2 text-[#818B9C] px-2">
<input type="checkbox" />
<div className="flex gap-1">
   <img src={StarImage}  alt="StarImage" />
   <p>3</p>
</div>
 </article>
 <article className="flex gap-2 text-[#818B9C] px-2">
<input type="checkbox" />
<div className="flex gap-1">
   <img src={StarImage}  alt="StarImage" />
   <p>2</p>
</div>
 </article>
 <article className="flex gap-2 text-[#818B9C] px-2">
<input type="checkbox" />
<div className="flex gap-1">
   <img src={StarImage}  alt="StarImage" />
   <p>1</p>
</div>
 </article>
   </div>

    <div className="border-[0.1px] border-zinc-300 border-spacing-2 border-dashed  my-8 w-full "></div>

   <div className="my-4 px-4 grid gap-3 ">
  <div className="flex justify-between">
<h3 className="font-semibold text-[16px] ">Review Topics</h3>
<img src={ArrowUp} alt="arrow up" className="w-2 h-1.5  my-auto" loading="lazy" /> 
    </div>
 <article className="flex gap-3 text-[#818B9C] px-2">
<input type="checkbox" />
   <p>Product Quality</p>

 </article>
 <article className="flex gap-3 text-[#818B9C] px-2">
<input type="checkbox" />
   <p>Seller Services</p>

 </article>
 <article className="flex gap-3 text-[#818B9C] px-2">
<input type="checkbox" />
   <p>Product Price</p>

 </article>
 <article className="flex gap-3 text-[#818B9C] px-2">
<input type="checkbox" />
   <p>Shipment</p>

 </article>
 <article className="flex gap-3 text-[#818B9C] px-2">
<input type="checkbox" />
   <p>Match with Description</p>

 </article>
   </div>
  </section>
  <section className=" w-full lg:basis-16/20">
<h2 className="font-semibold text-xl">Review Lists</h2>
  <div className="flex gap-2 py-4 mb-5 flex-wrap">
<button className="rounded-lg px-3 md:px-5 py-2 border text-center bg-[#EBEBEB] font-medium text-[14px]">
All Reviews
</button>
<button className="rounded-lg  px-3 md:px-5 py-2 border text-center font-medium text-[14px]">
With Photo & Video
</button>
<button className="rounded-lg  px-3 md:px-5 py-2 border text-center font-medium text-[14px]">
With Description
</button>
  </div>
  <div className="grid gap-6">
 <img src={ReviewImage1} alt="Review Image1" loading="lazy" className="object-cover" />
 <div className="border-[0.1px] border-zinc-300 border-spacing-2  border-dashed  my-4 w-full  px-0"></div>

 <img src={ReviewImage2} alt="Review Image1" loading="lazy" />
 <div className="border-[0.1px] border-zinc-300 border-spacing-2  border-dashed  my-4 w-full  px-0"></div>

 <img src={ReviewImage3} alt="Review Image1" loading="lazy" />
 <div className="border-[0.1px] border-zinc-300 border-spacing-2  border-dashed  my-4 w-full  px-0"></div>

 <img src={ReviewImage4} alt="Review Image1" loading="lazy" />
 
  </div>

   <div className="flex my-6 justify-center gap-2">
 <button className="border border-[#333333] rounded-lg px-4 py-2">1</button>
<button className="shadow rounded-lg px-4 py-2">2</button>
<button className=" shadow  rounded-lg px-4  py-2">. . .</button>
<button className=" shadow rounded-lg px-4 py-2">19</button>
  </div>
  </section>

 
    </div>
)
}