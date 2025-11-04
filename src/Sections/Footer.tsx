 import NavImage from "../assets/images/image 16.png"
 import Facebook from "../assets/images/Facebook.png"
 import Instagram from "../assets/images/Instagram.png"
 import X from "../assets/images/X.png"
 import Email from "../assets/images/Email.png"
 import Flag from "../assets/images/Flags.png"
 import ChevronDown from "../assets/images/chevron-down.png"
export default function Footer(){

    return(
        <div className="w-full bg-[#F2F2F2] px-8  md:px-18 pt-18">
        <div className=" flex  justify-between  flex-wrap flex-col md:flex-row mb-7">
<div className="basis-1/5 grid gap-2">
 <img src={NavImage} alt="Nav Image" loading="lazy" className="mb-8" />
 <div className="flex">
    <input type="email" placeholder="Get latest offers to your inbox" className="font-medium w-full md:w-74.5 outline-none border-b-[0.5px] placeholder-[#787A7C] py-2" />
    <button className="bg-[#141414] text-white rounded-lg py-2 px-[25px] text-xl">{">"}</button>
 </div>
 <div className="flex gap-2 py-2">
 <img src={Facebook} alt="Facebook" loading="lazy"  />
  <img src={Instagram} alt="Instagram" loading="lazy"  />
   <img src={X} alt="X" loading="lazy" />
    <img src={Email} alt="Email" loading="lazy" />
 </div>
</div>

<div className="basis-3/5 grid grid-cols-2 md:grid-cols-3 gap-3">
<div className="grid gap-2 font-normal text-sm">
<h1 className="py-2 font-semibold ">Shop</h1>
<a>My account</a>
<a>Login</a>
<a>Wishlist</a>
<a>Cart</a>
</div>
<div className="grid gap-2 font-normal text-sm">
<h1 className="py-2 font-semibold ">Information</h1>
<a>Shopping Policy</a>
<a>Returns & Refunds</a>
<a>Cookies Policy</a>
<a>Frequently asked</a>
</div>
<div className="grid gap-2 font-normal text-sm">
<h1 className="py-2 font-semibold ">Company</h1>
<a>About us</a>
<a>Privacy Policy</a>
<a>Terms & Conditions</a>
<a>Contact Us</a>
</div>
</div>
        </div>

        <div className="border border-[#A3A3A3]   border-dashed w-[90vw] mx-auto border-d mt-16 mb-4">
         </div>
         <div className="flex  flex-wrap justify-between gap-4">
            <p className="font-normal text-[#3E3E59] text-[14px]">© John Lewis plc 2001 - 2024</p>
            <div className="flex  gap-4  w-full md:w-[inherit] justify-end  md:gap-9">
      <div className="flex gap-1">
         <img src={Flag} alt="Flag" loading="lazy" />
         <p className="font-medium text-sm">English</p>
         <img src={ChevronDown} alt="Chevron Down" loading="lazy" />
      </div>
      <div className="flex gap-1">
     
         <p className="font-medium text-sm">USD</p>
         <img src={ChevronDown} alt="Chevron Down" loading="lazy" />
      </div>
            </div>
         </div>
        </div>
    )
}