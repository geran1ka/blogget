import { useState } from "react";
import style from "./Search.module.css";
import { useDispatch } from "react-redux";
import { postsSlice } from "../../../store/posts/postsSlice";
import { useNavigate } from "react-router-dom";
import { SVG } from "../../../UI/SVG/SVG";

export const Search = (props) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handlerSubmit = (e) => {
    e.preventDefault();
    navigate(`/category/search`);
    dispatch(postsSlice.actions.searchRequest(search));
    setSearch("");
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <input className={style.search} type="search" onChange={(e) => setSearch(e.target.value)} value={search} />
      <button className={style.button} type="submit">
        <SVG iconName="search" className={style.svg} />
      </button>
    </form>
  );
};
