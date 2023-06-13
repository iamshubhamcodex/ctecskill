"use client";

import { FC } from "react";
import { useContext } from "react";
import { Context } from "@/states/States";

const Tag: FC<{}> = ({}) => {
  const { raleway } = useContext(Context);
  return (
    <p
      style={{
        background: "var(--blue)",
        color: "white",
        margin: "60px 0",
        // marginBottom: 500,
        padding: "70px 0",
        textAlign: "center",
        fontSize: "40px",
        fontWeight: "700",
      }}
      className={raleway?.className}
    >
      The Life Coach School Has The Most Amazing <br /> Tools And Cutting-Edge
      Training
    </p>
  );
};

export default Tag;
