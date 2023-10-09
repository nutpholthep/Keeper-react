import Navbar from "./component/Navbar";
import "../public/styles.css";
import InputArea from "./component/InputArea";
import Items from "./component/Items";
import { useState } from "react";
function App() {
  let id = 0;
  const [items, setItems] = useState([]);
  function itemsData(data) {
    setItems((prevValue) => {
      return [...prevValue, data];
    });
  }
  function deleteItem(id) {
    setItems(prevValue=>prevValue.filter((list,index)=>index !== id))
  }
  return (
    <>
      <Navbar />
      <div className="mt-5 flex justify-center">
        <InputArea itemsData={itemsData} />
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-4 mx-9 my-10 gap-5">
        {items.map((data) => (
          <Items
            key={id}
            id={id++}
            title={data.title}
            content={data.note}
            fnDel={deleteItem}
          />
        ))}
      </div>
    </>
  );
}

export default App;
