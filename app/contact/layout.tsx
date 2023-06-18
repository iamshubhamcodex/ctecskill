import Main from "@/components/Contact/Main";
import { Raleway } from "next/font/google";

export const metadata = {
  title: "About | Computer Technical Skills",
  description: "Welcome to Computer Technical Skills",
};

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Main />
      <div className="maxWidth">{children}</div>
    </>
  );
}
