import React from "react";
import HogTile from "./Hogtile";

const HogList =  ({hogs, toggleHideHog}) => {
    return (
        <div>
            {hogs.map((hog)=> (
                <div>
                    key={hog.name}
                    <HogTile hog={hog} toggleHideHog={toggleHideHog}/>
                </div>
            ))}
        </div>
    )
}

export default HogList ;