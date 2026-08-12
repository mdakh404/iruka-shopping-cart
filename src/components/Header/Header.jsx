import { NavLink } from "react-router";
import { ShoppingCart } from "lucide-react";
import irukaImg from "../../assets/iruka.png";
import styles from "./Header.module.css";

const NavButton = ({ buttonLink, children, end }) => {
    return ( 
        <NavLink 
            className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
            to={buttonLink}
            end={end}
        >
                {children}
        </NavLink>
    )
}

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoWrapper}>
                <NavLink to="/">
                    <img className={styles.logo} src={irukaImg} alt="Iruka" /> 
                </NavLink>
            </div>

            <nav className={styles.nav}>
                    <NavButton 
                        buttonLink="/"   
                        end                  
                    >
                        <span>Home</span>
                    </NavButton>

                    <NavButton 
                        buttonLink="/shop" 
                    >
                        <span>Shop</span>
                    </NavButton>

                    <NavLink 
                        className={({ isActive }) => isActive ? styles.linkCartActive : styles.linkCart} to="/cart"
                    >
                        {({ isActive }) => (
                        <>
                            <ShoppingCart 
                                size={16} 
                                color={isActive ? "#FFFFFF" : "#1A1714"} 
                            /> 
                            <span>Cart</span>
                        </>
                    )}
                    </NavLink>
                    
            </nav>
        </header>
    )
}

export default Header;