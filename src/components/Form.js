import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(1);

  function HandleSubmit(e) {
    e.preventDefault(); //to avoid reload of page while submitting

    if (!description) return; //if the description is empty then wont submit

    const newItem = { description, count, packed: false, id: Date.now() };

    onAddItems(newItem); //this is the argument that will be passed into the handleAddItems function

    setDescription(""); //after adding the item we want description to be empty again
    setCount(1); //and count to reset back to 1
  }
  return (
    <form className="add-form" onSubmit={HandleSubmit}>
      {/*here we could have used onClick instead of onSubmit, but that would save the form only when we will click on Add button but onSubmit also works with enter key*/}

      <h3>What do you need for your trip?</h3>
      <select value={count} onChange={(e) => setCount(Number(e.target.value))}>
        {/*count is in string by default so we convert it*/}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
