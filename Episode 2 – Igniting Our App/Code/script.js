import React from "react";
import ReactDOM from "react-dom/client"

const h=React.createElement("h1",{},"Namestae react!");
const h1=React.createElement("h1",{},"heading 1");
const h2=React.createElement("h1",{},"heading 2");
 const div=React.createElement("section",{id:"hi"},[h1,h2]);
        // const h1=React.createElement("h1",{ id:"jiei",class:"sss" },"Namestaew react!");
const root=ReactDOM.createRoot(document.getElementById("root"));

        // root.render(h1);
root.render(h);// overwrite all thiks inside
root.render(div);
