const getMobileSize = () => {
  if (window.innerWidth <= 720) {
    return true;
  } else return false;
};
const getMousePos = (e: MouseEvent) => {
  if (document.querySelector("#follow")) {
    let follow: HTMLElement = document.querySelector("#follow")!;
    follow.setAttribute("style", `--x:${e.clientX}px;--y:${e.clientY}px`);

    if (
      e.target instanceof Element &&
      getComputedStyle(e.target).cursor === "pointer"
    ) {
      follow.style.transform = "scale(3)";
      follow.style.opacity = "0";
    }
  }
};
const setNav = () => {
  if (window.scrollY > 10) {
    document.querySelector("nav[class*='main_nav']")?.classList.add("scrolled");
  } else {
    document
      .querySelector("nav[class*='main_nav']")
      ?.classList.remove("scrolled");
  }
};
export default function setEventsWindow({
  setIsMobile,
}: {
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  window.addEventListener("resize", () => {
    setIsMobile(getMobileSize());
  });
  window.addEventListener("mousemove", (e) => {
    getMousePos(e);
  });
  setIsMobile(getMobileSize());
}
