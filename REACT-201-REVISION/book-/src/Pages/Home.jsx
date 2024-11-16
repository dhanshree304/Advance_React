


import { FilterComp } from "../Components/FilterComp"
import { BookList } from "../Components/BookList"



const Home = () =>{
    return (
        <div style={{display:"flex",gap:"30px"}}>
         <FilterComp/>
      <BookList/>

</div>

      

        
    )
}

export {Home}