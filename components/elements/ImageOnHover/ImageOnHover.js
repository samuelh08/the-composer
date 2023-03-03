import { useEffect, useState } from "react";

import { Box } from "@mui/material";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y:0 })

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY})
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    }
  }, [])

  return mousePosition
}

const ImageOnHover = ({id, images=[], text, size, ...props}) => {

  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [zIndex, setZindex] = useState(0);
  const [bounding, setBounding] = useState(null);
  const [imageBox, setImageBox] = useState(null);

  const {x, y} = useMousePosition();

  const inStyle = {
    backgroundImage: `url(${images[index].src})`,
    height: images[index].height,
    width: images[index].width,
    zIndex: zIndex,
    position: "absolute",
    transform: `translate(${opacity !== 0 ? (x - bounding.left - (images[index].width / 2) + "px") : "-50%"}, ${opacity !== 0 ? (y - imageBox.offsetHeight + "px") : "-100%"})`,
    boxSizing: "border-box",
    opacity: opacity
  }

  useEffect(() => {
    const bound = document.querySelector(".bound");
    let bounds = bound.getBoundingClientRect();
    const cursor = document.querySelector(".cursor-move");

    setImageBox(cursor);
    setBounding(bounds);
  }, [])


  return (
    <Box 
      display="flex"
      id={id}
      style={{ 
        position: "relative",
        padding: "0 auto",
        width: "100%",
        minHeight: "100%",
        alignItems: "center",
        boxSizin: "boder-box"
      }}
    >
      <Box
        display="inlineBlock"
        onMouseLeave={() => {setIndex(index === (images.length - 1) ? 0 : (index + 1)); setOpacity(0)}}
        onMouseEnter={() => setOpacity(1)}
        sx={{zIndex: "50", mixBlendMode: "difference", cursor: "default"}}
        className="bound"
      >
        {props.children}
      </Box>
      <Box className="cursor-move" style={inStyle}></Box>
    </Box>
  )
}

export default ImageOnHover;