import React from "react";
import { useWishlist } from "react-use-wishlist";
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
const  WislistBtn = ({ mehsul }) => {
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();
  const toggleWishlist = (item) => {
    if (inWishlist(item.id)) {
      removeWishlistItem(item.id);
    } else {
      addWishlistItem(item);
    }
  };
  return (
    <>
      <button onClick={() => toggleWishlist(mehsul)}>
        {inWishlist(mehsul.id) ? <IoMdHeart /> : <IoMdHeartEmpty  /> }
      </button>
    </>
  );
};

export default WislistBtn;
