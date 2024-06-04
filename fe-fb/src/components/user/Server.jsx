import React from "react";
import { Radio, Space } from "antd";

export default function Server({ servers, isPending, isError, setSelected }) {
  if (isPending) return <h6>LOADING SERVER...</h6>;
  if (isError) return <h6>SERVER NOTFOUND...</h6>;
  return (
    <Radio.Group onChange={(e) => setSelected(e.target.value)}>
      <Space direction="vertical">
        {servers &&
          servers.length > 0 &&
          servers.map((item, index) => (
            <Radio
              value={item.name + "," + item.description + "," + item.price}
              key={index}
            >
              {item.name} {item.description}
              <i style={{ color: "#883731", fontWeight: "bold" }}>
                {" "}
                (Giá : {item.price}đ)
              </i>
            </Radio>
          ))}
      </Space>
    </Radio.Group>
  );
}
