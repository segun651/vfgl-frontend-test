import ArrowRight from "../../assets/images/arrow-right.png"

export default function Pagination(){

    return(
        <div className="flex flex-wrap gap-4 my-10 ">
  <div className="flex gap-4 font-medium text-xs">
    <li className="list-none">Homepage</li>
    <img src={ArrowRight} alt="Arrow" loading="lazy" />
  </div>
  <div className="flex gap-4 font-medium text-xs">
    <li className="list-none">Women</li>
    <img src={ArrowRight} alt="Arrow" loading="lazy" />
  </div>
  <div className="flex gap-4 font-medium text-xs">
    <li className="list-none">Women's Shirts & Tops</li>
    <img src={ArrowRight} alt="Arrow" loading="lazy" />
  </div>
  <div className="flex gap-4 font-medium text-xs">
    <li className="list-none">Long Sleeve Overshirt, Khaki, 6</li>
    
  </div>
        </div>
    )
}