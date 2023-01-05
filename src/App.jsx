import { gsap } from "gsap";
// import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Cursor } from "./Cursor";
import "./index.css";

function App() {
   const title = useRef();
   const timeline = gsap.timeline({
      defaults: {
         opacity: 0,
      },
   });

   useLayoutEffect(() => {
      timeline
         .fromTo(
            ".hero-home_img",
            {
               scale: 2,
            },
            {
               opacity: 1,
               rotate: 360,
               scale: 1,
               duration: 1,
               filter: "drop-shadow(0 0 30px #00ffa4)",
               delay: 0.5,
            }
         )
         .to(".split-span", {
            y: 0,
            stagger: {
               each: 0.1,
            },
            opacity: 1,
         });
   }, []);
   return (
      <>
         {/* <div class="loader">cargando</div> */}
         <Cursor title={title} />
         <header />
         <main className="hero-home">
            <div className="max-width">
               <svg
                  className="hero-home_img"
                  width="596"
                  height="596"
                  viewBox="0 0 596 596"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <rect width="596" height="596" rx="193" fill="#71DAAE" />
                  <path
                     d="M430.963 340.199C427.617 331.433 423.462 323.877 418.523 317.556C413.571 311.236 408.264 306.416 402.578 303.099C396.903 299.793 391.731 298.134 387.074 298.134V292.952C392.013 292.952 397.111 291.511 402.357 288.641C407.603 285.771 412.395 281.461 416.77 275.697C421.133 269.945 424.7 262.753 427.47 254.12C430.227 245.486 431.612 235.569 431.612 224.357V222.201C431.612 198.335 424.479 180.003 410.213 167.192C395.959 154.405 375.725 148 349.533 148H233.799L233.848 148.242C210.059 148.702 191.699 155.192 178.916 167.822C165.631 180.947 159 200.2 159 225.592V371.682C159 397.073 165.631 416.411 178.916 429.658C191.724 442.444 210.096 448.995 233.946 449.455L233.811 450H349.533C376.607 450 397.786 443.461 413.069 430.372C428.352 417.295 436 399.096 436 375.799V370.192C436 358.98 434.321 348.99 430.975 340.212L430.963 340.199Z"
                     fill="#111822"
                  />
               </svg>

               <h1 ref={title} className="hero-home_title item-hover">
                  <span className="hero-home_title--split">
                     <span className="split-span">F</span>
                     <span className="split-span">L</span>
                     <span className="split-span">Y</span>
                  </span>
                  <span className="hero-home_title--split">
                     <span className="split-span">W</span>
                     <span className="split-span">I</span>
                     <span className="split-span">T</span>
                     <span className="split-span">H</span>
                  </span>
                  <span className="hero-home_title--split">
                     <span className="split-span">U</span>
                     <span className="split-span">S</span>
                  </span>
               </h1>
               {/* <article class="hero-home_info">
         <div class="hero-home_info--first">A turnkey experience for brands</div>
         <div class="hero-home_info--line"></div>
         <div class="hero-home_info--second">to command the next wave of the Web.</div>
      </article> */}
            </div>
         </main>
      </>
   );
}

export default App;
