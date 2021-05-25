import React, { useEffect, useState, useRef } from "react";
import { capitalize } from "../../utils/index";
import "./index.scss";

function Dropdown({ handleItems, title, items }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState("");
  const ref = useRef();

  const toggle = () => {
    setOpen(!open);
  };

  function handleOnClick(item) {
    setSelection(item);
    handleItems(item);
    toggle();
  }

  useEffect(() => {
    const onBodyClicked = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      if (open) {
        toggle();
      }
    };
    document.body.addEventListener("click", onBodyClicked, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClicked);
    };
  }, [open]);

  return (
    <div className="dd-wrapper" ref={ref}>
      <div tabIndex={0} className="dd-header" role="button" onClick={toggle}>
        <div className="dd-header__title">
          <p className="dd-header__title-bold">
            {selection ? capitalize(selection) : title}
          </p>
        </div>
        <div className="dd-header__action">
          <p>{open ? "Close" : "Open"}</p>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {items.map((item) => (
            <li className="dd-list-item" key={item.id}>
              <button
                type="button"
                onClick={() => handleOnClick(item.value.toLowerCase())}
              >
                <span>{item.value}</span>
                <span>Selected...</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
