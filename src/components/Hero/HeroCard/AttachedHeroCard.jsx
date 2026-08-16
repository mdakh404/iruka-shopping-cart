import styles from "./AttachedHeroCard.module.css";

const AttachedHeroCard = () => {
    return (
        <div className={styles.fullContainer}>
            <div className={styles.attachedCardCategory}>FEATURED</div>
            <div className={styles.attachedCardTitle}>Air Streak Runner</div>
            <div className={styles.attachedCardPrice}>$129</div>
        </div>
    )
}

export default AttachedHeroCard;