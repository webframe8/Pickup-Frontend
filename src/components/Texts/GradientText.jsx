import '../../assets/styles/Globalui.scss'

export function GradientText({ colors = [], angle = 135, children, ...props }) {
    const gradient = `linear-gradient(${angle}deg, ${colors.join(", ")})`;
    return (
    <p
      style={{
        background: gradient,
        color: "transparent",
        backgroundClip: "text",
        margin: "0px",
        display: "inline",
      }}
      {...props}
    >{children}</p>
  );
}