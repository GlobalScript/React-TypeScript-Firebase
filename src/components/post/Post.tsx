import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { posts } from "../../shared/data/data_ua";
import { currency } from "../../shared/helpers";
import { addDestination } from "../../store/userSlice";

const Post = () => {
  const { user } = useAppSelector(state => state.user)
  const location = useLocation()
  const id = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const post = posts.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const addToCart = (): void => {
    if (!post) {
      navigate('/');
      return;
    }
    if (!user) {
      navigate('/login');
      return;
    }
    dispatch(addDestination(id)).then(() => navigate(`/basket/${id}`))
  }

  return (
    <div className="post">
      <img src={post?.img} alt="" className="post__img" />
      <h1 className="post__title">{post?.title}</h1>
      <h4 className="post__cost">{currency(post?.cost)}</h4>
      <p className="post__desc">{post?.desc}</p>
      <p className="post__long-desc">{post?.longDesc}</p>
      <div className="post__actions">
        <button onClick={() => { navigate(-1) }}><i className="icon-left"></i> Назад</button>
        <button onClick={addToCart}><i className="icon-cart-plus"></i>Покласти в кошик</button>
      </div>
    </div>
  );
};

export default Post;