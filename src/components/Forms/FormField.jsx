import Input from "../Inputs/Input";

export default function FormField({ label, name, error, classname, noLabel=false, ...props }) {
  return (
    <div className={`Form-field ${classname}`}>
      <label htmlFor={name}>{label}</label> {noLabel ? null : <br /> }
      <Input id={name} name={name} error={error} {...props} />
      {error && <small className="error-message">{error}</small>}
    </div>
  );
}
