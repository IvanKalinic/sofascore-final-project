import React, { useState, useEffect, useMemo } from "react";
import { getCategoryList } from "../../apis/index";
import { Link } from "react-router-dom";
import { useCategories } from "../../context/CategoriesContext";
import { Datepicker } from "../../components/index";
import "./index.scss";
import { useTheme } from "../../context/ThemeContext";
import { lightTheme } from "../../components/Theme";
import Dropdown from "../../components/Dropdown";
import Asia from "../../assets/images/asia.png";
import SouthAmerica from "../../assets/images/southamerica.png";
import International from "../../assets/images/world.png";
import { getZone, getFormattedDate } from "../../utils/index";
import { useDate } from "../../context/DateContext";
import { useAuth0 } from "@auth0/auth0-react";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const { sports } = useCategories();
  const { date } = useDate();
  const [sport, setSport] = useState("football");
  const { theme } = useTheme();
  const { isAuthenticated, user } = useAuth0();

  const isUser = useMemo(
    () => isAuthenticated && user,
    [isAuthenticated, user]
  );

  const handleSport = (sport) => {
    setSport(sport);
  };

  useEffect(() => {
    getCategoryList(sport, getFormattedDate(date), getZone(date)).then(
      (res) => {
        const value = res.categories.map((cat) => {
          if (cat.category.alpha2 === "EN") {
            return {
              ...cat,
              alpha: { alpha: "gb-eng" },
            };
          } else {
            return {
              ...cat,
            };
          }
        });
        setCategories(value);
      }
    );
  }, [sport, date]);

  return (
    <div className="list-container">
      <div className="header-flex">
        <div className="user-container">
          {isUser && user.picture && (
            <img className="user-picture" src={user.picture} alt={user.name} />
          )}
          {isUser && user.name && (
            <h4 className="user-text"> Welcome,{user.name} </h4>
          )}
        </div>
        <p>Select your favourite category</p>
      </div>

      <form className="form-container">
        <div className="form-item">
          <Dropdown
            title="Select sport"
            items={sports}
            handleItems={handleSport}
          />
        </div>
        <div className="form-item">
          <Datepicker />
        </div>
      </form>
      <p>
        Available categories for {sport}: ({categories.length})
      </p>
      <ul className="categories-container">
        {categories.map((category, i) => (
          <Link
            key={i}
            className={theme === lightTheme ? "light-link" : "dark-link"}
            to={`/category/${category.category.id}`}
          >
            <li>
              <div className="style">
                {category.alpha ? (
                  <img
                    src={`https://flagcdn.com/16x12/${category.alpha.alpha?.toLowerCase()}.png`}
                    alt=""
                  />
                ) : (
                  <img
                    src={`https://flagcdn.com/16x12/${category.category.alpha2?.toLowerCase()}.png`}
                    onError={(e) => (e.target.style.display = "none")}
                  />
                )}
                {category.category.name === "Asia" ? (
                  <img src={Asia} className="asia-img" alt="" />
                ) : null}
                {category.category.name === "South America" ? (
                  <img src={SouthAmerica} className="southamerica-img" alt="" />
                ) : null}
                {category.category.name === "International" ? (
                  <img
                    src={International}
                    className="southamerica-img"
                    alt=""
                  />
                ) : null}
                {category.category.name}
                <span>({category.totalEvents})</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
