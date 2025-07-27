import RestrauntCard from "./RestrauntCard";
import { useState } from "react";
import resList from "../utils/mockData"

const Body = () => {
  let [listOfRestraunts, setListOfRestraunts] = useState(resList);



  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestraunts.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestraunts(filteredList);
          }}
        >
          Top Rated Restraunt
        </button>
      </div>
      <div className="res-container">
        {listOfRestraunts.map((restraunt) => (
          <RestrauntCard key={restraunt.info.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
