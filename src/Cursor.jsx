import { useEffect, useRef } from "react";
import CursorElement from "./utils/cursor";

export const Cursor = ({ title }) => {
   const mouse = useRef();

   useEffect(() => {
      window.onload = () => {
         const cursor = new CursorElement(mouse.current);
      };
   }, [mouse]);

   return <div ref={mouse} className="cursor-ctn"></div>;
};
