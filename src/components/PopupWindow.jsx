import { Button, Link } from '@mui/material';
import React from 'react'
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import WindowTable from './WindowTable';


function PopupWindow({ children }) {

    const [open, setOpen] = useState();

    const RenderInWindow = (props) => {
        const [container, setContainer] = useState(null);
        const newWindow = useRef(window);
      
        useEffect(() => {
          const div = document.createElement("div");
          setContainer(div);
        }, []);
      
        useEffect(() => {
          if (container) {
            newWindow.current = window.open(
              "",
              "",
              "width=600,height=400,left=200,top=200",
            );
            newWindow.current.document.body.appendChild(container);
            const curWindow = newWindow.current;
            curWindow.onbeforeunload = () => setOpen(false);
            return () => curWindow.close();
          }
        }, [container]);
      
        return container && createPortal(props.children, container);
      };
      

    
  return (
    <>
    <Link onClick={() => setOpen(true)}>{ children }</Link>
    {open && <RenderInWindow><WindowTable/> <Button variant="outlined" onClick={() => setOpen(false)}>close</Button></RenderInWindow>}
  </>
  )
}

export default PopupWindow