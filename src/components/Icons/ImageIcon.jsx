import CustomImage from "../Images/CustomImage";
import '../../assets/styles/Globalui.scss';
import React from "react";

/**
 * @param {object} props
 * @param {React.CSSProperties} [props.imageStyle]
 * @returns 
 */

export default function ImageIcon({
  source,
  imgaltText,
  imageStyle,
  ...props
}) {
  return(
   <>
    <span className="image-icon" {...props}>
    <CustomImage source={source} altText={imgaltText} imageStyle={imageStyle} />
   </span>
   </>
  );
}
