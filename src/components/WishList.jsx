function WishList({ wishes, setWishToEdit, deleteWish }) {
  return (
    <div id="flex-child-element">
      <div className="wish-list">
        <h1>Chirstmas Wishes</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Link</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {wishes.map((wish) => (
              <tr key={wish.id}>
                <td>{wish.id}</td>
                <td>{wish.name}</td>
                <td>{wish.price}</td>
                <td>{wish.description}</td>
                <td>{wish.category}</td>
                <td>
                  <a href={wish.link}>{wish.link}</a>
                </td>
                <td>
                  <button onClick={() => setWishToEdit(wish)}>Edit</button>
                  <button onClick={() => deleteWish(wish)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WishList;
