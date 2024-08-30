import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import OfferCard from "../../../components/frontOffice/OfferCard/OfferCard";

import "./Offers.css";

function Offers() {
  const offerData = useLoaderData();

  return (
    <>
      <div className="offer-list-title">
        <h2 className="style-title-h2">Toutes les offres</h2>
      </div>
      <section className="offer-ul">
        {offerData.map((offer) => (
          <OfferCard offer={offer} key={offer.id} showStar />
        ))}
      </section>
      <ToastContainer />
    </>
  );
}

export default Offers;
