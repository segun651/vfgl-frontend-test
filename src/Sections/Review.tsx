import RatingsAverage from "../assets/images/Frame 182.png"
import RatingsCount from "../assets/images/Frame 186.png"
import ReviewComments from "../Components/Review/ReviewComments"
export default function Review(){
return (
    <div className="grid gap-4">
        <h1 className="font-semibold text-[28px]">Product Reviews</h1>

      <div className="border-[0.8px] flex flex-wrap  md:flex-row mx-auto gap-4   justify-between border-dashed w-full h-fit py-10 px-7 rounded-lg">
  <img  src={RatingsAverage} alt="Average Stars Image" loading="lazy" className="md:basis-1/5"/>
  <img src={RatingsCount} className="object-contain md:basis-3/5" alt="Ratings Count" loading="lazy" />
      </div>

<ReviewComments />
     
    </div>
)
}