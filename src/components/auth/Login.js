import Back from "../../styling/Back";
import Input from "../../styling/Input";
import Button from "../../styling/Button";

const Login = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submission prevented");
  };
  return (
    <form onSubmit={onSubmit}>
      <Input label = "Notendanfn:" />
      <Input label = "Notendanfn:" />
      <Button label = "Innskrá" button = "button" />
      <Back />
    </form>
  );
};

export default Login;
