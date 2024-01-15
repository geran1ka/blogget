import { useEffect, useState } from "react";
import style from "./Tabs.module.css";
import PropTypes from "prop-types";
import { assignId } from "../../../utils/generateRandomId";
import { debounceRaf } from "../../../utils/debounce";
import { Text } from "../../../UI/Text";
import { useNavigate } from "react-router-dom";
import { SVG } from "../../../UI/SVG/SVG";

const LIST = [
  { value: "Главная", Icon: "home", link: "rising" },
  { value: "Топ", Icon: "top", link: "top" },
  { value: "Лучшие", Icon: "best", link: "best" },
  { value: "Горячие", Icon: "hot", link: "hot" },
].map(assignId);

export const Tabs = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(true);
  const [itemName, setItemName] = useState("Стартовая страница");
  const navigate = useNavigate();

  const hadleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(hadleResize);
    debounceResize();
    window.addEventListener("resize", debounceResize);
    return () => {
      window.removeEventListener("resize", debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropDown && (
        <div className={style.wrapperBtn}>
          <button className={style.btn} onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
            {itemName}
            <SVG iconName="arrow" width={15} height={15} />
          </button>
        </div>
      )}

      <ul className={style.list} onClick={() => setIsDropDownOpen(false)}>
        {(isDropDownOpen || !isDropDown) &&
          LIST.map(({ value, link, id, Icon }) => (
            <li className={style.item} key={id}>
              <button
                className={style.btn}
                onClick={() => {
                  setItemName(value);
                  navigate(`/category/${link}`);
                }}>
                <Text>{value}</Text>
                {Icon && <SVG iconName={Icon} width={30} height={30} />}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
