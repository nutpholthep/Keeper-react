import React, { useState } from "react";

export default function InputArea({itemsData}) {
    const [title,setTitle] = useState("");
    const [note,setNote] = useState("");
    function addTitle(e){
        let textOftitle = e.target.value
        setTitle(textOftitle)
    }
    function addNote(e){
        let textOfNote = e.target.value
        setNote(textOfNote)
    }
  
    const items ={
        title:title,
        note:note
    }
  return (
    <div className=" rounded-lg px-7 py-10 drop-shadow-md text-5xl bg-white relative w-4/5 md:w-1/2">
      <form className="flex flex-col" onSubmit={(e)=>{
        e.preventDefault()
        itemsData(items)
        setNote("");
        setTitle("")
        }}>
        <input
          type="text"
          placeholder="Title"
          className="border-none outline-none"
          style={{ border: "none" }}
          onChange={addTitle}
          value={title}

        />
        <textarea
          name="text"
          id=""
          rows="3"
          placeholder="Take a note"
          className="text-3xl border-none outline-none resize-none"
          style={{ border: "none" }}
          onChange={addNote}
          value={note}
        ></textarea>
        <button className="bg-yellow-400 rounded-full text-2xl p-3 absolute right-0 bottom-0 z-40 transition-all delay-100 hover:scale-110 hover:bg-yellow-600 hover:text-yellow-50">Add</button>
      </form>
    </div>
  );
}
