import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function ClarityLoader() {
    useEffect(()=> {
        const userShouldBeTracked = true;
        if(userShouldBeTracked){
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "lcjetzgzl1");
        }
    }, [])
    return null;
}


ReactDOM.render(
    <React.StrictMode>
        <ClarityLoader />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();