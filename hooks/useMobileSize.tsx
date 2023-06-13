"use client";

import { Context } from "@/states/States";
import { useContext, useEffect } from "react";

const useMobileSize = () => {
  // let [isMobile, setIsMobile] = useState(false);
  let { setIsMobile, setMousePos } = useContext(Context);
};

export default useMobileSize;
