import { Link } from "react-router";
import styles from "./Hero.module.css";
import HeroCard from "../HeroCard/HeroCard";

const HeroSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.heroLeftContainer}>
                <span className={styles.newSeason}>NEW SEASON - 2026</span>
                
                <div className={styles.heroSlogan}>
                    <span className={styles.heroSloganStep}>Step</span>
                    <span className={styles.heroSloganInto}>into</span>
                    <span className={styles.heroSloganStyle}>style.</span>
                </div>
                
                <p className={styles.heroParagraph}>
                    Curated sneakers, boots, and accessories from the brands you love. Free shipping over $100.
                </p>
                
                <div className={styles.heroButtonsContainer}>
                    <Link to="shop"> 
                        <button className={styles.heroShopNowBtn}>Shop Now</button>
                    </Link>
                    <Link to="shop">
                        <button className={styles.heroBrowseAllBtn}>Browse All</button>
                    </Link>
                </div>
            </div>

            <div className={styles.heroRightContainer}>
                <HeroCard
                    image="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=700&h=600&fit=crop&auto=format" 
                />
                <HeroCard />
            </div>
        </section>
    )
}

export default HeroSection;