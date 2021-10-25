import React, { useEffect, useState } from "react";
import MyInput from "../../../../components/input/input";
import InputMask from "react-input-mask";
import {
  AddContent,
  LabelName,
} from "../../../goods/products/add-product/add-product.s";
import MyButton from "../../../../components/button/button";
import axios from "axios";
import { useHistory } from "react-router";
import { Form } from "./add-product.s";

function AddProduct({ data }) {
  const [full_name, set_full_name] = useState("");
  const [contract, set_contract] = useState("");
  const [agent, set_agent] = useState("");
  const [phone, set_phone] = useState(data.phone);
  const [contact_info, set_contact_info] = useState("");
  const history = useHistory();

  const authenticate = async (e) => {
    e.preventDefault();
    if (data.length == 0) {
      // Create suplier
      axios
        .post(
          "http://89.223.71.112:8585/supplier",
          {
            full_name: full_name,
            type: 1,
            contract: contract,
            phone: phone
              .replace(/[-_()]/g, "")
              .replace(/ /g, "")
              .substring(
                4,
                phone.replace(/[-_()]/g, "").replace(/ /g, "").length
              ),
            contact_info: contact_info,
            agent: agent,
          },
          {
            headers: {
              Authorization: localStorage
                .getItem("token")
                .substring(1, localStorage.getItem("token").length - 1),
              Warehouse: "2",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // Edit suplier
      axios
        .post(
          "http://89.223.71.112:8585/supplier",
          {
            full_name: data.full_name,
            type: 1,
            contract: data.contract,
            phone: data.phone
              .replace(/[-_()]/g, "")
              .replace(/ /g, "")
              .substring(
                4,
                phone.replace(/[-_()]/g, "").replace(/ /g, "").length
              ),
            contact_info: contact_info,
            agent: data.agent,
            id: data.id,
          },
          {
            headers: {
              Authorization: localStorage
                .getItem("token")
                .substring(1, localStorage.getItem("token").length - 1),
              Warehouse: "2",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // Delete supplier
  const deleteSupplier = () => {
    console.log(data.id);
    axios
      .post(
        "http://89.223.71.112:8585/deleteSupplier",
        {
          id: data.id,
        },
        {
          headers: {
            Authorization: localStorage
              .getItem("token")
              .substring(1, localStorage.getItem("token").length - 1),
            Warehouse: "2",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(data.length);

  return (
    <Form onSubmit={authenticate}>
      <AddContent>
        <MyInput
          defaultValue={data.full_name}
          width="225px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="Кока кола"
          title="Поставшик"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
          onChange={(e) => set_full_name(e.target.value)}
        />
        <MyInput
          defaultValue={data.contact_info}
          width="225px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="OOO Coca cola Bottlers"
          title="Называние фирма"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
          onChange={(e) => set_contact_info(e.target.value)}
        />
      </AddContent>
      <AddContent>
        <MyInput
          defaultValue={data.agent}
          width="225px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="Муроджон Турсунов"
          title="Агент"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
          onChange={(e) => set_agent(e.target.value)}
        />
        <InputMask
          mask="+\9\98 (99) 999-99-99"
          maskChar="_"
          value={phone}
          onChange={(e) => set_phone(e.target.value)}
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
      </AddContent>
      <AddContent>
        <MyInput
          defaultValue={data.contract}
          width="225px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="1B-213/1"
          title="Договор №"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
          onChange={(e) => set_contract(e.target.value)}
        />
        <LabelName></LabelName>
      </AddContent>
      <AddContent margin_bottom="0">
        {data.length == undefined ? (
          <MyButton
            text="Удалить"
            font_size="12px"
            bg="#3982ff0"
            color="#3982ff"
            width="225px"
            height="38px"
            border_radius="4px"
            padding="10px"
            border="1px solid #3982ff"
            click={() => deleteSupplier()}
          />
        ) : (
          <LabelName></LabelName>
        )}

        <MyButton
          type="submit"
          text={data.length == [] ? "Создать" : " Сохранить"}
          font_size="12px"
          bg="#3982FF"
          color="#fff"
          width="225px"
          height="38px"
          border_radius="4px"
          padding="10px"
          click={() => {
            console.log("suppliers on click");
          }}
        />
      </AddContent>
    </Form>
  );
}

export default AddProduct;
