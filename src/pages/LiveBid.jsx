import { useParams } from "react-router-dom";

const LiveBid = () => {
  let param = useParams();
  return (
    <>
      <h1>Home/ Auctions/ Live Auctions</h1>
      <h2>{param}</h2>
    </>
  );
};

export default LiveBid;