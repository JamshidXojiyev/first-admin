import React, { useState } from "react";
import MyButton from "../../../components/button/button";
import MyDialog from "../../../components/dialog/my-dialog";
import MyInput from "../../../components/input/input";
import UniversalTable from "../../../components/universal-table/universal-table";
import { ReactComponent as SeeComponent } from "../../../assets/table-icon/more.svg";
import { ReactComponent as AddProductSVG } from "../../../assets/table-icon/add-product.svg";
import { SearchBlock } from "./products.s";
import AddProduct from "./add-product/add-product";
import { IconButton } from "@material-ui/core";

function Products(props) {
  const TableData = {
    head: [
      <SeeComponent />,
      "Артикул",
      "Наименование",
      "Кол-во",
      "Единица измерения",
      "Склад",
      "Цена поступление",
      "Цена",
    ],
    body: [
      {
        SeeComponent,
        vendor_code: "156600",
        name: "Творог 15% Наманган",
        quantity: "328",
        unit_of_measurement: "кг",
        warehouse: "Основной Склад",
        price_receipt: "15.875,00",
        price: "17.000,00",
      },
      {
        SeeComponent,
        vendor_code: "156600",
        name: "Творог 15% Наманган",
        quantity: "328",
        unit_of_measurement: "кг",
        warehouse: "Основной Склад",
        price_receipt: "15.875,00",
        price: "17.000,00",
      },
      {
        SeeComponent,
        vendor_code: "156600",
        name: "Творог 15% Наманган",
        quantity: "328",
        unit_of_measurement: "кг",
        warehouse: "Основной Склад",
        price_receipt: "15.875,00",
        price: "17.000,00",
      },
      {
        SeeComponent,
        vendor_code: "156600",
        name: "Творог 15% Наманган",
        quantity: "328",
        unit_of_measurement: "кг",
        warehouse: "Основной Склад",
        price_receipt: "15.875,00",
        price: "17.000,00",
      },
    ],
  };
  const dataOrder = [
    () => (
      <IconButton onClick={console.log("asd")}>
        <SeeComponent />
      </IconButton>
    ),
    "vendor_code",
    "name",
    "quantity",
    "unit_of_measurement",
    "warehouse",
    "price_receipt",
    "price",
  ];
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <>
      <SearchBlock>
        <div>
          <MyInput
            // error={phoneErr}
            width="320px"
            height="38px"
            color="#A4A6B3"
            activ="#3F4558"
            placeholder="Search"
            border_radius="4px"
          />
          <MyInput
            // error={phoneErr}
            width="120px"
            height="38px"
            color="#A4A6B3"
            activ="#3F4558"
            border_radius="4px"
            placeholder="Filter"
          />
        </div>
        <MyButton
          text="Создать товар"
          font_size="12px"
          bg="#3982FF"
          color="#fff"
          width=""
          height="38px"
          icon={<AddProductSVG />}
          border_radius="4px"
          padding="10px"
          click={() => {
            setDialogOpen(!dialogOpen);
          }}
        />
        <MyDialog
          isOpen={dialogOpen}
          onClose={() => setDialogOpen(false)}
          title="Свойства товара"
          content={<AddProduct />}
        />
      </SearchBlock>
      <UniversalTable
        head={TableData.head}
        body={TableData.body}
        dataOrder={dataOrder}
        onLimitChange={(limit) => console.log(limit)}
        // page="1"
      />
    </>
  );
}

export default Products;
