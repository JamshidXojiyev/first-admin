import React, { useState } from "react";
import MyInput from "../../../../components/input/input";
import MySelect from "../../../../components/my-select/my-select";
import InputMask from "react-input-mask";
import { AddContent, LabelName } from "../../../goods/products/add-product/add-product.s";
import MyButton from "../../../../components/button/button";

function AddProduct(props) {
  const [phone, setPhone] = useState("");
  return (
    <div>
      <AddContent>
        <MyInput
          width="225px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="Кока кола"
          title="Поставшик"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
        />
        <MyInput
          width="225px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="OOO Coca cola Bottlers"
          title="Называние фирма"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
        />
      </AddContent>
      <AddContent>
        <MyInput
          width="225px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="1B-213/1"
          title="Договор №"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
        />
        <MyInput
          width="225px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="Муроджон Турсунов"
          title="Сотрудник"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
        />
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
              width="225px"
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
        <MySelect
          input_title="Торговая точка"
          width="225px"
          height="36px"
          border="1px solid #4B5B7A"
          activ_border="1px solid #3F4558"
          border_radius="4px"
          color="#A4A6B3"
          InputLabel=""
          onChange={(limit) => console.log(limit)}
          datas={["Qwerty", "Qwerty2", "Qwerty3"]}
        />
      </AddContent>
      <AddContent margin_bottom="0">
        <LabelName></LabelName>
        <MyButton
          text="Создать товар"
          font_size="12px"
          bg="#3982FF"
          color="#fff"
          width=""
          height="38px"
        //   icon={<AddProductSVG />}
          border_radius="4px"
          padding="10px"
        //   click={() => {
        //     setDialogOpen(!dialogOpen);
        //   }}
        />
      </AddContent>
    </div>
  );
}

export default AddProduct;
