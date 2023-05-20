import BasketDetail from "./BasketDetail";
import BasketForm from "./basketForm";

const Basket: React.FC = () => {

    return <>
        <div className="basket">
            <div className="basket__wrapper">
                <div className="basket__form-component">
                    <BasketForm />
                </div>
                <div className="basket__detail-component">
                    <BasketDetail />
                    <hr />
                </div>
            </div>
        </div>
    </>
}

export default Basket;