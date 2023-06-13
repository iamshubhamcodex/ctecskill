import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Main() {
  return (
    <>
      <div
        className={raleway.className}
        style={{
          background: "url(/assets/aboutbg.jpg)",
          backgroundSize: "cover",
          height: 500,
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(var(--blueLi) / 40%)",
            zIndex: 1,
          }}
        ></span>
        <p
          className="maxWidth"
          style={{ fontSize: 70, color: "white", fontWeight: 600, zIndex: 2 }}
        >
          About Us
        </p>
      </div>
    </>
  );
}
