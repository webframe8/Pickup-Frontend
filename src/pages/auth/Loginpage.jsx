import UseMeta from "../../hooks/UseMetaTags";
import MetaHead from "../../components/heads/MetaHead";
import ImageIcon from "../../components/Icons/ImageIcon";
import CustomImage from "../../components/Images/CustomImage";
import FormField from "../../components/Forms/FormField";
import Button from "../../components/Buttons/Button";
import { Link, useNavigate } from "react-router";
import { useState, useContext } from "react";
import SmartLogin from "../../components/SmartLogins/SmartLogin";
import { GradientText } from "../../components/Texts/GradientText";
import { useAlert } from "../../contexts/AlertContext";
import { useLoader } from "../../contexts/LoaderContext";
import { AuthContext } from "../../contexts/AuthContext";
import {
  USERNAME_REGEX,
  EMAIL_REGEX,
  PASSWORD_REGEX,
} from "../../../env.config";

{
  /** static Imaports */
}
import icon from "../../assets/images/icon.png";
import loginImage from "../../assets/images/instalogin.png";

export default function LoginPage() {
    const { showAlert } = useAlert();
  const [pageurl, setPageurl] = useState(window.location.href);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext)
    const { showProgresLoader, hideProgresLoader } = useLoader();
    const navigate = useNavigate();
  const Metadata = UseMeta(
    "Login - Pickup",
    "Login to your account and start marching whit friends",
    pageurl,
    "Pickup-dating-site"
  );

  {
    /** Validation */
  }
  const isEmail = EMAIL_REGEX.test(identifier);
  const isUsername = USERNAME_REGEX.test(identifier);

  const isValid = (isEmail || isUsername) && PASSWORD_REGEX.test(password);

  const handleSubmit = async (e) => {
        e.preventDefault();
        showProgresLoader();

        try{
            const response = await login(identifier, password);
            if (response?.error) {
                hideProgresLoader();
                showAlert({
                type: "error",
                message: response?.error || "Login failed",
            });
            }
             
            if (response?.success) {
                showAlert({
                    type: "success",
                    message: response.success
                })
                navigate('/dashboard');
            }
        }catch(err) {
            hideProgresLoader();
            const data = err?.response?.data;
            showAlert({
                type: "error",
                message: data?.error || "Login failed",
            });
        }
    }

  return (
    <>
      <MetaHead metadata={Metadata} />
      <section id="Auth">
        <section className="login-image_layout">
          <ImageIcon
            source={icon}
            imgaltText="sitelogo"
            style={{ width: "80px" }}
          />
          <h2>
            Find who meets your type under{" "}
            <GradientText
              angle={120}
              colors={[
                "#ffdd55",
                "#fb5246",
                "#fb5246",
                "#ffdd55",
                "#c837ab",
                "#c837ab",
              ]}
              children="one minute"
            />
          </h2>
          <div className="login-image">
            <CustomImage
              source={loginImage}
              altText="imagge of phone whit post and people"
            />
          </div>
        </section>

        <section className="form_layout">
          <form id="Form" onSubmit={handleSubmit}>
            <h2>
              Log into{" "}
              <GradientText
                angle="120"
                colors={[
                  "#ffdd55",
                  "#fb5246",
                  "#fb5246",
                  "#ffdd55",
                  "#c837ab",
                  "#c837ab",
                ]}
                children="Pickup"
              />
            </h2>{" "}
            <br />
            <FormField
              name="email"
              placeholder="Username or email"
              type="text"
              noLabel
              classname="input-group"
              onChange={(e) => setIdentifier(e.target.value)}
            />
            <FormField
              name="password"
              placeholder="Password"
              type="password"
              noLabel
              classname="input-group"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              children="Login"
              className="form-button"
              disabled={!isValid}
            />
            <div className="form_links">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <SmartLogin
              noTitle
              style={{ marginTop: "30px" }}
              linkClassName={"slink"}
            />
            <Button
              children="create new account"
              className="form-button"
              style={{
                backgroundColor: "transparent",
                border: "2px solid #3f6acd",
                color: "#3f6acd",
                marginTop: "0px",
                padding: "12px",
              }}
            />
          </form>
        </section>
      </section>
    </>
  );
}
