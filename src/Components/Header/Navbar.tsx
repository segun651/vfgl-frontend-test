
import Image16 from "../../assets/images/image 16.png"
import Search from "../../assets/images/Search.png"
import CartIcon from "../../assets/images/Cart icon.png"
import NavIcon from "../../assets/images/Nev.png"

export default function Navbar(){

    return(
        <>
         <nav className="navbar-sm flex flex-wrap align-middle justify-between m-10 ">
   
 <img src={Image16} alt="Nav Image" loading="lazy" />
   

   <div className="gap-2 flex ">
<img src={Search} alt="Nav Image" loading="lazy" />
<img src={CartIcon} alt="Nav Image" loading="lazy" />
<img src={NavIcon} alt="Nav Image" loading="lazy" />


   </div>

         </nav>

         <div className="border-[0.5px] border-[#A3A3A3] border-dashed w-[90vw] mx-auto border-d">

         </div>
        </>
       
    )
}