import React, {useState} from "react";

const HogTile = ({hog, toggleHideHog}) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="hog-tile">
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.name} onClick={() => setShowDetails(!showDetails)}/>

            {showDetails && (
               <div>
                <p>Specialty: {hog.specialty} </p>
                <p>Weight: {hog.weight} lbs</p>
                <p>Greased: {hog.greased ? "Yes" : "No"}</p>
                <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
               </div>
            )}


            <button onClick={()=> toggleHideHog(hog.name)}>Hide Dog</button>

        </div>      
    )

}

export default HogTile ;