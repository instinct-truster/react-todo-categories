import styles from "./Dropdown.module.css";
import downIcon from "../../assets/icons/down.svg";
import { categories } from "../../utils/categories";
import { useState } from "react";

function Dropdown({ goalData, setGoalData }) {
  const [openedDropdown, setOpenedDropdown] = useState(false);
  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdownHeader}
        onClick={() => setOpenedDropdown(!openedDropdown)}>
        <p>{goalData.category ? goalData.category : "Select..."}</p>{" "}
        <img src={downIcon} alt="down" />
      </div>
      {openedDropdown && (
        <div className={styles.dropdownContent}>
          {categories.map((category) => (
            <p
              key={category.name}
              onClick={(e) => {
                setGoalData({ ...goalData, category: e.target.innerHTML });
                setOpenedDropdown(false);
              }}>
              {category.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
