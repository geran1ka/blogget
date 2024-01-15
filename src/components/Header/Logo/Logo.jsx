import { SVG } from "../../../UI/SVG/SVG";
import style from "./Logo.module.css";
import { Link } from "react-router-dom";

export const Logo = (props) => (
  <Link className={style.link} to="/category/rising">
    <SVG iconName="logo" className={style.logo} alt="Логотип Blogget" />
  </Link>
);
