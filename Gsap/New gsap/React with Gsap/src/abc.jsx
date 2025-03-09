import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const boxRef = useRef();

  useGSAP(() => {
    gsap.from(boxRef.current, {
      rotate: 360,
      delay: 1.3,
      duration: 3,
    });
  });

  return (
    <main>
      <div className="container">
        <div className="circle"></div>
        <div ref={boxRef} className="box"></div>
      </div>
      {/* Other elements */}
    </main>
  );
};

export default App;
