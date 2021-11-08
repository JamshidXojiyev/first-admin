import React, { useEffect, useState } from "react";
import {
  Body,
  Hamburger,
  HomeContent,
  Navigationbar,
  SidebarLeftContent,
  SidebarRightContent,
  Siderbar,
} from "./main-view.s.js";
import {
  Button,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ListItemBtn from "../../components/list-item-btn/list-item-btn";
import HomeIcon from "../../assets/menu-icons/home.svg";
import reportsIcon from "../../assets/menu-icons/reports.svg";
import goodsIcon from "../../assets/menu-icons/goods.svg";
import debitCreditIcon from "../../assets/menu-icons/debit-credit.svg";
import warehouseIcon from "../../assets/menu-icons/warehouse.svg";
import employeesIcon from "../../assets/menu-icons/employees.svg";
import settingsIcon from "../../assets/menu-icons/settings.svg";
import Products from "../goods/products/products";
import { Route } from "react-router";
import Home from "../Home/home.jsx";
import Reports from "../Reports/reports.jsx";
import Categories from "../goods/categories/categories.jsx";
import DebitCredit from "../DebitCredit/debit-credit.jsx";
import AcceptanceGoods from "../Warehouse/AcceptanceGoods/acceptance-goods.jsx";
import ReturnGoods from "../Warehouse/ReturnGoods/return-goods.jsx";
import Suppliers from "../Warehouse/Suppliers/suppliers.jsx";
import Employees from "../Employees/employees.jsx";
import MyDialog from "../../components/dialog/my-dialog";
import Settings from "../Settings/settings.jsx";
import Clients from "../Clients/сlients.jsx";
import AddProduct from "../Warehouse/AcceptanceGoods/add-product/add-product.jsx";

function MainView() {
  const [open, setOpen] = useState(false);
  const datas = [
    {
      name: "Главная",
      img: HomeIcon,
      link: "/home",
    },
    {
      name: "Отчёты",
      img: reportsIcon,
      link: "/reports",
    },
    {
      name: "Товары",
      img: goodsIcon,
      link: "/goods/products",
      subItems: [
        {
          name: "Продукты",
          link: "/goods/products",
        },
        {
          name: "Категории",
          link: "/goods/categories",
        },
      ],
    },
    {
      name: "Дебит Кредит",
      img: debitCreditIcon,
      link: "/debit-credit",
    },
    {
      name: "Склад",
      img: warehouseIcon,
      link: "/warehouse/acceptance-goods",
      subItems: [
        {
          name: "Прием товаров",
          link: "/warehouse/acceptance-goods",
        },
        {
          name: "Возврать товаров",
          link: "/warehouse/return-goods",
        },
        {
          name: "Поставшики",
          link: "/warehouse/suppliers",
        },
      ],
    },
    {
      name: "Клиенты",
      img: employeesIcon,
      link: "/clients",
    },
    {
      name: "Сотрудники",
      img: employeesIcon,
      link: "/employees",
    },
    {
      name: "Настройки",
      img: settingsIcon,
      link: "/settings",
    },
  ];
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <HomeContent>
      <Siderbar>
        <Toolbar>
          <SidebarLeftContent>
            <Hamburger color="inherit" onClick={() => setOpen(!open)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="15"
                viewBox="0 0 16 12"
                fill="none"
              >
                <rect x={open ? 5 : 0} width="11" height="2" fill="#fff" />
                <rect y="5" width="16" height="2" fill="#fff" />
                <rect
                  x={open ? 2 : 0}
                  y="10"
                  width="14"
                  height="2"
                  fill="#fff"
                />
              </svg>
            </Hamburger>
            <Typography variant="h6">Dashboard</Typography>
          </SidebarLeftContent>
          <SidebarRightContent>
            <Button color="inherit">Login</Button>
            <IconButton color="inherit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M14.1665 17.0833H5.83317C3.33317 17.0833 1.6665 15.8333 1.6665 12.9167V7.08332C1.6665 4.16666 3.33317 2.91666 5.83317 2.91666H14.1665C16.6665 2.91666 18.3332 4.16666 18.3332 7.08332V12.9167C18.3332 15.8333 16.6665 17.0833 14.1665 17.0833Z"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.1668 7.5L11.5585 9.58333C10.7002 10.2667 9.29183 10.2667 8.43349 9.58333L5.8335 7.5"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </IconButton>
            <IconButton color="inherit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 5.36667V8.14167"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M10.0166 1.66666C6.94992 1.66666 4.46658 4.14999 4.46658 7.21666V8.96666C4.46658 9.53332 4.23325 10.3833 3.94158 10.8667L2.88325 12.6333C2.23325 13.725 2.68325 14.9417 3.88325 15.3417C7.86658 16.6667 12.1749 16.6667 16.1582 15.3417C17.2832 14.9667 17.7666 13.65 17.1582 12.6333L16.0999 10.8667C15.8082 10.3833 15.5749 9.52499 15.5749 8.96666V7.21666C15.5666 4.16666 13.0666 1.66666 10.0166 1.66666Z"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M12.7751 15.6833C12.7751 17.2083 11.5251 18.4583 10.0001 18.4583C9.24176 18.4583 8.54176 18.1417 8.04176 17.6417C7.54176 17.1417 7.2251 16.4417 7.2251 15.6833"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
              </svg>
            </IconButton>
            <IconButton color="inherit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.6665 10.7333V9.26666C1.6665 8.4 2.37484 7.68333 3.24984 7.68333C4.75817 7.68333 5.37484 6.61666 4.6165 5.30833C4.18317 4.55833 4.4415 3.58333 5.19984 3.15L6.6415 2.325C7.29984 1.93333 8.14984 2.16666 8.5415 2.825L8.63317 2.98333C9.38317 4.29166 10.6165 4.29166 11.3748 2.98333L11.4665 2.825C11.8582 2.16666 12.7082 1.93333 13.3665 2.325L14.8082 3.15C15.5665 3.58333 15.8248 4.55833 15.3915 5.30833C14.6332 6.61666 15.2498 7.68333 16.7582 7.68333C17.6248 7.68333 18.3415 8.39166 18.3415 9.26666V10.7333C18.3415 11.6 17.6332 12.3167 16.7582 12.3167C15.2498 12.3167 14.6332 13.3833 15.3915 14.6917C15.8248 15.45 15.5665 16.4167 14.8082 16.85L13.3665 17.675C12.7082 18.0667 11.8582 17.8333 11.4665 17.175L11.3748 17.0167C10.6248 15.7083 9.3915 15.7083 8.63317 17.0167L8.5415 17.175C8.14984 17.8333 7.29984 18.0667 6.6415 17.675L5.19984 16.85C4.4415 16.4167 4.18317 15.4417 4.6165 14.6917C5.37484 13.3833 4.75817 12.3167 3.24984 12.3167C2.37484 12.3167 1.6665 11.6 1.6665 10.7333Z"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </IconButton>
            <IconButton color="inherit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M14.1665 15.3584H10.8332L7.12483 17.825C6.57483 18.1917 5.83317 17.8 5.83317 17.1334V15.3584C3.33317 15.3584 1.6665 13.6917 1.6665 11.1917V6.19166C1.6665 3.69166 3.33317 2.02499 5.83317 2.02499H14.1665C16.6665 2.02499 18.3332 3.69166 18.3332 6.19166V11.1917C18.3332 13.6917 16.6665 15.3584 14.1665 15.3584Z"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 9.46664V9.29168C10 8.72501 10.35 8.425 10.7 8.18333C11.0417 7.95 11.3833 7.65001 11.3833 7.10001C11.3833 6.33334 10.7667 5.71664 10 5.71664C9.23334 5.71664 8.6167 6.33334 8.6167 7.10001"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99641 11.4583H10.0039"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </IconButton>
          </SidebarRightContent>
        </Toolbar>
      </Siderbar>
      <Navigationbar variant="permanent" width={open ? "260px" : "64px"}>
        <List>
          <ListItemBtn isOpen={open} datas={datas} />
        </List>
      </Navigationbar>
      <Body width={open ? "260px" : "64px"}>
        <div>
          <Route path="/home" component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/goods/products" component={Products} />
          <Route path="/goods/categories" component={Categories} />
          <Route path="/debit-credit" component={DebitCredit} />
          <Route
            path="/warehouse/acceptance-goods"
            component={AcceptanceGoods}
          />
          <Route
            path="/warehouse/acceptance-goods-product"
            component={AddProduct}
          />
          <Route path="/warehouse/return-goods" component={ReturnGoods} />
          <Route path="/warehouse/suppliers" component={Suppliers} />
          <Route path="/clients" component={Clients} />
          <Route path="/employees" component={Employees} />
          <Route path="/settings" component={Settings} />
        </div>
      </Body>
    </HomeContent>
  );
}

export default MainView;
