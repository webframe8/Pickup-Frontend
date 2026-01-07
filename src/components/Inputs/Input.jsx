import "../../assets/styles/Globalui.scss";
import { useState } from "react";
import Icon from "../Icons/Icon";

export default function Input({ type = "text", error, ...props }) {
  const [showPassword, setShowPassword] = useState(false); // 👈 hidden by default
  const isPassword = type === "password";

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <input
        className={`input ${error ? "error" : ""}`}
        type={isPassword && showPassword ? "text" : type}
        style={{
          paddingRight: isPassword ? "40px" : undefined,
        }}
        {...props}
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "inherit",
          }}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <Icon name="IoMdEyeOff" style={{width: "24px", height: "24px"}} /> : <Icon name="IoMdEye" style={{width: "24px", height: "24px"}} />}
        </button>
      )}
    </div>
  );
}
