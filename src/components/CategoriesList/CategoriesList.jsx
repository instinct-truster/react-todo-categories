import styles from "./CategoriesList.module.css";
import { categories } from "../../utils/categories";
import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../reducer/goalsSlice";

function CategoriesList() {
  const dispatch = useDispatch();
  return (
    <div className={styles.categoriesList}>
      {categories.map((category) => (
        <Card
          key={category.name}
          col
          handleClick={() => dispatch(changeCategory(category.name))}>
          <img src={category.icon} alt="icon" />
          <p>{category.name}</p>
        </Card>
      ))}
    </div>
  );
}

export default CategoriesList;
