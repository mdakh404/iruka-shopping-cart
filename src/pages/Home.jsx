import styles from "./styles/Home.module.css";
import HeroSection from "../components/Hero/HeroSection";


const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <HeroSection />
        </div>
    )
}

export default Home;