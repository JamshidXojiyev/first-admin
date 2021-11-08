import React, { useEffect, useState } from "react";
import MyButton from "../../../components/button/button";
import MyInput from "../../../components/input/input";
import { ReactComponent as AddProductSVG } from "../../../assets/table-icon/add-product.svg";
import { ReactComponent as LeftCategory } from "../../../assets/category-left.svg";

import {
  BodyContent,
  CategoryContent,
  HomeContent,
  MyCategory,
  CategoryName,
  Subcategory,
} from "./categories.s";
import { CategorysData, SubcategoryData } from "./data";
import Category from "./category/category";
import MyDialog from "../../../components/dialog/my-dialog";
import AddProduct from "./add-product/add-product";
import axios from "axios";

function Categories(props) {
  const [cat, setCat] = useState([]);
  const categorys = CategorysData;
  const [dialogOpen, setDialogOpen] = useState(false);
  const subcategory = SubcategoryData;

  

  // console.log("asd: ",   catDesc);

  return (
    <CategoryContent>
      <HomeContent>
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
          text="Новый категория"
          font_size="12px"
          bg="#3982FF"
          color="#fff"
          width=""
          height="38px"
          icon={<AddProductSVG />}
          border_radius="4px"
          padding="12px 18px"
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
      </HomeContent>
      <BodyContent>
        {/* <Category /> */}
        {/* {categorys.map((category, index) => (
          <MyCategory>
            <CategoryName expandIcon={<LeftCategory />}>
              {category.name}
            </CategoryName>
            <Subcategory></Subcategory>
          </MyCategory>
        ))} */}
      </BodyContent>
    </CategoryContent>
  );
}

export default Categories;
{
  /* <Category
  parent={category.parent}
  id={category.id}
  name={category.name}
/> */
}

{
  /* <MyCategory key={index}>
  <CategoryName expandIcon={<LeftCategory />}>{category.name}</CategoryName>
  {subcategory[category.id - 1].map((data, index) => (
    <Subcategory key={index}>
      <Typography>- {data.name}</Typography>
    </Subcategory>
  ))}
</MyCategory>; */
}
