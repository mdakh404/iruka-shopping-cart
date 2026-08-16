import styles from "./HeroCard.module.css";
import AttachedHeroCard from "./AttachedHeroCard";

const HeroCard = ({ image = null, backgroundColor = "azure" }) => {
    return (
        <div className={image ? styles.card : styles.cardWithoutImage}>
            {image && 
            <>
                <img src={image} alt="Latest Product" />
                <AttachedHeroCard />
            </>
            }
        </div>
    )
}

export default HeroCard;