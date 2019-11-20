import React, { useRef, useEffect, useLayoutEffect, useState} from "react";

const Component = () => {
  const canvasRef = useRef();
  
  const [random, setRandom] = useState(Math.random());

  // useLayoutEffect(() => {
  useEffect(() => {
    const canvas = canvasRef.current;
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 200, 200);
    ctx.fillRect(0 * 25, 25, 100, 100);
  });

  return <canvas onClick={() => setRandom(Math.random())} key={random} ref={canvasRef}></canvas>;
};

// --------------------- MAIN ---------------------

const Main = () => <Component />;

export default Main;
