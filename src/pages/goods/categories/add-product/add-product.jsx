import React, { useEffect, useState } from "react";
import MyInput from "../../../../components/input/input";
import MySelect from "../../../../components/my-select/my-select";
import { AddContent } from "../../products/add-product/add-product.s";
import { ReactComponent as AddFileSVG } from "../../../../assets/add-file.svg";
import { AddFile, AddFileName, FileText, MyBtn } from "./add-product.s";
import { useDropzone } from "react-dropzone";
import MyButton from "../../../../components/button/button";
import axios from "axios";
import { Form } from "../../../Warehouse/Suppliers/add-product/add-product.s";
import MyTost from "../../../../components/tost/tost";

function AddProduct({ ...res }) {
  const { getRootProps, getInputProps } = useDropzone();
  const [respons, setRespons] = useState([]);
  const [category, setCategory] = useState([]);
  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);
  const [parent, setParent] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://89.223.71.112:8182/category?parent=0", {
        headers: {
          Authorization: "cXVyYXNoMjoxNTM2Mzc=",
          Warehouse: "3",
        },
      })
      .then((res) => {
        res.data.data.map((item) => {
          setCategory((prev) => [...prev, item.description]);
        });
        setRespons(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const createCategory = async (e) => {
    e.preventDefault();
    axios
      .post(
        "http://89.223.71.112:8182/category",
        {
          name: name,
          description: description,
          parent: parent,
        },
        {
          headers: {
            Authorization: "cXVyYXNoMjoxNTM2Mzc=",
            Warehouse: "3",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Form onSubmit={createCategory}>
        <AddContent>
          <MyInput
            // error={phoneErr}
            width="510px"
            height="38px"
            color="#A4A6B3"
            activ="#3F4558"
            placeholder="Газированные напитки"
            border_radius="4px"
            title="Название категории"
            onChange={(e) => setName(e.target.value)}
          />
        </AddContent>

        <AddContent margin_bottom="0">
          <MySelect
            input_title="Топ Категория"
            width="510px"
            height="36px"
            border="1px solid #4B5B7A"
            activ_border="1px solid #3F4558"
            border_radius="4px"
            color="#A4A6B3"
            InputLabel="Напитки"
            onChange={(limit) => {
              setDescription(limit);
              respons.forEach((item) => {
                item.description == limit && setParent(item.id);
              });
            }}
            datas={category}
          />
        </AddContent>

        <AddFileName>Изображение товара</AddFileName>
        <AddFile {...getRootProps()}>
          <input {...getInputProps()} />
          <AddFileSVG />
          <FileText>
            <h3>Перетащить изображение</h3>
            <h3>
              или просмотрите, чтобы
              <span> выбрать файл</span>
            </h3>
          </FileText>
        </AddFile>

        <MyBtn>
          <MyButton
            type="submit"
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
        </MyBtn>

        <MyTost text="lorem ipnon" isOpen={open} type="error" />
      </Form>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        asd
      </button>
    </>
  );
}

export default AddProduct;
