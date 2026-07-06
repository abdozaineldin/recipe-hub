import HomeBtn from "./HomeBtn";
import FavoritesBtn from "./FavoritesBtn";

const NavAction = () => {
  return (
    <div className="flex items-center gap-3">
      <HomeBtn />
      <FavoritesBtn />
    </div>
  );
};

export default NavAction;
