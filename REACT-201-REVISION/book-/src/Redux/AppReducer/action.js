import * as types from "./actionTypes"
import axios from "axios"



const getBooks=(payload)=>(dispatch)=>{
    console.log(payload)
    dispatch({type:types.GET_BOOKS_REQUEST})
    return axios
    .get("http://localhost:8080/books",payload)
    .then((r)=>{
        dispatch({type:types.GET_BOOKS_SUCCESS,payload:r.data})
        console.log(r.data)
    })
    .catch((e)=>{
dispatch({type:types.GET_BOOKS_FAILURE,payload:e})

    })
}


const updateBook=(id,payload)=>(dispatch)=>{
dispatch({type:types.UPDATE_BOOKS_REQUEST})
return axios
.patch(`http://localhost:8080/books/${id}`,payload)
.then((r)=>{
    dispatch({type:types.UPDATE_BOOKS_SUCCESS,payload:r.data})
})
.catch((e)=>{
    dispatch({type:types.UPDATE_BOOKS_FAILURE,payload:e})

})
}

export {getBooks,updateBook}


    // "id": 1,
    // "no_of_chapters": 6,
    // "author": "Masal",
    // "cover_photo": "https://i.pinimg.com/564x/f7/c8/12/f7c812c9b0296cd9f119e33a06d9a256.jpg",
    // "book_name": "Full-Stack Web Development",
    // "category": "Technical",
    // "release_year": 2019,