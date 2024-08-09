import React from "react";
import Button from "../../Button";
import Input from "../Input/Input";
import './Header.sass'

export default function Header() {
  return (
    <div className="header">
      <Input />
      <Button />
    </div>
  );
}
