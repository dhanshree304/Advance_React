import { Link } from "react-router-dom"


const BookCard=(singleBook)=>{
  
    return(
        
        <div style={{border:"1px solid black"}}>
<img src="https://i.pinimg.com/564x/f7/c8/12/f7c812c9b0296cd9f119e33a06d9a256.jpg" alt="singleBook.book_name" width="200px"/>
<h4>{singleBook.book_name}</h4>
<p>{singleBook.author}</p>
<p>{singleBook.category}</p>
<p>{singleBook.release_year}</p>
<div>
</div>
<Link to={`/edit/${singleBook.id}`}><button>Edit</button></Link>
<Link to={`/singlePage/${singleBook.id}`}><button>SinglePage</button></Link>

        </div>
       
    )
}

export {BookCard}

