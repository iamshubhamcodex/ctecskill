import Main from "@/components/Blogs/Main";
import Testimonials from "@/components/Landing/Testimonials";
import { Raleway } from "next/font/google";

export const metadata = {
  title: "About | Computer Technical Skills",
  description: "Welcome to Computer Technical Skills",
};

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Main />
      <div className="maxWidth">{children}</div>

      <Testimonials />
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
        Blog section covers all latest News related to Technology. <br /> Gives
        some Tips and Tricks for Coding Journey.
      </p>
    </>
  );
}
