import { useEffect, useRef } from "react";

export default function Search({ query, setQuery }) {
  // useEffect(()=>{
  //   const el = document.querySelector('.search');

  //   el.focus();
  // }, [])


  const inputEl = useRef(null);
  useEffect(() => {

    
    function callBack(e){
      if(document.activeElement === inputEl.current) return;
      if(e.code === "Enter"){}
      inputEl.current.focus();
      setQuery("");
    }
    document.addEventListener("keydown", callBack);
    return ()=> document.removeEventListener("keydown", callBack);
  }, [setQuery]);

  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />
    </>
  );
}
