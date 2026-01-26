import React, { useState, useEffect, useRef } from "react";
import "./TypingMaster.css";

const TypingMaster = () => {
  const textRef = useRef(null);
  const highlighterRef = useRef(null);
  const displayRef = useRef(null);
  const caretRef = useRef(null);
  const handCanvasRef = useRef(null);
  const handImgRef = useRef(null);
  const sourceRef = useRef("Type this text for practice."); // you can change

  const [textFromTA, setTextFromTA] = useState("");
  const [count, setCount] = useState(-1);
  const [caretInterval, setCaretInterval] = useState(null);

  const keyColors = {
    keya01: "rgb(255, 153, 153)",
    keyb01: "rgb(134, 211, 255)",
    keyc01: "rgb(68, 255, 78)",
    keyd01: "rgb(255, 212, 70)",
    llkey01: "rgb(255,255,255)",
  };
  const bgcolor = "rgb(255,50,50)";

  // Handle key press count
  useEffect(() => {
    const handleKeyDown = () => setCount((prev) => prev + 1);
    const handleKeyUp = () => {
      animateCaret();
      setTextFromTA((prev) => prev + textRef.current.value);
      textRef.current.value = "";
      designKeyBoard();
      highlightText();
      caretRef.current.style.visibility = "visible";
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // On component load
  useEffect(() => {
    const text = textRef.current;
    const highlighter = highlighterRef.current;
    const display = displayRef.current;

    highlighter.style.height = getComputedStyle(display).height;
    highlighter.style.width = getComputedStyle(display).width;
    text.style.height = getComputedStyle(display).height;
    text.style.width = getComputedStyle(display).width;
    designKeyBoard();
    drawCanvas();
    highlightText();
  }, []);

  const animateCaret = () => {
    if (caretInterval) clearInterval(caretInterval);
    const interval = setInterval(() => {
      if (caretRef.current.style.visibility === "hidden") {
        caretRef.current.style.visibility = "visible";
      } else {
        caretRef.current.style.visibility = "hidden";
      }
    }, 500);
    setCaretInterval(interval);
  };

  const highlightText = () => {
    let txt = "";
    const sourceText = sourceRef.current;
    let i;
    for (i = 0; i < textFromTA.length; i++) {
      if (textFromTA[i] === sourceText[i]) {
        txt += `<span class="correcttxt01">${sourceText[i]}</span>`;
      } else {
        txt += `<span class="wrongtxt01">${sourceText[i]}</span>`;
      }
    }
    if (i < sourceText.length) {
      txt += `<span id="caret01"></span>`;
      txt += sourceText.slice(i);
    }
    highlighterRef.current.innerHTML = txt;
  };

  const designKeyBoard = () => {
    Object.keys(keyColors).forEach((cls) => {
      document.querySelectorAll(`.${cls}`).forEach(
        (el) => (el.style.backgroundColor = keyColors[cls])
      );
    });
  };

  const drawCanvas = (ch) => {
    const canvas = handCanvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = handImgRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, 300, 200);
    // Draw key highlight (simplified)
    if (!ch) return;
    ctx.beginPath();
    ctx.fillStyle = keyColors.keya01;
    ctx.arc(50, 50, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "red";
    ctx.stroke();
  };

  return (
    <div className="typingmasterbody01">
      <div className="center">
        <div ref={displayRef} className="display01"></div>
        <textarea
          ref={textRef}
          id="text01"
          className="text01"
          placeholder="Start typing..."
        ></textarea>
        <div ref={highlighterRef} id="highlighter01" className="highlighter01"></div>
        <span id="caret01" ref={caretRef}></span>
      </div>
      <canvas ref={handCanvasRef} id="handContainer01" width={300} height={200}></canvas>
      <img ref={handImgRef} id="handImg01" src="hand.png" alt="hand" style={{ display: "none" }} />
    </div>
  );
};

export default TypingMaster;
