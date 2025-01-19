import { useActionForm } from "@gadgetinc/react";
import { useFindMany } from "@gadgetinc/react";
import { api } from "../api";
import { useLocation } from "react-router";
import "./listings.css";
export default function() {
  const [{ data: listings, fetching, error }] = useFindMany(api.listing, {
    sort: { createdAt: "Descending" }
  });

  if (fetching) {
    return <div>Loading listings...</div>;
  }

  if (error) {
    return <div>Error loading listings: {error.message}</div>;
  }
  return (
    <div class="listingtotal">
      <div class="titlelistings">
        <h1>Listings</h1>
      </div>
      <div class="listingbox">
        {listings.map((listing) => (
          <div key={listing.id} class="listingtopic">
            <div class = "imagebox">
              <img class = "listingimage" src={listing.image} alt={listing.title} />
            </div>
            <div class = "listingdata">
              <h3 class = "listingtitle">{listing.title}</h3>
              <hr></hr>
              <p class = "listingdescription">{listing.description}</p>
              <hr></hr>
              <p class = "listingcost">${listing.free ? "Free" : listing.cost}</p>
              <div class = "butBox">
                <button class = "applybut" onClick="">Apply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}