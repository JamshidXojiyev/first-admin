import React from "react";
import MyButton from "../../../../components/button/button";
import MyInput from "../../../../components/input/input";
import MySelect from "../../../../components/my-select/my-select";
import {
  AddContent,
  GoodsStores,
  LabelName,
  LabelPrices,
  Name,
  ProductText,
} from "./add-product.s";
import { ReactComponent as PlosSVG } from "../../../../assets/plosSVG.svg";
import { ReactComponent as MinusSVG } from "../../../../assets/minusSVG.svg";

function AddProduct({ ...res }) {
  return (
    <>
      <AddContent>
        <MyInput
          width="225px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="Coca-Cola 1,5L Наманган"
          title="Наименование"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
        />
        <MyInput
          width="225px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="47865498498165"
          title="Баркод"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
        />
      </AddContent>

      <AddContent>
        <MyInput
          width="225px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="159756"
          title="Артикул"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
        />
        <MyInput
          width="225px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="Напитки"
          title="Категория"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
        />
      </AddContent>
      <AddContent>
        <MySelect
          input_title="Ед. измерения"
          width="225px"
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
          width="225px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="Категория"
          title="Напитки"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
        />
      </AddContent>
      <Name>Наличие товара в магазинах</Name>
      <GoodsStores>
        <ProductText>Основной Склад</ProductText>
        <div>
          <MyInput
            width="72px"
            height="25px"
            color="#A4A6B3"
            activ="#3F4558"
            placeholder=""
            border_color="#4B5B7A"
            font_size="12px"
            border_radius="4px"
          />
          <MyButton
            bg="#68768F"
            color="#F9F9F9"
            width="25px"
            height="25px"
            icon={<MinusSVG />}
            border_radius="4px"
            padding="10px"
          />
          <MyButton
            bg="#68768F"
            color="#F9F9F9"
            width="25px"
            height="25px"
            icon={<PlosSVG />}
            border_radius="4px"
            padding="10px"
          />
        </div>
      </GoodsStores>
      <GoodsStores>
        <ProductText>Склад г.Карши</ProductText>
        <div>
          <MyInput
            width="72px"
            height="25px"
            color="#A4A6B3"
            activ="#3F4558"
            placeholder=""
            border_color="#4B5B7A"
            font_size="12px"
            border_radius="4px"
          />
          <MyButton
            bg="#68768F"
            color="#F9F9F9"
            width="25px"
            height="25px"
            icon={<MinusSVG />}
            border_radius="4px"
            padding="10px"
          />
          <MyButton
            bg="#68768F"
            color="#F9F9F9"
            width="25px"
            height="25px"
            icon={<PlosSVG />}
            border_radius="4px"
            padding="10px"
          />
        </div>
      </GoodsStores>
      <Name>Редактирование цен</Name>
      <AddContent>
        <LabelPrices>Склад</LabelPrices>
        <LabelPrices>Цена</LabelPrices>
      </AddContent>
      <AddContent>
        <LabelName>Основной Склад</LabelName>
        <MyInput
          width="225px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="Категория"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
        />
      </AddContent>
      <AddContent>
        <LabelName>Основной Склад</LabelName>
        <MyInput
          width="225px"
          height="36px"
          color="#A4A6B3"
          activ="#3F4558"
          placeholder="Категория"
          border_color="#4B5B7A"
          font_size="12px"
          border_radius="4px"
        />
      </AddContent>
      <AddContent margin_bottom="0">
        <LabelName></LabelName>
        <MyButton
          text="Создать товар"
          font_size="12px"
          bg="#3982FF"
          color="#fff"
          width=""
          height="38px"
          // icon={<AddProductSVG />}
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
