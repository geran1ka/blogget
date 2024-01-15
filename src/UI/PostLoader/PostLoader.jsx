import style from "./PostLoader.module.css";
import CircleLoader from "react-spinners/CircleLoader";

export const PostLoader = () => (
  <CircleLoader className={style.loader} color="#36d7b7" css={{ display: "block" }} size={150} />
);
