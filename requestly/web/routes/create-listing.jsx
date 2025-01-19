import { useAction, useUser } from "@gadgetinc/react";
import { Suspense, useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router";
import "./create-listing.css"

export default function CreateListing() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState(true);
  const [free, setFree] = useState("");
  const [image, setImage] = useState(true);
  const [{ fetching: isLoading, error }, create] = useAction(api.listing.create, {
    select: { id: true, title: true, description: true, cost: true, free: true, image: true}
  });
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreateListingForm />
    </Suspense>
  );
}

function CreateListingForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState(true);
  const [free, setFree] = useState(true);
  const [image, setImage] = useState("");
  const [{ fetching: isLoading, error }, create] = useAction(api.listing.create);
  const user = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submissionData = {
        title,
        description,
        user: {_link: user.id},
        free
      }

      if (!free && cost.trim() !== "") {
        submissionData.cost = cost
      }
      if (image !== "") {
        submissionData.image = image;
      } 
      await create(submissionData);
      navigate("/listings");
    } catch (err) {
      // Error will be handled by the useAction hook
     
    }
  };

  return (
    <div className="create-listing">
 
      <h1>Create a Listing</h1>
      {error && (
        <div className="error-message">
          Error: {error.message || "An error occurred while creating the listing"}
        </div>
      )}
      <form onSubmit={handleSubmit} className="listing-form" noValidate>
        <label>
          <input
            type="text"
            class = "values"
            placeholder = "Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={80}
            required
            disabled={isLoading}
          />
        </label>
        <label>
          <textarea
            value={description}
            class = "values"
            placeholder = "Description"
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            maxLength={2000}
            required
            disabled={isLoading}
          ></textarea>
        </label>
        <div class = "sliderbox">
          <label class = "switch">
            <input
              type = "checkbox"
              checked={free}
              onChange={(e) => {
                setFree(e.target.checked);
                  if (e.target.checked) {
                    setCost("");
                  }
                }
              }
              disabled={isLoading}
              />
              <p class="slider"></p>
              <p class="sliderTxt">Free</p>
              <p class="sliderTxtAfter">Paid</p>
          </label>
        </div>
        {!free && (
        <label>
          <input 
            type = "number"
            class = "values"
            placeholder = "Cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            disabled={isLoading}
          />
        </label>
        )}
        <label>
          <input
            type = "text"
            class = "values"
            placeholder = "IMG URL"
            onChange={(e) => setImage(e.target.value)}
            />
        </label>
        <button 
          type="submit" 
          class = "submit"
          disabled={isLoading || !title || !description}
        >
          {isLoading ? "Submitting..." : "Create Listing"}
        </button>
      </form>
      <button 
        onClick={() => navigate(-1)} 
        className="back-button"
        disabled={isLoading}
      >
        ← Back
      </button>
    </div>
  );
}
