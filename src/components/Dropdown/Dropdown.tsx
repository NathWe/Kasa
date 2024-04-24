import React, { useState } from "react";
import close from "../../assets/icones/fermer.png";
import open from "../../assets/icones/ouvert.png";
import { TitreDropdown, DropdownText } from "./Dropdown.style";

interface DropdownProps {
  title: string;
  text: string | string[];
  extraClass?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ title, text, extraClass }) => {
  const [dropdownStart, setDropdown] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdown((prevState) => !prevState);
  };

  const renderText = () => {
    if (Array.isArray(text)) {
      return (
        <ul>
          {text.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        </ul>
      );
    } else {
      return <DropdownText>{text}</DropdownText>;
    }
  };

  return (
    <div className={`dropdown ${extraClass ? extraClass : ""}`}>
      <TitreDropdown>
        <h3>{title}</h3>
        <img
          src={dropdownStart ? open : close}
          alt={dropdownStart ? "ouverture collapse" : "fermeture collapse"}
          onClick={toggleDropdown}
        />
      </TitreDropdown>
      {dropdownStart && renderText()}
    </div>
  );
};

export default Dropdown;
