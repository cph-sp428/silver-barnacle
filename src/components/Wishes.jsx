import { useEffect, useState } from "react";
import { fetchData } from "../util/persistence";
import WishList from "./WishList";
import WishForm from "./WishForm";

const emptyWish = {
  id: "",
  name: "",
  price: "",
  description: "",
  category: "",
  link: "",
};

function Wishes() {
  const [wishes, setWishes] = useState([]);
  const [wishToEdit, setWishToEdit] = useState({ ...emptyWish });
  const APIURL = "http://localhost:3000/api";

  useEffect(() => {
    getWishes();
  }, []);

  function getWishes() {
    fetchData(APIURL, (data) => setWishes(data));
  }

  function deleteWish(wish) {
    fetchData(`${APIURL}/${wish.id}`, () => {}, "DELETE");
    setWishes([...wishes.filter((w) => w.id != wish.id)]);
  }

  function editWish(wish) {
    if(wish.name === "" || wish.price=== "" || wish.description===""){
      setWishToEdit({...emptyWish});
      return;
    }
    if (wish.id === "") {
      fetchData(`${APIURL}`, (data) => {wish.id = data.id}, "POST", wish);
      setWishes([...wishes, wish]);
      setWishToEdit(emptyWish);
    } else {
      fetchData(`${APIURL}/${wish.id}`, () => {}, "PUT", wish);
      const updatedWishes = [
        ...wishes.map((w) =>
          w.id === wish.id ? wishToEdit : w
        ),
      ];
      setWishes([...updatedWishes]);
      setWishToEdit(emptyWish);
    }
  }

  return (
    <div id=".flex-parent-element">
      <WishList
        wishes={wishes}
        setWishToEdit={setWishToEdit}
        deleteWish={deleteWish}
      />
      <WishForm
        emptyWish={emptyWish}
        wishToEdit={wishToEdit}
        editWish={editWish}
      />
    </div>
  );
}

export default Wishes;
