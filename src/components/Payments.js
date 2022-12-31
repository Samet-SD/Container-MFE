import { launch } from "payments/Payments";
import React, { useRef, useEffect } from 'react';
// the useEffect hook is gonna make sure we can run code just one single time when this component is first displayed
export default () => {
    const ref = useRef(null);
    //the const ref is getting a reference to the html element that is being displayed on the screen
    // Now we need to take that element ref and provide it to the launch function, so we only try to call the launch function one time 
    
    useEffect(() => {
        launch(ref.current);
        //that is the reference to the HTML Element, we are passing it into the launch function, launch takes it and its 
        //gonna try to create an instance of Payments and render it into the div down there
        // The Code is really good because it is pretty much fully reusable
        //We can use the exact same approach with just about any other framework 
        //that we ever use inside of a child application as long as that framework can render itself or render its app into some arbitrary HTML-Element,
        //so, it should definitly work with angular or view. Es wird sich also nichts verändern wenn wir die Payments App zu vue ändern, wir müssen diesen code
        //hier nicht anpassen um es kompatibel zu machen!
    });
    
    return <div ref={ref} />
};

//We use useRef to create a reference to an HTML element, this is gonna be the element that we try to render our launch or Payments into.