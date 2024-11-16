import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getBooks } from "../Redux/AppReducer/action";

import { BookCard } from "../Components/BookCard";
import { useLocation, useSearchParams } from "react-router-dom";

const BookList = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const data = useSelector((state) => state.AppReducer.data);
  const location=useLocation()
  console.log(searchParams)

  useEffect(() => {
    if(location || data.length===0){
      const sortBy = searchParams.getAll("sortBy");
      let getBooksParams ={
        params:{category:searchParams.getAll("category"),
          _sort:sortBy && "release_year",
          _order:sortBy

        }
      }
      dispatch(getBooks(getBooksParams))
    }
  }, [location.search]);

 
//aani ithe ata as function write karaych ki filter aani sort nusar ch data UI la show hoil.

  return (
    <div>
      

      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px",border:"1px solid green"}}>
        {data.map((singleBook) => (
          <BookCard key={singleBook.id} {...singleBook} />
        ))}
      </div>
    </div>
  );
};

export { BookList };
