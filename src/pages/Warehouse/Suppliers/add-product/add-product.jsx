import React, { useEffect, useState } from "react";
import MyInput from "../../../../components/input/input";
import InputMask from "react-input-mask";
import {
  AddContent,
  LabelName,
} from "../../../goods/products/add-product/add-product.s";
import MyButton from "../../../../components/button/button";
import axios from "axios";
import { Form } from "./add-product.s";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

function AddProduct({ data, onCloseDialog }) {
  const [full_name, set_full_name] = useState("");
  const [contract, set_contract] = useState("");
  const [agent, set_agent] = useState("");
  const [phone, set_phone] = useState(data.phone || "");
  const [contact_info, set_contact_info] = useState("");
  const [full_name_err, set_full_name_err] = useState(false);
  const [contract_err, set_contract_err] = useState(false);
  const [agent_err, set_agent_err] = useState(false);
  const [phone_err, set_phone_err] = useState(false);
  const [contact_info_err, set_contact_info_err] = useState(false);
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState("Formani to'ldiring !");

  //create and add supplier
  const authenticate = async (e) => {
    e.preventDefault();
    if (
      full_name == "" &&
      contract == "" &&
      agent == "" &&
      phone == "" &&
      contact_info == ""
    ) {
      setOpen(true);
      setAlert("Formani to'liq to'ldirishingiz shart !");
    } else if (full_name == "") {
      setOpen(true);
      setAlert("Yetkazib beruvchini kritishingiz shart !");
      set_full_name_err(true);
    } else if (contact_info == "") {
      setOpen(true);
      setAlert("Kopmaniya nomini kritishingiz shart !");
      set_contact_info_err(true);
    } else if (agent == "") {
      setOpen(true);
      setAlert("Agentni kritishingiz shart !");
      set_agent_err(true);
    } else if (phone == "") {
      setOpen(true);
      setAlert("Telefon reqmni kritishingiz shart !");
      set_phone_err(true);
    } else if (contract == "") {
      setOpen(true);
      setAlert("Shartnoma raqamini kritishingiz shart !");
      set_contract_err(true);
    } else if (data.length == 0) {
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
          // window.location.reload();
          onCloseDialog(false);
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
        // window.location.reload();
        onCloseDialog(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Form onSubmit={authenticate}>
        <AddContent>
          <MyInput
            error={full_name_err}
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
            error={contact_info_err}
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
            error={agent_err}
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
                error={phone_err}
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
            error={contract_err}
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
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={() => setOpen(false)} severity="error">
          {alert}
        </Alert>
      </Snackbar>
    </>
  );
}

export default AddProduct;
