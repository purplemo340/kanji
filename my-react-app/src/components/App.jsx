import React from "react";
import '../App.css'
function App(props) {
  return (
    <div>
     

      <dl className="dictionary">
        <div className="term">
          
          <dt className="kana">
            <span className="kanji">

              {props.kanji}

            </span>
            <span className="name">{props.name}</span>
          </dt>
          
        
          <div className="meaning">
          <dd >
            {props.mean}
          </dd>
          </div>
        </div>
        
      </dl>
    </div>
  );
}

export default App;
