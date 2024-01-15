import { ReactComponent as LoginIcon } from "./img/login.svg";
import { ReactComponent as LogoIcon } from "./img/logo.svg";
import { ReactComponent as CloseIcon } from "./img/close.svg";
import { ReactComponent as SearchIcon } from "./img/search.svg";
import { ReactComponent as ArrowIcon } from "./img/arrow.svg";
import { ReactComponent as HotIcon } from "./img/hot.svg";
import { ReactComponent as HomeIcon } from "./img/home.svg";
import { ReactComponent as BestIcon } from "./img/best.svg";
import { ReactComponent as TopIcon } from "./img/top.svg";
import { ReactComponent as DeleteIcon } from "./img/delete.svg";
import PropTypes from "prop-types";

export const SVG = (prop) => {
  const svgDirect = {
    login: LoginIcon,
    logo: LogoIcon,
    close: CloseIcon,
    search: SearchIcon,
    arrow: ArrowIcon,
    hot: HotIcon,
    home: HomeIcon,
    best: BestIcon,
    top: TopIcon,
    delete: DeleteIcon,
  };

  const { iconName, As = svgDirect[iconName], className, alt, width, height } = prop;

  return <As className={className} alt={alt} width={width} height={height} />;
};

SVG.propTypes = {
  As: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
