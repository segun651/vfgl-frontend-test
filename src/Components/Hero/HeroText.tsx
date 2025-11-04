import heroImg from "../../assets/images/Frame 19.png"
export default function  HeroText(){

    return(
        <div className="flex flex-col gap-7 mb-8 pb-4">
  <section className="flex  flex-col gap-2">
    <p className="text-[16px] font-medium text-[#8F8F8F]">John Lewis ANYDAY</p>
 <h2 className="text-[36px] font-semibold text-[#292929]"> Long Sleeve Overshirt, Khaki, 6</h2>
 <div className="flex justify-between gap-3">
<div className="flex gap-3 ">
<p className="line-through text-[#8F8F8F]">£40.00</p>
<p>£28.00</p>
</div>
<div className="flex ">
<img src={heroImg} alt="heroimage" />
</div>
 </div>
  </section>

         <div className=" border-[0.5px] border-[#A3A3A3] border-dashed w-[90vw] mx-auto border-d">

         </div>

  <section className="flex  flex-col gap-2">
    <h2>Description</h2>
    <p>Boba etiam ut bulla tea est potus dilectus singulari compositione saporum et textuum, quae in Taiwan annis 1980 orta sunt. Boba refert ad pilas masticas tapiocas in fundo potus 
    inventas, quae typice lacte tea nigro sapiuntur. Boba phaenomenon. See More....</p>
  </section>


<section className="flex flex-col gap-2">
    <h2>Color:Royal Brown</h2>
    
    <div className="flex gap-2">
<button className="border rounded-lg border-black w-[75px] h-10 ">
    <p className="w-[63px] h-7 mx-auto rounded-md bg-[#534029]"></p>
</button>
<button className=" w-[75px] h-10  rounded-lg">
    <p className="w-[63px] h-7 mx-auto rounded-md bg-[#EBEBEB]"></p>
</button>
<button className="w-[75px] h-10  rounded-lg ">
    <p className="w-[63px] h-7 mx-auto rounded-md bg-[#3A6A90]"></p>
</button>
<button className="w-[75px] h-10  rounded-lg">
    <p className="w-[63px] h-7 mx-auto rounded-md bg-[#11171D]"></p>
</button>
    </div>
</section>

<section className="flex flex-col gap-2">
<div className="flex justify-between">
<p>Size: <span className="font-semibold"> 8</span></p>
<p className="text-[#525252] underline">View Size Chart</p>
</div>
<div className="flex justify-between flex-wrap"> 
<button className="w-[75px] text-center font-semibold  h-10 border rounded-lg">
6
</button>
<button className="w-[75px] text-center font-semibold  h-10 border rounded-lg   bg-[#E6E6E6]">
8
</button>
<button className="w-[75px] text-center font-semibold  h-10 border rounded-lg">
10
</button>
<button className="w-[75px] text-center font-semibold  h-10 border rounded-lg">
14
</button>
<button className="w-[75px] text-center font-semibold  h-10 border rounded-lg   ">
18
</button>
<button className="w-[75px] text-center font-semibold  h-10 border rounded-lg ">
20
</button>
</div>
</section>

<section className="flex flex-wrap justify-between">
 <button className="basis-[60%] text-center bg-[#141414] py-2 text-white  px-8 rounded-lg">
Add To Cart
 </button>
 <button className="basis-[35%] text-center bg-[#FFFFFF] py-3 px-7.5 border rounded-lg">
Checkout
 </button>
</section>

<button className="text-[#7A7A7A] underline text-[16px] text-start">Delivery T&C</button>
        </div>
    )
}