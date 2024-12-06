import { useState } from "react";

export default function WatchedBox({ /*props*/children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "-" : "+"}
        </button>

        {isOpen && /*props*/children}
      </div>
    </>
  );
}
