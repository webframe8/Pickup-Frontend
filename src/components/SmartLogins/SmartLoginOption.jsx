import Icon from "../Icons/Icon";

export default function SmartLoginOption({
  icon,
  label,
  onClick,
  disabled = false,
  noLabel = false,
  className,
  style,
  ...props
}) {
  return (
    <span
      className={`smart-login-option ${
        disabled ? "disabled-card" : ""
      } ${className}`}
      onClick={disabled ? null : onClick}
      {...props}
      title={label}
      style={{ ...style }}
    >
      <Icon name={icon} size={24} className="smart-login-icon" />
      {noLabel ? null : <small>{label}</small>}
      <style>{`
            .disabled-card{
            display: none !important;
            }
            `}</style>
    </span>
  );
}
