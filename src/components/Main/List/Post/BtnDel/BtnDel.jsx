import { SVG } from "../../../../../UI/SVG/SVG";
import style from "./BtnDel.module.css";

export const BtnDel = () => (
  <button className={style.delete}>
    <SVG iconName="delete" />
  </button>
);
