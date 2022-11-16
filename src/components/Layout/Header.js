import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Food Ranger</h1>
        <HeaderCartButton onClick={props.onCartClick}></HeaderCartButton>
      </header>
      <div className={styles["main-image"]}>
        <img
          src={
            "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg"
          }
          alt="image-of-food"
        />
      </div>
    </>
  );
};

export default Header;
