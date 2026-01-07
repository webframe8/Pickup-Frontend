export default function ProgressLoader({
  className,
  style,
  angle = 135,
  colors = [],
  ...props
}) {
  const gradient = `linear-gradient(${angle}deg, ${colors.join(", ")})`;

  return (
    <>
      <style>{`
        .loader::after{
        background: ${gradient};
        }
        `}</style>
      <section
        className={`loader ${className}`}
        style={{ ...style }}
        {...props}
      ></section>
    </>
  );
}
