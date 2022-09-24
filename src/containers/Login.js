import styled from "styled-components";
import LoginForm from "../components/login/LoginForm";

const LoginBlock = styled.div`
  background: var(--light-gray);
  height: 100vh;
  width: 100%;
`

const Login = () => {
  return (
    <LoginBlock>
      <LoginForm />
    </LoginBlock>
  )
}

export default Login;