import React, { useEffect, useState } from "react";
import { SuppliersContent } from "./suppliers.s";
import { SearchBlock } from "../../goods/products/products.s";
import { ReactComponent as SeeComponent } from "../../../assets/table-icon/more.svg";
import { ReactComponent as AddProductSVG } from "../../../assets/table-icon/add-product.svg";
import { IconButton } from "@material-ui/core";
import MyInput from "../../../components/input/input";
import MyButton from "../../../components/button/button";
import MyDialog from "../../../components/dialog/my-dialog";
import UniversalTable from "../../../components/universal-table/universal-table";
import AddProduct from "./add-product/add-product";
import axios from "axios";
import { useHistory } from "react-router";

function Suppliers(props) {
  const [dialogData, setDialogData] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [respons, setRespons] = useState([]);
  
  const [TableData, setTableData] = useState({
    head: [
      <SeeComponent />,
      "Поставшик",
      "Называние фирма",
      "Договор №",
      "Торговая точка",
      "Агент",
      "Номер телефона",
    ],
    body: [],
  });
  
  const dataOrder = [
    (item) => (
      <IconButton
        onClick={(e) => {
          setDialogData(item);
          setDialogOpen(true);
        }}
      >
        {/* <IconButton> */}
        <SeeComponent />
      </IconButton>
    ),
    "full_name",
    "contact_info",
    "contract",
    "warehouse",
    "agent",
    "phone",
  ];

  useEffect(() => {
    axios
      .get("http://89.223.71.112:8585/supplier", {
        headers: {
          Authorization: localStorage
            .getItem("token")
            .substring(1, localStorage.getItem("token").length - 1),
          Warehouse: "2",
        },
      })
      .then((res) => {
        setRespons(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dialogOpen]);

  useEffect(() => {
    const tableTada = respons.map((d) => {
      const tableTest = {
        id: d.id,
        SeeComponent,
        full_name: d.full_name,
        contact_info: d.contact_info,
        contract: d.contract,
        warehouse: "Чилонзор 21",
        agent: d.agent,
        phone: `+998 (${d.phone.substring(0, 2)}) ${d.phone.substring(
          2,
          5
        )}-${d.phone.substring(5, 7)}-${d.phone.substring(7, 9)}`,
      };
      return tableTest;
    });
    setTableData({ ...TableData, body: tableTada });
  }, [respons]);

  return (
    <SuppliersContent>
      <SearchBlock>
        <MyInput
          // error={phoneErr}
          width="530px"
          height="38px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="Search"
          border_radius="4px"
        />
        <MyButton
          text="Новый поставшик"
          font_size="12px"
          bg="#3982FF"
          color="#fff"
          width=""
          height="38px"
          border_radius="4px"
          padding="12px 28px"
          click={() => {
            setDialogOpen(!dialogOpen);
          }}
        />
        <MyDialog
          isOpen={dialogOpen}
          onClose={() => {
            setDialogOpen(false);
            setDialogData([]);
          }}
          title="Новый поставшик"
          content={
            <AddProduct
              data={dialogData}
              onCloseDialog={(e) => setDialogOpen(false)}
            />
          }
        />
      </SearchBlock>
      <UniversalTable
        future={false}
        head={TableData.head}
        body={TableData.body}
        dataOrder={dataOrder}
        onLimitChange={(limit) => console.log(limit)}
        // page="1"
      />
    </SuppliersContent>
  );
}

export default Suppliers;
