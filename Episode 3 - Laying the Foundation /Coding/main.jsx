import React from "react";
import ReactDOM from "react-dom/client";

const style={
        color: "blue"
};

// Episode 3

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
const h1= React.createElement("h1",{style},"Create Multiple Heading use React Element");
const h2= React.createElement("h2",{},"Heading 2");
const h3= React.createElement("h3",{},"Heading 3");
const reactelement = React.createElement("div",{className:"ReactEleHaead"},[h1,h2,h3]);

// Create the same element using JSX

const JXSMultipleHeading = (
<div className="JXS">
        <h1 style={style}>Create Multiple Heading use JSX</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
</div>);

const FunComponent1 =()=>{
        return(
                <div>
                        <h1 style={style}>Functional Component</h1>
                        <h3>Arrow Function</h3>
                        <p>Allways Start Functional component in capital letter is best Pratic!</p>
                        
                </div>
        );
};

const FunComponent2 =function(){
        return(
                <div>
                        <h1 style={style}>Functional Component</h1>
                        <h3>Regular function Function</h3>
                </div>
        );
};

const Body=()=>{
        return(
                <div>
                        {/*It is component composition.it mean to put the component inside the component*/}
                        {reactelement}{/*  use {} put inside any javaScript;  */}
                        {JXSMultipleHeading}
                        <FunComponent1/>
                        <FunComponent2></FunComponent2> {/*Two way to use Functional commponent in JSX */}

                </div>
        );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body/>);
