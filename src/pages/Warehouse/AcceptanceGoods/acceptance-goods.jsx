import React, { useState } from "react";
import MyButton from "../../../components/button/button";
import MyDialog from "../../../components/dialog/my-dialog";
import MyInput from "../../../components/input/input";
import UniversalTable from "../../../components/universal-table/universal-table";
import { SearchBlock } from "../../goods/products/products.s";
import { ReactComponent as AddProductSVG } from "../../../assets/table-icon/add-product.svg";
import { ReactComponent as SeeComponent } from "../../../assets/table-icon/more.svg";
import { SuppliersContent } from "../Suppliers/suppliers.s";
import { IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";

function AcceptanceGoods(props) {
  const TableData = {
    head: [
      <SeeComponent />,
      "Поставшик",
      "Называние фирма",
      "Договор №",
      "Торговая точка",
      "Сотрудник",
      "Номер телефона",
      "Статус",
    ],
    body: [
      {
        SeeComponent,
        vendor_code: "Кока-кола",
        name: "OOO Coca Cola Bottlers",
        quantity: "1A-659/1",
        unit_of_measurement: "Чилонзор 21",
        warehouse: "Бехзод Умаров",
        price_receipt: "+998 (99) 436-46-15",
        price: "Активный",
      },
      {
        SeeComponent,
        vendor_code: "Кока-кола",
        name: "OOO Coca Cola Bottlers",
        quantity: "1A-659/1",
        unit_of_measurement: "Чилонзор 21",
        warehouse: "Бехзод Умаров",
        price_receipt: "+998 (99) 436-46-15",
        price: "Активный",
      },
      {
        SeeComponent,
        vendor_code: "Кока-кола",
        name: "OOO Coca Cola Bottlers",
        quantity: "1A-659/1",
        unit_of_measurement: "Чилонзор 21",
        warehouse: "Бехзод Умаров",
        price_receipt: "+998 (99) 436-46-15",
        price: "Активный",
      },
      {
        SeeComponent,
        vendor_code: "Кока-кола",
        name: "OOO Coca Cola Bottlers",
        quantity: "1A-659/1",
        unit_of_measurement: "Чилонзор 21",
        warehouse: "Бехзод Умаров",
        price_receipt: "+998 (99) 436-46-15",
        price: "Активный",
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
  //   const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <SuppliersContent>
      <SearchBlock>
        <MyInput
          // error={phoneErr}
          width="530px"
          height="38px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="Поиск по таблице"
          border_radius="4px"
        />
        <MyButton
          text="Новый поступление"
          font_size="12px"
          bg="#3982FF"
          color="#fff"
          width=""
          height="38px"
          icon={<AddProductSVG />}
          border_radius="4px"
          padding="10px"
          button
          as={NavLink}
          exact
          to={"/warehouse/acceptance-goods-product" || "/"}
        />
      </SearchBlock>
      <UniversalTable
        head={TableData.head}
        body={TableData.body}
        dataOrder={dataOrder}
        onLimitChange={(limit) => console.log(limit)}
        // page="1"
      />
    </SuppliersContent>
  );
}

export default AcceptanceGoods;
