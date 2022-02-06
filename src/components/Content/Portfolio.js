import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import todoImg from "../../assets/todolist.jpg";
import expense from "../../assets/expenseTracker.jpg";
import weather from "../../assets/weatherApp.png";
import food from "../../assets/foodOrderApp.png";
import snake from "../../assets/snakeGame.PNG";

import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      key: "1",
      title: "To-do list",
      description:
        "Main project, multiple todo-lists, login based, stored on firebase",
      img: todoImg,
      link: "./todos",
    },
    {
      key: "2",
      title: "Expense tracker",
      description:
        "Keep your expenses in check. Displays graphicly your expences by month",
      img: expense,
      link: "/expense",
    },
    {
      key: "3",
      title: "Weather App",
      description:
        "Weather forecast app, displaying data fetched from accuWeather",
      img: weather,
      link: "https://github.com/Sperthix/WeatherApp",
    },
    {
      key: "4",
      title: "Food order App",
      description: "Dummy app with list of food which can be added to cart",
      img: food,
      link: "https://github.com/Sperthix/FoodOrderApp-React",
    },
    {
      key: "5",
      title: "Snake",
      description: "Snake game made in pure JS",
      img: snake,
      link: "https://github.com/Sperthix/SnakeInJS",
    },
  ];

  const leftArrowClickHandler = () => {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1);
  };
  const rightArrowClickHandler = () => {
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  const clickHandler = (link) => {};

  return (
    <Fragment>
      <section className={styles.page}>
        <h1 className={styles.title}>My projects</h1>
        <FontAwesomeIcon
          className={styles.leftArrow}
          icon={faChevronUp}
          onClick={leftArrowClickHandler}
        />
        <FontAwesomeIcon
          className={styles.rightArrow}
          icon={faChevronUp}
          onClick={rightArrowClickHandler}
        />
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {data.map((d) => (
            <div className={styles.container}>
              <div className={styles.item}>
                <div className={styles.left}>
                  <h4>{d.title}</h4>
                  <p>{d.description}</p>
                  <a href={d.link} target="_blank">
                    Go to
                  </a>
                </div>
                <div className={styles.right}>
                  <img src={d.img} alt="picture of appropriate project" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Portfolio;
