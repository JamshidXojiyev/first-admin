import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { useState } from "react";
import InputMask from "react-input-mask";
import MyInput from "../../../components/input/input";
import { AddContent } from "../../goods/products/add-product/add-product.s";

function ClientsDialog(props) {
  const [phone, setPhone] = useState("");

  return (
    <>
      <AddContent>
        <MyInput
          // error={phoneErr}
          width="510px"
          height="38px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="Search"
          border_radius="4px"
          title="Ф.И.О"
        />
      </AddContent>
      <AddContent>
        {/* <RadioButton
          width="76px"
          height="38px"
          onBg="#ebf7fc"
          offBg="#fcebeb"
          onColor="#03a9f4"
          offColor="#f44336"
        /> */}
        <FormControl component="fieldset">
          <RadioGroup row defaultValue="a">
            <FormControlLabel
              value="a"
              control={<Radio color="primary" />}
              label="Мужчина"
            />
            <FormControlLabel
              value="b"
              control={<Radio color="primary" />}
              label="Женшина"
            />
          </RadioGroup>
        </FormControl>
      </AddContent>
      <AddContent>
        <InputMask
          mask="+\9\98 (99) 999-99-99"
          maskChar="_"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        >
          {(inputProps) => (
            <MyInput
              width="510px"
              height="36px"
              color="#A4A6B3"
              activ="#3F4558"
              placeholder="+998 (__) ___-__-__"
              title="Номер телефона"
              border_color="#4B5B7A"
              font_size="12px"
              border_radius="4px"
            />
          )}
        </InputMask>
      </AddContent>
      <AddContent margin_bottom="0">
        <MyInput
          // error={phoneErr}
          multiline="true"
          rows="4"
          width="510px"
          // height="78px"
          color="#A4A6B3"
          activ="#3F4558"
          border_radius="4px"
          title="Примечание"
        />
      </AddContent>
    </>
  );
}

export default ClientsDialog;
