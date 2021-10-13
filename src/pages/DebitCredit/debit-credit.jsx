import { Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import MyButton from "../../components/button/button";
import MyDialog from "../../components/dialog/my-dialog";
import MyInput from "../../components/input/input";
import UniversalTable from "../../components/universal-table/universal-table";
import { SearchBlock } from "../goods/products/products.s";
import { MyTab, ProductsInfo, ProductsSum } from "./debit-credit.s";
import DebitCewditDialog from "./dialog-camponent/debit-cewdit-dialog";

function DebitCredit(props) {
  const [handleChange, setHandleChange] = useState(0);
  const [open, setOpen] = useState(false);
  const TableData = {
    head: ["№", "Клиент", "Телефон", "Долг"],
    body: [
      {
        id: "1",
        vendor_code: "Муроджон Турсунов",
        name: "+998 (99) 436-46-15",
        quantity: "-152,000",
      },
      {
        id: "2",
        vendor_code: "Курашбой Эркулов",
        name: "+998 (99) 436-46-15",
        quantity: "-74,800",
      },
      {
        id: "3",
        vendor_code: "Элбек Нематов",
        name: "+998 (99) 436-46-15",
        quantity: "-1,487,000",
      },
      {
        id: "4",
        vendor_code: "Достон Рузиев",
        name: "+998 (99) 436-46-15",
        quantity: "48,300",
      },
    ],
  };
  const dataOrder = [
    "id",
    "vendor_code",
    "name",
    "quantity",
  ];
  return (
    <>
      <SearchBlock>
        <div>
          <MyTab square>
            <Tabs
              value={handleChange}
              indicatorColor="primary"
              textColor="primary"
              onChange={(e, newValue) => setHandleChange(newValue)}
              aria-label="disabled tabs example"
            >
              <Tab label="Клиенты" />
              <Tab label="Поставшики" />
            </Tabs>
          </MyTab>
          <MyInput
            // error={phoneErr}
            width="320px"
            height="38px"
            color="#A4A6B3"
            activ="#3F4558"
            placeholder="Search"
            border_radius="4px"
          />
        </div>
        <ProductsInfo>
          <ProductsSum>
            Баланс: <span>15.699.500</span>
          </ProductsSum>
          <MyButton
            text="Оплатить"
            font_size="12px"
            bg="#3982FF"
            color="#fff"
            width="180px"
            height="38px"
            // icon={<AddProductSVG />}
            border_radius="4px"
            padding="10px"
            click={() => {
              setOpen(!open);
            }}
          />
          <MyDialog
            isOpen={open}
            onClose={() => setOpen(false)}
            title="Оплатить"
            content={<DebitCewditDialog />}
          />
        </ProductsInfo>
      </SearchBlock>
      <UniversalTable
        future={false}
        head={TableData.head}
        body={TableData.body}
        dataOrder={dataOrder}
        onLimitChange={(limit) => console.log(limit)}
        // page="1"
      />
    </>
  );
}

export default DebitCredit;
