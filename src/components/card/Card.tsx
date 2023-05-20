import { Link } from "react-router-dom";
import { currency } from "../../shared/helpers";

const Card: React.FC<any> = ({ post }) => {

    return (
        <div className="card">
            <div className="card__img">
                <Link to={`/post/${post.id}`}> <img src={post.img} alt="" className="img" /></Link>
            </div>
            <h3 className="card__title">{post.title}</h3>
            <h4 className="card__price">{currency(post.cost)}</h4>
            <p className="card__desc">{post.desc}</p>
            <Link className="card__link" to={`/post/${post.id}`}>Читати більше &#8594;</Link>
        </div>
    )
}

export default Card;