import React, { useState, useReducer } from "react";
import { reducer } from "./reducer";

const booksData = [
  { id: 1, name: "Lina haq" },
  { id: 2, name: "Fahinur" },
  { id: 3, name: "Dalia" },
];

const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};

const initialState = {
  books: booksData,
  isModalOpen: false,
  modalText: "",
};

export default function UseReducer() {
  const [booksState, dispatch] = useReducer(reducer, initialState);
  const [bookName, setBookName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: new Date().getTime().toString(), name: bookName };

    dispatch({ type: "ADD", payload: newBook });
    setBookName("");
  };
  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div>
      <h3> Books List</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>

      {booksState.isModalOpen && <Modal modalText={booksState.modalText} />}
      {booksState.books.map((book) => {
        const { id, name } = book;
        return (
          <li key={id}>
            {name}
            <button
              onClick={() => {
                removeBook(id);
              }}>
              Remove
            </button>
          </li>
        );
      })}
    </div>
  );
}

//books, modalText, isModalOpen
//add book - modalText
//remove book - modalText

//dispath a ja lika hoba sob sorasori reducer or const reducer ar action a chola jabe

// dispatch a jokon kicu pass korta hoy tokon payload ar maddomy pass korta hoy

//   const [books, setBooks] = useState(booksData);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalText, setModalText] = useState("");

// dispatch= প্রেরণ //দ্রুত সম্পাদন
