import { useEffect, useState } from "react";

import { Typography, Box } from "@mui/material";

import Image from "next/image";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y:0 })

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({x: e.clientX, y: e.clientY})
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

  const {x, y} = useMousePosition();

  // const [inBounds, setInBounds] = useState(false)

  const inStyle = {
    backgroundImage: `url(${images[index].src})`,
    height: images[index].height,
    width: images[index].width,
    zIndex: zIndex,
    position: "absolute",
    transform: `translate(${opacity !== 0 ? (x - images[index].width + "px") : "-50%"}, ${opacity !== 0 ? (y - images[index].height + "px") : "-100 %"})`,
    boxSizing: "border-box",
    opacity: opacity
  }

  useEffect(() => {
    console.log(index)
  }, [index])

  /* useEffect(() => {
    const cursor = document.querySelector(".cursor-move");
    const parent = document.getElementById(id);

    const addAttribute = () => {
      cursor.style.opacity = 1
      parent.addEventListener("mousemove", positionElement);
      console.log("Add Attribute")
    }
    
    const deleteAttribute = () => {
      cursor.style.opacity = 0
      cursor.style.courser = "auto"
      console.log("Delete Attribute")
      window.removeEventListener("mouseleave", deleteAttribute);
    }

    const positionElement = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      let bounds = parent.getBoundingClientRect();
      const cursorx = mouseX - bounds.left - (cursor.offsetWidth / 2);
      const cursory = mouseY - bounds.top - (cursor.offsetHeight / 2);

      if (bounds.top < mouseY && mouseY < bounds.bottom) {
        cursor.style.opacity = 1
        console.log("in bounds")
      } else {
        deleteAttribute()
        if (images.length > 1) {
          const tempIndex = images.findIndex(object => {
            return object.src === images[index].src;
          });
          setIndex(tempIndex === images.length - 1 ? 0 : tempIndex + 1)
        }
        cursor.style.opacity = 0
        window.removeEventListener("mousemove", positionElement);
      }

      cursor.style.left = `${cursorx}px`;
      cursor.style.top = `${cursory}px`;
    }

    parent.addEventListener("mouseenter", addAttribute);
    parent.addEventListener("mouseleave", deleteAttribute);

    return () => {
      window.removeEventListener("mousemove", positionElement);
      window.removeEventListener("mouseenter", addAttribute);
    };
  }, []) */

  return (
    <Box 
      display="flex"
      id={id}
      style={{ 
        position: "relative",
        padding: "0 auto",
        width: "100%",
        alignItems: "center",
        boxSizin: "boder-box"
      }}
    >
      <Box
        display="inlineBlock"
        onMouseLeave={() => {setIndex(index === (images.length - 1) ? 0 : (index + 1)); setOpacity(0)}}
        onMouseEnter={() => setOpacity(1)}
        sx={{zIndex: "50", mixBlendMode: "difference", cursor: 'default'}}
      >
        <Typography
          variant="h1"
        >
          SERVICES
        </Typography>
      </Box>
      <Box className="cursor-move" style={inStyle}></Box>
    </Box>
  )
}

export default ImageOnHover;