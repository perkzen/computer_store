import React, {FC} from 'react';
import classes from './BillCard.module.scss';
import {Product} from '../../../store/models/Product';
import {v4} from 'uuid';
import {useAppDispatch} from '../../../app/hooks';
import {checkout} from '../../../features/shopSlice';
import {getDateNow} from '../../../utils/dateFormatter';
import {addModal} from '../../../features/globalSlice';
import {ModalType} from '../../../store/models/Modal';
import {FaTruck} from 'react-icons/fa';

interface BillCardProps {
    products: Product[];
    total: number;
}

const BillCard: FC<BillCardProps> = ({products, total}) => {
    const dispatch = useAppDispatch();

    const handleCheckout = () => {
        dispatch(
            checkout({
                purchaseId: v4(),
                date: getDateNow(new Date()),
                total: total,
                items: products,
            })
        );
        dispatch(
            addModal({
                modalType: ModalType.SUCCESS,
                body: 'Thank you for purchasing our items, they will arrive soon at your home.',
                icon: <FaTruck/>,
            })
        );
    };

    return (
        <div className={classes.Container}>
            <h1>Bill</h1>
            <ul>
                {products.map((product) => (
                    <li key={v4()}>
                        <span>{product.name} </span>: {product.price}$ x {product.amount}
                    </li>
                ))}
            </ul>
            <div className={classes.Divider}/>
            <h2>Total price: {total.toFixed(2)}$</h2>
            <button onClick={handleCheckout} disabled={products.length === 0}>
                Checkout
            </button>
        </div>
    );
};

export default BillCard;
