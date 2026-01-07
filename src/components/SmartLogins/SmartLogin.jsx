import SmartLoginOption from "./SmartLoginOption";
import "../../assets/styles/Globalui.scss";
import React from "react";
/**
 * @param {object} props
 * @param {React.CSSProperties} [props.style]
 * @param {React.CSSProperties} [props.linkStyle]
 * @returns
 */

export default function SmartLogin({
  noLabel = false,
  noTitle = false,
  style,
  linkStyle,
  className = '',
  linkClassName,
  ...props
}) {
  return (
    <section
      className={`smartlogin_layout ${className}`}
      style={{ ...style }}
      {...props}
    >
      {noTitle ? null : (
        <div className="subtitle">
          <span></span> <small>or continue with</small> <span></span>
        </div>
      )}
      <div className="smartlink-card">
        <SmartLoginOption
          icon={"FcGoogle"}
          label={"Continue with Google"}
          noLabel={noLabel}
          className={linkClassName}
          style={linkStyle}
        />

        <SmartLoginOption
          icon={"BsGithub"}
          label={"Continue with Github"}
          noLabel={noLabel}
          className={linkClassName}
          style={linkStyle}
          disabled
        />

        <SmartLoginOption
          icon={"LuScanFace"}
          label={"Continue with Aob"}
          noLabel={noLabel}
          className={linkClassName}
          style={linkStyle}
          disabled
        />
      </div>
    </section>
  );
}
