import React, {Fragment, useEffect} from 'react'
import { useLocation } from "react-router";

const ScrollBarToTop = ({children}) => {

    const location = useLocation();
    useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default ScrollBarToTop
