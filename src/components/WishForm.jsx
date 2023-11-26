import { useState, useEffect } from "react";

function WishForm({ emptyWish, wishToEdit, editWish }) {
  const [wish, setWish] = useState({ ...wishToEdit });

  useEffect(() => {
    setWish({ ...wishToEdit });
  }, [wishToEdit]);

  function handleChange(event) {
    const name = event.target.id;
    const value = event.target.value;
    setWish({ ...wish, [name]: value });
  }

  return (
    <div id="flex-child-element">
      <div className="wish-form">
        <h1>Add / Edit</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            editWish(wish);
          }}
        >
          <label htmlFor="id">Id</label>
          <input
            id="id"
            type="number"
            readOnly
            placeholder="id"
            value={wish.id}
            onChange={handleChange}
          />
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="name"
            value={wish.name}
            onChange={handleChange}
          />
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            min="1"
            max="100000"
            placeholder="price"
            value={wish.price}
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            placeholder="description"
            value={wish.description}
            onChange={handleChange}
          />
          <label htmlFor="category">Category</label>
          <input
            id="category"
            type="text"
            placeholder="category"
            value={wish.category}
            onChange={handleChange}
          />
          <label htmlFor="link">Link</label>
          <input
            id="link"
            type="text"
            placeholder="link"
            value={wish.link}
            onChange={handleChange}
          />
          <button>Submit</button>
          <button onClick={() => setWish({ ...emptyWish })}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default WishForm;
