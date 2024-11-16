import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, updateBook } from "../Redux/AppReducer/action";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams(); //url madhun jya ghosti ithe direct ghyaychya ahet tya direct ghayv lagta ithe
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const data= useSelector((state)=>state.AppReduecr.data)

  const handleUpdate = () => {
    const payload = {
      book_name: bookName,
      author: bookAuthor,
    };
    dispatch(updateBook(id, payload)) //url madhlya id,payload nusar data dya getBook req kara
      .then((r) => {
        dispatch(getBooks());
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div>
      <input value={bookName} onChange={(e) => setBookName(e.target.value)} />
      <input
        value={bookAuthor}
        onChange={(e) => setBookAuthor(e.target.value)}
      />
      <button onClick={handleUpdate}>UPDATE</button>
    </div>
  );
};

export { Edit };
