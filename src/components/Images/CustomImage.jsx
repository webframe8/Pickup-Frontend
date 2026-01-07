import "../../assets/styles/Globalui.scss";

export default function CustomImage({
  source,
  altText,
  contentFit = "cover",
  imageStyle = {},
  ...props
}) {
  return (
    <img
      className="custom-image"
      src={source}
      alt={altText}
      style={{
        objectFit: contentFit,
        ...imageStyle,
      }}
      {...props}
    />
  );
}
