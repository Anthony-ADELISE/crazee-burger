import LoginForm from "../components/login/LoginForm";
import Logo from "../reusable-ui/Logo";

export const Login = () => {
  return (
    <div className="loginPage">
      <Logo className="text-5xl md:text-7xl lg:text-9xl" />
      <LoginForm />
    </div>
  );
};
