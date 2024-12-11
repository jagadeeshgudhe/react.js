import React from 'react';
import ReactDom from 'react-dom';
function App(){
    return(
        <div>
            <h1>Hai this is jagadeesh</h1>
            <p>this is rendering</p>
        </div>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App/>);


