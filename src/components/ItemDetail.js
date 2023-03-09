import React, { useState } from "react";

const ItemDetail = ({ item, userBids }) => {
  const [offerAmount, setOfferAmount] = useState("");

  const handleOfferChange = (e) => {
    setOfferAmount(parseInt(e.target.value));
  };

  const userBid = userBids.find((bid) => bid.itemID === item.id);

  // Disable button if an offer is not higher than current bid
  const isOfferDisabled = offerAmount <= userBid;

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.image} alt={item.name} />
      <br />
      <br />
      <time>Auction Open Date: {item.auctionOpenDate.toDateString()}</time>
      <p>Number of Offers: {item.numOffers}</p>
      <p>Offered by: {item.username}</p>
      {userBid && (
        <div>
          <h2>Your Bid</h2>
          <p>Amount: {userBid.amount}</p>
          <p>Date: {userBid.date}</p>
          <input type="submit" value={offerAmount} />
          <button onClick={handleOfferChange} disabled={isOfferDisabled}>
            {" "}
            Make an Offer{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
