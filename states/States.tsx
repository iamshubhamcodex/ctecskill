"use client";

import React, { createContext, useEffect, useState } from "react";
import { Inter, Nunito_Sans, Poppins, Raleway } from "next/font/google";
import type { NextFont } from "next/dist/compiled/@next/font";
import setEventsWindow from "@/hooks/setEventsWindow";

interface ContextInterface {
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>> | null;
  inter: NextFont | null;
  raleway: NextFont | null;
  poppins: NextFont | null;
  nunitoSans: NextFont | null;
}
let Context = createContext<ContextInterface>({
  isMobile: false,
  setIsMobile: null,
  inter: null,
  raleway: null,
  poppins: null,
  nunitoSans: null,
});

const inter = Inter({
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
});
const raleway = Raleway({
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
});
const nunitoSans = Nunito_Sans({
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
});

const State = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setEventsWindow({ setIsMobile });
  }, []);

  return (
    <Context.Provider
      value={{ isMobile, setIsMobile, inter, raleway, poppins, nunitoSans }}
    >
      {children}
    </Context.Provider>
  );
};

export default State;
export { Context };
