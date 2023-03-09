import React, { useState } from "react";

const ItemDetail = ({ item, userBids }) => {
  const [offerAmount, setOfferAmount] = useState("");

  const handleOfferChange = (e) => {
    // Check if the input value is not a number (NaN)
    if (isNaN(e.target.value) || e.target.value == "") {
      setOfferAmount("");
    } else setOfferAmount(parseInt(e.target.value));
    //test
    console.log(` input val: ${parseInt(e.target.value)}`);
  };

  const userBid = userBids.find((bid) => bid.itemID === item.id);

  //test
  console.log(`userbid.amount: ${userBid.amount}`);

  // Disable button if an offer is not higher than current bid
  const isOfferDisabled = offerAmount <= userBid.amount;

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.image} alt={item.name} />
      <br />
      <br />
      <time>Auction Open Date: {item.auctionOpenDate.toDateString()}</time>
      <p>Number of Offers: {item.numOffers}</p>
      <p>Offered by: {item.username}</p>

      <h2>Your Bid</h2>
      <p>Amount: {userBid.amount}</p>
      <p>Date: {userBid.date}</p>
      <input value={offerAmount} onChange={handleOfferChange} />
      <br />
      <button disabled={isOfferDisabled}>Make an Offer</button>
    </div>
  );
};

export default ItemDetail;
