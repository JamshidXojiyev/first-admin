import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useHistory } from "react-router";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

function Login(props) {
  const [phone_number, set_phone_number] = useState("");
  const [password, set_password] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [tostText, setTostText] = useState("Formani to'ldir");
  const history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem("token");
    if (user) {
      history.push("/");
    }
  }, [phone_number]);
  const authenticate = (e) => {
    e.preventDefault();
    login &&
      axios
        .post("http://89.223.71.112:8585/signIn", {
          login: phone_number
            .replace(/[-_()]/g, "")
            .replace(/ /g, "")
            .substring(
              4,
              phone_number.replace(/[-_()]/g, "").replace(/ /g, "").length
            ),
          password: password,
        })
        .then((res) => {
          console.log(res);
          history.push("/home");
          localStorage.setItem("token", JSON.stringify(res.data.data.token));
        })
        .catch((err) => {
          setOpen(true);
          setTostText("Parolingizni qaytadan tekshirib kiriting");
        });
  };
  return (
    <LoginContent>
      <Form onSubmit={authenticate}>
        <Brand fon="#fff" src={BrandURL} />
        <BrandName>Admin Panel</BrandName>
        <FirstInfo>Log In to Admin Panel</FirstInfo>
        <SecondInfo>Enter your phone number and password below</SecondInfo>
        <InputBlock>
          <InputMask
            mask="+\9\98 (99) 999-99-99"
            maskChar="_"
            value={phone_number}
            onChange={(e) => set_phone_number(e.target.value)}
          >
            {(propsPhone) => (
              <MyInput
                error={phoneErr}
                width="320px"
                height="38px"
                color={phoneErr ? "#f44336" : "#9FA2B4"}
                activ="#3F4558"
                bg_color="#FCFDFE"
                placeholder="Enter your phone number"
                font_size="14px"
                title="PHONE NUMBER"
                border_radius="4px"
              />
            )}
          </InputMask>
        </InputBlock>
        <InputBlock>
          <MyInput
            error={passwordErr}
            width="100%"
            height="48px"
            color="#9FA2B4"
            activ="#3F4558"
            bg_color="#FCFDFE"
            placeholder="Enter your password"
            font_size="14px"
            title="PASSWORD"
            border_radius="4px"
            onChange={(e) => set_password(e.target.value)}
          />
        </InputBlock>
        <InputBlock>
          <MyButton
            type="submit"
            text="Log In"
            font_size="14px"
            bg="#3751FF"
            color="#fff"
            width="100%"
            height="48px"
            border_radius="8px"
            padding="16px 0"
            click={() => {
              if (
                phone_number
                  .replace(/[-_()]/g, "")
                  .replace(/ /g, "")
                  .substring(
                    4,
                    phone_number.replace(/[-_()]/g, "").replace(/ /g, "")
                  ).length < 9 &&
                password.length < 8
              ) {
                setPhoneErr(true);
                setPasswordErr(true);
                setOpen(true);
              } else if (
                phone_number
                  .replace(/[-_()]/g, "")
                  .replace(/ /g, "")
                  .substring(
                    4,
                    phone_number.replace(/[-_()]/g, "").replace(/ /g, "")
                  ).length < 9
              ) {
                setPhoneErr(true);
                setOpen(true);
                setTostText("Telefon raqamni kiritishingiz shart");
              } else if (password.length < 6) {
                setPasswordErr(true);
                setOpen(true);
                setTostText(
                  "Parol eng kamida 8 ta belgidan iborat bo`lishi shart"
                );
              } else {
                setLogin(true);
              }
            }}
          />
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={() => setOpen(false)}
          >
            <Alert onClose={() => setOpen(false)} severity="error">
              {tostText}
            </Alert>
          </Snackbar>
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
