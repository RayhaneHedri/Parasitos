import React from "react";
import styles from'./card.module.css';


const Card = ({ title, image, path }) => {
  return (
    <div>
      <a>
        <div className={styles.card}>
          <div className={styles.card-image}>
            <figure className="image is-4by3">
              <img src={image} alt={title} />
            </figure>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>{title}</p>
            
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;