import React, { useState } from "react";
import { CategoryName, MyCategory, Subcategory } from "../categories.s";
import { ReactComponent as LeftCategory } from "../../../../assets/category-left.svg";
import { CategorysData, SubcategoryData } from "../data";

function Category({ categories = CategorysData }) {
  const [subcategorys, setSubcategorys] = useState([]);
  const checkChildren = () => {
    setSubcategorys(categories);
    console.log("data: ", subcategorys);
  };
  console.log(categories);
  return (
    <>
      {categories.map((category, index) => (
        <MyCategory>
          <CategoryName expandIcon={<LeftCategory />} onClick={checkChildren}>
            {category.name}
          </CategoryName>
          {subcategorys.length > 0 && (
            <Subcategory>
              {subcategorys.map((res, index) => (
                <Category categories={SubcategoryData} {...res} />
              ))}
            </Subcategory>
          )}
        </MyCategory>
      ))}
    </>
  );
}

export default Category;

// import { ReactComponent as LeftCategory } from "../../../../assets/category-left.svg";
// import { useState } from "react";
// import { CategoryName, MyCategory } from "../categories.s";
// import { Collapse } from "@material-ui/core";
// import { SubcategoryData } from "../data";

// function Category({ name, id, priority = 0 }) {
//   const [subCategories, setSubCategories] = useState([]);
//   const [open, setOpen] = useState(false);
//   const checkChildren = () => {
//     setSubCategories(SubcategoryData.filter((sd) => sd.parent === id));
//     setOpen(!open);
//   };
//   return (
//     <>
//       <CategoryName
//         priority={priority}
//         onClick={checkChildren}
//         expandIcon={<LeftCategory />}
//       >
//         {name}
//       </CategoryName>
//       <Collapse in={open}>
//         {subCategories.length > 0 ? (
//           subCategories.map((sc) => (
//             <Category priority={priority + 1} {...sc} />
//           ))
//         ) : ""}
//       </Collapse>
//     </>
//   );
// }

// export default Category;
