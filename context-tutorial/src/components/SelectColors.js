import React from "react";
import { ColorConsumer } from "../contexts/color";

const colors = [
  "pink",
  "darkblue",
  "yellow",
  "skyblue",
  "salmon",
  "indigo",
  "violet",
];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  //마우스 오른쪽 버튼 클릭시 메뉴가 ㄸ는 것은 무시
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>

      <hr />
    </div>
  );
};

export default SelectColors;
