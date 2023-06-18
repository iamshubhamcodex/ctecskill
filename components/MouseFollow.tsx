"use client";

export default function MouseFollow() {
  return (
    <>
      <style>{`.cursorFollow{--x:-108px;--y:-109px;}`}</style>
      <span className="cursorFollow" id="follow">
        fd
      </span>
    </>
  );
}
