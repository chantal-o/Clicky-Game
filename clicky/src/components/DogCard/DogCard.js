import React from "react";
import "./style.css";

function DogCard(props) {
  return (
    <div className="card">
        
      <div className="img-container"
      
      value={props.id}
      onClick={() => props.handleClick(props.id)}
      >
          
        <img alt={props.name} src={props.image} />
      </div>
      
      
    </div>
  );
}

export default DogCard;

