import Header from "./Sections/Header"
import Head from "./Sections/Head"
import Hero from "./Sections/Hero"
import Related from "./Sections/Related"
import Review from "./Sections/Review"
function App() {
 return(
  <>
  <Head />
  <div className="w-[90vw] mx-auto">
<Header />
<Hero />
<Related/>
<Review />
  </div>
  </>
 )
}

export default App
