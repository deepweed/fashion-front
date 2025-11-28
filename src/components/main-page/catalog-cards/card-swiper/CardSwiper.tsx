import styles from "./card.module.css";
import CardSecondary from "../CardSecondary";
import { CardSwiperData } from "./swiper.data";

const CardSwiper = () => {
  return (
    <div className={styles.card}>
      {CardSwiperData.map((card, index) => (
        <CardSecondary
          key={index}
          href={card.href}
          imageLink={card.image}
          alt={card.alt}
        />
      ))}
    </div>
  );
};

export default CardSwiper;
