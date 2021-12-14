import { useDispatch } from "react-redux";
import { sideListActions } from "../../context/sideList-slice";
import styles from "./Item.module.css";

const Item = (props) => {
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch(sideListActions.removeItem(props.id));
  };

  return (
    <li className={styles.item}>
      <label onClick={onDeleteHandler}>{props.label}</label>
    </li>
  );
};

export default Item;
