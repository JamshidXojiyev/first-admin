import React from "react";
import MyInput from "../../../../components/input/input";
import MySelect from "../../../../components/my-select/my-select";
import { AddContent } from "../../products/add-product/add-product.s";
import { ReactComponent as AddFileSVG } from "../../../../assets/add-file.svg";
import { AddFile, AddFileName, FileText, MyBtn } from "./add-product.s";
import { useDropzone } from "react-dropzone";
import MyButton from "../../../../components/button/button";

function AddProduct(props) {
  const { getRootProps, getInputProps } = useDropzone();

  return (
    <>
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
        />
      </AddContent>
      <AddContent margin_bottom="0">
        <MySelect
          input_title="Напитки"
          width="510px"
          height="36px"
          border="1px solid #4B5B7A"
          activ_border="1px solid #3F4558"
          border_radius="4px"
          color="#A4A6B3"
          InputLabel="Топ Категория"
          onChange={(limit) => console.log(limit)}
          datas={["Qwerty", "Qwerty2", "Qwerty3"]}
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
    </>
  );
}

export default AddProduct;
