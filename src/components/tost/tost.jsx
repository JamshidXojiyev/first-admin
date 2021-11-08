import React, { useEffect, useState } from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

function MyTost({ isOpen, type, text }) {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  useEffect(() => {
    console.log(open);
  }, [open]);
  return <Alert>{text}</Alert>;
}

export default MyTost;
