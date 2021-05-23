import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { LoginImage } from "../../assets/images/index";
import "./index.scss";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className="container">
        <LoginImage />
        <h1>SofaScore user</h1>
        <button className="btn" onClick={loginWithRedirect}>
          Login / SignUp
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .container {
    margin-top:30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-top:1.5rem;
    margin-bottom: 1.5rem;
  }
 
`;

export default Login;
