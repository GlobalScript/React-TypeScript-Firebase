import { User } from "../../shared/types";
import { signOut } from "firebase/auth";
import { auth } from "../../shared/firebase";
import { Link } from "react-router-dom";
import { posts } from "../../shared/data/data_ua";
import { useAppDispatch } from "../../store/hook";
import { setUser } from "../../store/userSlice";

const Navbar: React.FC<{ user: User | null }> = ({ user }) => {
    const dispatch = useAppDispatch();
    const title = posts.find((p) => p.id === user?.destination)?.title as string;

    const logout = () => {
        signOut(auth).then(() => {
            dispatch(setUser(null))
        }).catch((error) => {
            console.log(error)
        });
    };

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <Link className="navbar__link" to="/">Mars Travel</Link>
            </div>
            <div className="navbar__basket">
                {user?.destination && <Link className="navbar__link" to={`basket/${user.destination}`}><i className="icon-shopping-basket"></i><span className="navbar__destination-title">{title}</span></Link>}
            </div>
            <div className="navbar__login">
                {
                    user ? (
                        <ul className="navbar__list">
                            <li className="navbar__list-item">
                                <img src={user.photo}
                                    alt=""
                                    className="navbar__avatar"
                                />
                            </li>
                            <li className="navbar__list-item">{user.name}</li>
                            <li className="navbar__list-logout" onClick={logout}>Вийти</li>
                        </ul>
                    ) : (<Link className="navbar__link" to="login"><i className="icon-user"></i>Вхід</Link>)
                }
            </div>
        </div>
    );
}

export default Navbar;