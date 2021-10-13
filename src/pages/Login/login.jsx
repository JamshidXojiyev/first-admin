import React, { useState } from "react";
import BrandURL from "../../assets/brand.png";
import MyButton from "../../components/button/button";
import InputMask from "react-input-mask";
import {
  Brand,
  BrandName,
  DontAccount,
  FirstInfo,
  Form,
  InputBlock,
  InputLabel,
  LoginContent,
  SecondInfo,
  SignUpText,
} from "./login.s";
import MyInput from "../../components/input/input";

function Login(props) {
  const [phone_number, set_phone_number] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);
  const [otp, set_otp] = useState("");
  const [otpErr, setOtpErr] = useState(false);
  return (
    <LoginContent>
      <Form>
        <Brand fon="#fff" src={BrandURL} />
        <BrandName>Admin Panel</BrandName>
        <FirstInfo>Log In to Admin Panel</FirstInfo>
        <SecondInfo>Enter your phone number and password below</SecondInfo>
        <InputBlock>
          <InputLabel> PHONE NUMBER </InputLabel>
          <InputMask
            mask="+\9\98 (99) 999-99-99"
            maskChar="_"
            value={phone_number}
            onChange={(e) => set_phone_number(e.target.value)}
          >
            {(inputProps) => (
              <MyInput
                error={phoneErr}
                width="100%"
                height="42px"
                color="#F0F1F7"
                activ="#3751ff"
                placeholder="Enter your phone number"
              />
            )}
          </InputMask>
        </InputBlock>
        <InputBlock>
          <InputLabel> PASSWORD </InputLabel>
          <InputMask
            // mask="9 9 9 9 9 9 9"
            // maskChar="#"
            value={otp}
            onChange={(e) => set_otp(e.target.value)}
            //   disabled={step !== "phone"}
          >
            {(inputProps) => (
              <MyInput
                error={phoneErr}
                width="100%"
                height="42px"
                color="#F0F1F7"
                activ="#3751ff"
                placeholder="Enter your password"
              />
            )}
          </InputMask>
        </InputBlock>
        <InputBlock>
          <MyButton
            text="Log In"
            bg="#3751FF"
            color="#fff"
            width="100%"
            height="48px"
          />
        </InputBlock>
        <DontAccount>
          Don’t have an account?
          <SignUpText>Sign up</SignUpText>
        </DontAccount>
      </Form>
    </LoginContent>
  );
}

export default Login;
