import React from "react";
import MyButton from "../../../components/button/button";
import MyInput from "../../../components/input/input";
import MySelect from "../../../components/my-select/my-select";
import {
  AddContent,
  LabelName,
} from "../../goods/products/add-product/add-product.s";

function DebitCewditDialog(props) {
  return (
    <>
      <AddContent>
        <LabelName>Торговая точка</LabelName>
        <LabelName>Главная точка</LabelName>
      </AddContent>
      <AddContent>
        <MySelect
          input_title="Способ оплаты"
          width="225px"
          height="36px"
          border="1px solid #4B5B7A"
          activ_border="1px solid #3F4558"
          border_radius="4px"
          color="#A4A6B3"
          InputLabel="Наличные"
          onChange={(limit) => console.log(limit)}
          datas={["Qwerty", "Qwerty2", "Qwerty3"]}
        />
        <MySelect
          input_title="Тип оплаты"
          width="225px"
          height="36px"
          border="1px solid #4B5B7A"
          activ_border="1px solid #3F4558"
          border_radius="4px"
          color="#A4A6B3"
          InputLabel="Расход"
          onChange={(limit) => console.log(limit)}
          datas={["Qwerty", "Qwerty2", "Qwerty3"]}
        />
      </AddContent>
      <AddContent>
        <MyInput
          // error={phoneErr}
          width="510px"
          height="38px"
          color="#A4A6B3"
          activ="#3F4558"
          title="Сумма"
          border_radius="4px"
        />
      </AddContent>
      <AddContent margin_bottom="0">
        <LabelName></LabelName>
        <MyButton
          text="Сохранить"
          font_size="12px"
          bg="#3982FF"
          color="#fff"
          width="195px"
          height="38px"
          border_radius="4px"
          padding="10px"
          // click={() => {
          //   setDialogOpen(!dialogOpen);
          // }}
        />
      </AddContent>
    </>
  );
}

export default DebitCewditDialog;
