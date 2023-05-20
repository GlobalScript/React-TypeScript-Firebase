import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hook";
import { posts } from "../../shared/data/data_ua";
import { TravelPost } from "../../shared/types";
import { currency } from "../../shared/helpers";
import { removeDestination } from "../../store/userSlice";

const BasketDetail: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2];
  const post: TravelPost | undefined = posts.find((p) => p.id === id);
  
  const deleteDestination = () => {
    dispatch(removeDestination());
    navigate('/');
  }

  return (
    <div className="basket__detail-container">
      <div className="basket__detail-wrapper">
        <div className="basket__detail-info">
          <div className="basket__detail-title">{post?.title}</div>
          <div className="basket__detail-cost">{currency(post?.cost)}</div>
        </div>
        <div className="basket__detail-img">
          <img src={post?.img} alt="" />
        </div>
      </div>
      <div className="basket__detail-desc">{post?.desc}</div>
      <div className="basket__detail-actions">
        <Link className="basket__detail-btn" to={`/post/${id}`}><i className="icon-right"></i>Опис</Link>
        <button className="basket__detail-btn" type="button" onClick={deleteDestination}><i className="icon-trash"></i>Видалити</button>
      </div>
    </div>
  )
}

export default BasketDetail;