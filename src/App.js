import { Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import Login from "./components/Login";
import { Navbar } from "./components/Navbar";
import Signup from "./components/Signup";

const App = () => {
  const item = {
    id: 1,
    name: "Vintage Guitar",
    image: "https://example.com/guitar.jpg",
    auctionOpenDate: new Date("2023-03-15T18:30:00Z"),
    numOffers: 5,
    username: "guitarman123",
    description:
      "This is a vintage guitar from the 1960s. It's in excellent condition and has a beautiful sound.",
    startingPrice: 1000,
    minBidIncrement: 100,
    currentBid: 1500,
    endDate: "2023-03-20T18:30:00Z",
  };

  const userBids = [
    {
      itemID: 1,
      userID: 123,
      amount: 1500,
      date: "2023-03-18T12:30:00Z",
    },
    {
      itemID: 2,
      userID: 123,
      amount: 800,
      date: "2023-03-17T10:45:00Z",
    },
    {
      itemID: 3,
      userID: 789,
      amount: 300,
      date: "2023-03-16T16:00:00Z",
    },
  ];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="sign-up" element={<Signup />}></Route>
        <Route
          path="item-detail"
          element={<ItemDetail item={item} userBids={userBids} />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
