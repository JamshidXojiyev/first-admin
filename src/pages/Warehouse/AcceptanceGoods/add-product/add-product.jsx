import React from "react";
import MyInput from "../../../../components/input/input";
import MySelect from "../../../../components/my-select/my-select";
import UniversalTable from "../../../../components/universal-table/universal-table";
import {
  FooterContent,
  FooterText,
  HeaderContent,
  ProductSum,
  Sum,
} from "./add-product.s";
import { ReactComponent as Delete } from "../../../../assets/delet.svg";
import MyButton from "../../../../components/button/button";
import { IconButton } from "@material-ui/core";

function AddProduct({ ...res }) {
  const TableData = {
    head: [
      "№",
      "Наименование товара",
      "Штрих код",
      "Ед-Изм.",
      "Остаток",
      "Кол-во",
      "Цена поступление",
      "Ндс",
      "Сумма",
      "",
    ],
    body: [
      {
        id: "1",
        name_product: "Напток Кока кола 1.5л Пет",
        barcode: "47194948984198",
        unit: "Шт",
        remainder: "187",
        qty: MyInput,
        price_admission: MyInput,
        vat: MySelect,
        sum: "9,000,000",
        delet: Delete,
      },
    ],
  };
  const dataOrder = [
    "id",
    "name_product",
    "barcode",
    "unit",
    "remainder",
    () => (
      <MyInput
        // error={phoneErr}
        padding_right="4px"
        font_size="12px"
        text_align="right"
        type="number"
        width="66px"
        height="20px"
        color="#A4A6B3"
        activ="#3F4558"
        border_color="#3F4558"
        placeholder="50"
        border_radius="4px"
        bg_color="#fff"
      />
    ),
    () => (
      <MyInput
        padding_right="4px"
        font_size="12px"
        type="number"
        text_align="right"
        // error={phoneErr}
        width="110px"
        height="20px"
        color="#A4A6B3"
        activ="#3F4558"
        placeholder="18,500"
        border_radius="4px"
        bg_color="#fff"
      />
    ),
    () => (
      <MySelect
        font_size="12px"
        width="86px"
        height="20px"
        border="1px solid #4B5B7A"
        activ_border="1px solid #3F4558"
        border_radius="4px"
        color="#A4A6B3"
        InputLabel=""
        onChange={(limit) => console.log(limit)}
        datas={["15%", "30%", "50%", "100%"]}
      />
    ),
    "sum",
    () => (
      <IconButton>
        <Delete />
      </IconButton>
    ),
  ];
  return (
    <>
      <HeaderContent>
        <MySelect
          input_title="Торговая точка"
          width="195px"
          height="36px"
          border="1px solid #4B5B7A"
          activ_border="1px solid #3F4558"
          border_radius="4px"
          color="#A4A6B3"
          InputLabel="Торговая точка"
          onChange={(limit) => console.log(limit)}
          datas={["qwerty", "qwerty", "qwerty"]}
        />
        <MyInput
          // error={phoneErr}
          title="Дата приема"
          width="195px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="Дата"
          border_radius="4px"
        />
        <MySelect
          input_title="Поставщик"
          width="195px"
          height="36px"
          border="1px solid #4B5B7A"
          activ_border="1px solid #3F4558"
          border_radius="4px"
          color="#A4A6B3"
          InputLabel="Выбрать"
          onChange={(limit) => console.log(limit)}
          datas={["qwerty", "qwerty", "qwerty"]}
        />
        <MyInput
          // error={phoneErr}
          title="На основание"
          width="195px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="Коментария"
          border_radius="4px"
        />
        <MySelect
          input_title="Способ оплаты"
          width="195px"
          height="36px"
          border="1px solid #4B5B7A"
          activ_border="1px solid #3F4558"
          border_radius="4px"
          color="#A4A6B3"
          InputLabel="Наличные"
          onChange={(limit) => console.log(limit)}
          datas={["qwerty", "qwerty", "qwerty"]}
        />
      </HeaderContent>
      <UniversalTable
        future={false}
        head={TableData.head}
        body={TableData.body}
        dataOrder={dataOrder}
        onLimitChange={(limit) => console.log(limit)}
      />
      <MyInput
        // error={phoneErr}
        width="320px"
        height="36px"
        color="#A4A6B3"
        activ="#3F4558"
        placeholder="Подбор товара..."
        border_radius="4px"
      />
      <FooterContent>
        <ProductSum>
          <Sum>ProductSum: 9,000,000 сум</Sum>
          <MyButton
            text="Сохранить"
            font_size="12px"
            bg="#3982FF"
            color="#fff"
            width="176px"
            height="38px"
            border_radius="4px"
            padding="10px"
          />
        </ProductSum>
        <FooterText>Производитель: OOO “Anor Systems”</FooterText>
      </FooterContent>
    </>
  );
}

export default AddProduct;
