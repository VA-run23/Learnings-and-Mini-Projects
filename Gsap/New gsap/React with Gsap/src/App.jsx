//React does not allow a single ref to be attached to multiple elements.
//If you want to apply GSAP animations to multiple elements, you should create a separate ref for each element.
//the ref will only refer to the last element it’s attached to The previous references will be overwritten.

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { Bounce } from "gsap";

const App = () => {
  //   // const boxRef1 = useRef();
  //   // const boxRef2 = useRef();

  //   // const circRef = useRef();

  //   // useGSAP(() => {
  //   //   let tl = gsap.timeline();
  //   //   tl.from(".circle", {
  //   //     stagger: {
  //   //       amount: 1,
  //   //       from: "top right",
  //   //     },
  //   //     rotate: 720,
  //   //     delay: 1,
  //   //     duration: 1,
  //   //     scale: 1.2,
  //   //     yoyo: true,
  //   //     scrub: 3,
  //   //     repeat: -1,
  //   //   });
  //   // tl.to(circRef.current, {
  //   //   rotate: 360,
  //   //   delay: -0.3,
  //   //   duration: 3,
  //   //   scale: 1.2,
  //   // });
  //   // });

  //   let container = useRef();
  //   useGSAP(
  //     () => {
  //       gsap.from(".box", {
  //         rotate: 360,
  //         scale: 0,
  //         duration: 1,
  //         delay: 0.3,
  //       });
  //     },
  //     { scope: container }
  //   );

  //   return (
  //     <main>
  //       <div className="container" ref={container}>
  //         <div className="circle"></div>
  //         <div className="box"></div>
  //       </div>
  //       <div className="kuch">
  //         <div className="circle"></div>
  //         <div className="box"></div>
  //       </div>
  //     </main>
  //   );
  // };

  // export default App;
  const [xValue, setxValue] = useState(200);
  const random = gsap.utils.random(-500, 500, 10);
  const [rotate, setrotate] = useState(0);
  const rotate_ = gsap.utils.random(-360, 360, 30);

  let circRef = useRef();
  useGSAP(
    () => {
      gsap.to(circRef.current, {
        x: xValue,
        duration: 0.5,
        scrub: 5,
        ease: Bounce,
        rotate: rotate,
      });
    },

    { scope: "main", dependencies: [xValue, rotate] }
  );
  return (
    <main>
      <button
        onClick={() => {
          setxValue(random); //here the set function get the random value and sets it in the value of useState variable, then we have to use the value from that variable set by set function
          setrotate(rotate_);
        }}
      >
        Animate
      </button>
      <div ref={circRef} className="circle"></div>
    </main>
  );
};
export default App;
