import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/hook";
import { removeDestination } from "../../store/userSlice";

const BasketForm: React.FC = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const dispatch = useAppDispatch();

    const onSubmit = () => {
        dispatch(removeDestination()).then(() => navigate('/feedback'));
        reset();
    };

    return (
        <form className="basket__form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="basket__form-title">Заповніть форму для замовлення</h2>
            <div className="basket__grid-container">
                <div className="basket__form-first-name">
                    <label className="basket__label-account" htmlFor="first">Ім'я *</label>
                    <input className="basket__input" type="text" {...register("firstname", { minLength: 2, pattern: /^[A-Za-z]+$/i, required: true })} id="first" placeholder="введіть своє ім'я" />
                    <div className="basket__form-error">
                        {errors.firstname?.type === 'required' && <span className="basket__form-error-message">Введіть ім'я</span>}
                        {errors.firstname?.type === 'pattern' && <span className="basket__form-error-message">Введіть латинськими літерами</span>}
                        {errors.firstname?.type === 'minLength' && <span className="basket__form-error-message">Не менше двох літер </span>}
                    </div>
                </div>
                <div className="basket__form-last-name">
                    <label className="basket__label-account" htmlFor="last">Прізвище *</label>
                    <input className="basket__input" type="text" id="last" placeholder="введіть своє прізвище" {...register("lastname", { required: true, pattern: /^[A-Za-z]+$/i, minLength: 2 })} />
                    <div className="basket__form-error">
                        {errors.lastname?.type === 'required' && <span className="basket__form-error-message">Введіть Прізвище</span>}
                        {errors.lastname?.type === 'pattern' && <span className="basket__form-error-message">Введіть латинськими літерами</span>}
                        {errors.lastname?.type === 'minLength' && <span className="basket__form-error-message">Не менше двох літер </span>}
                    </div>
                </div>
                <div className="basket__form-email">
                    <label className="basket__label-account" htmlFor="email">Пошта *</label>
                    <input className="basket__input" type="email"  {...register("email", { required: true })} id="email" placeholder="введіть свою електронну адресу" />
                    <div className="basket__form-error">{errors.email?.type === 'required' && <span className="basket__form-error-message">Введіть електронну адресу</span>}</div>
                </div>
                <div className="basket__form-age">
                    <label className="basket__label-account" htmlFor="age">Вік *</label>
                    <input className="basket__input" type="number" id="age"  {...register("age", { required: true, min: 18, max: 99 })} placeholder="введіть свій вік" />
                    <div className="basket__form-error">{errors.age?.type === 'required' && <span className="basket__form-error-message">Введіть Вік</span>}
                        {errors.age?.type === 'min' && <span className="basket__form-error-message">Більше вісімнадцяти</span>}
                        {errors.age?.type === 'max' && <span className="basket__form-error-message">Менше ста</span>}</div>
                </div>
                <div className="basket__form-gender">
                    <label className="basket__label-account">Стать</label>
                    <div className="basket__row">
                        <div className="basket__gender-radio">
                            <input type="radio"  {...register("gender", { required: true })} id="male" />
                            <label htmlFor="male">Чоловік</label>
                        </div>
                        <div className="basket__gender-radio">
                            <input type="radio"  {...register("gender", { required: true })} id="female" />
                            <label htmlFor="female">Жінка</label>
                        </div>
                    </div>
                    <div className="basket__form-error">{errors.gender?.type === 'required' && <span className="basket__form-error-message">Оберіть стать</span>}</div>
                </div>
            </div>
            <div className="basket__actions">
                <button className="basket__submit" type="button" onClick={() => { navigate(-1) }}><i className="icon-left"></i>Назад</button>
                <button className={`basket__submit ${Object.keys(errors).length && 'basket__submit-disabled'}`} type="submit"><i className="icon-ok"></i>Замовити</button>
            </div>
        </form>
    )
}

export default BasketForm;