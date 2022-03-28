import React, { useState } from "react";
import TextInput from "../../Components/TextInput";
import { TextBoxWithCopyButton } from "../../Components/TextBoxWithCopyButton";
import Select from "../../Components/Select";

export const NumberBase = () => {
  const [value, setValue] = useState("");
  const [mode, setMode] = useState(10);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <TextInput onChange={(ev) => setValue(ev.target.value)} />
        <Select onChange={(ev) => setMode(parseInt(ev.target.value))}>
          <option value="10">Decimal</option>
          <option value="16">Hexadecimal</option>
          <option value="8">Octal</option>
          <option value="2">Binary</option>
        </Select>
      </div>
      <br />
      Hexadecimal
      <TextBoxWithCopyButton value={parseInt(value, mode).toString(16)} />
      <br />
      Decimal
      <TextBoxWithCopyButton value={parseInt(value, mode).toString(10)} />
      <br />
      Octal
      <TextBoxWithCopyButton value={parseInt(value, mode).toString(8)} />
      <br />
      Binary
      <TextBoxWithCopyButton value={parseInt(value, mode).toString(2)} />
    </div>
  );
};
