import { Checkbox, FormControlLabel } from "@material-ui/core";
import React, { useState } from "react";
import MyButton from "../../../../components/button/button";
import MyInput from "../../../../components/input/input";
import { ReactComponent as AddFileSVG } from "../../../../assets/add-file.svg";
import MySelect from "../../../../components/my-select/my-select";
import { AddFile, FileText } from "../../categories/add-product/add-product.s";
import {
  AddContent,
  CheckboxBlock,
  GoodsStores,
  LabelName,
  LabelPrices,
  MyChipInput,
  Name,
  ProductText,
} from "./add-product.s";
import { useDropzone } from "react-dropzone";

function AddProduct({ ...res }) {
  const { getRootProps, getInputProps } = useDropzone();

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <AddContent>
        <MyInput
          width="250px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="Coca-Cola 1,5L Наманган"
          title="Наименование"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
        />
        <MySelect
          input_title="Категория"
          width="250px"
          font_size="12px"
          height="36px"
          border="1px solid #4B5B7A"
          activ_border="1px solid #3F4558"
          border_radius="4px"
          color="#A4A6B3"
          InputLabel="Напитки"
          onChange={(limit) => console.log(limit)}
          datas={["Qwerty", "Qwerty2", "Qwerty3"]}
        />
      </AddContent>

      <AddContent>
        <MyInput
          width="250px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="159756"
          title="Артикул"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
          type="number"
        />
        <MySelect
          input_title="nimadur"
          width="250px"
          font_size="12px"
          height="36px"
          border="1px solid #4B5B7A"
          activ_border="1px solid #3F4558"
          border_radius="4px"
          color="#A4A6B3"
          InputLabel="nimadur"
          onChange={(limit) => console.log(limit)}
          datas={["Qwerty", "Qwerty2", "Qwerty3"]}
        />
      </AddContent>

      <AddContent>
        <MySelect
          input_title="Ед. измерения"
          width="250px"
          font_size="12px"
          height="36px"
          border="1px solid #4B5B7A"
          activ_border="1px solid #3F4558"
          border_radius="4px"
          color="#A4A6B3"
          InputLabel="Штук"
          onChange={(limit) => console.log(limit)}
          datas={["Qwerty", "Qwerty2", "Qwerty3"]}
        />
        <MyInput
          width="250px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder=""
          title="Описание"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
        />
      </AddContent>

      <AddContent>
        <MyChipInput
          label={"Баркод"}
          onChange={(chips) => console.log(chips)}
        />
      </AddContent>

      <AddContent>
        <CheckboxBlock>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                color="primary"
              />
            }
            label="Secondary"
          />
        </CheckboxBlock>

        <CheckboxBlock>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Secondary"
          />
        </CheckboxBlock>
      </AddContent>

      <AddContent>
        <MyInput
          width="160px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="159756"
          title="Артикул"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
          type="number"
        />
        <MyInput
          width="160px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="159756"
          title="Артикул"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
          type="number"
        />
        <MyInput
          width="160px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="159756"
          title="Артикул"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
          type="number"
        />
      </AddContent>

      <AddContent>
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

export default AddProduct;
