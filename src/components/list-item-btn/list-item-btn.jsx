import React, { useEffect, useState } from "react";
import { ListItem, ListItemIcon, ListItemText, Menu } from "@material-ui/core";
import { IsOpenBlock, ItemBlock, MenuIcon, MenuName } from "./list-item-btn.s";
import { NavLink } from "react-router-dom";

function ListItemBtn({ datas, isOpen }) {
  return (
    <>
      {datas.map((data, index) => (
        <SidebarItem isOpen={isOpen} key={index} {...data} />
      ))}
    </>
  );
}

const SidebarItem = ({ isOpen, ...data }) => {
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setAnchor(null);
      setOpen(false);
    }
  }, [isOpen]);
  return (
    <>
      <ItemBlock
        onClick={(e) => {
          setOpen(!open);
          setAnchor(e.currentTarget);
        }}
        button
        as={NavLink}
        exact
        to={data.link || "/"}
        activeClassName="nav-active"
      >
        <ListItemIcon>
          <MenuIcon src={data.img} />
        </ListItemIcon>
        <MenuName primary={data.name} className={data.activ} />
      </ItemBlock>
      {data.subItems ? (
        isOpen ? (
          <IsOpenBlock in={open}>
            {data?.subItems?.map((item) => (
              <ListItem button component={NavLink} exact to={item.link}>
                <ListItemText className="subItems"> {item.name} </ListItemText>
              </ListItem>
            ))}
          </IsOpenBlock>
        ) : (
          <Menu
            open={Boolean(anchor)}
            anchorEl={anchor}
            onClose={() => setAnchor(null)}
          >
            {data?.subItems?.map((item) => (
              <ListItem button component={NavLink} exact to={item.link}>
                <ListItemText> {item.name} </ListItemText>
              </ListItem>
            ))}
          </Menu>
        )
      ) : null}
    </>
  );
};

export default ListItemBtn;
