import React, { useState, useEffect } from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;
const count = 3;
const ArticleItems = () => {
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  function callback(key) {
    console.log(key);
  }
  return (
    <div>
      <Collapse showArrow={false} defaultActiveKey={["1"]} onChange={callback}>
        <Panel
          showArrow={false}
          header="This is panel header with arrow icon"
          key="1"
        >
          <p>{text}</p>
        </Panel>
        <Panel
          showArrow={false}
          header="This is panel header with no arrow icon"
          key="2"
        >
          <p>{text}</p>
        </Panel>
      </Collapse>
      ,
    </div>
  );
};

export default ArticleItems;
