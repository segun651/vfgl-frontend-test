import RatingsFrame from "../assets/images/Frame 189.png"
export default function Review(){
return (
    <div className="grid gap-4">
        <h1 className="font-semibold text-[28px]">Product Reviews</h1>

        <img src={RatingsFrame} alt="RatingsFrame" className="mx-auto w-full object-cover" />
    </div>
)
}