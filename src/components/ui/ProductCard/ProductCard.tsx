import React, { FC } from 'react';
import { Product } from '../../../store/models/Product';
import classes from './ProductCard.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { protectedRoutePaths, unprotectedRoutePaths } from '../../../routes';
import { CgRemove } from 'react-icons/cg';
import { AiFillEdit } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { addModal, removeModal } from '../../../features/globalSlice';
import { ModalType } from '../../../store/models/Modal';
import { removeProduct } from '../../../features/shopSlice';

interface ProductCardProps {
  product: Product;
  disabled?: boolean;
}

const ProductCard: FC<ProductCardProps> = ({ product, disabled }) => {
  const location = useLocation();
  const isHome = location.pathname === unprotectedRoutePaths.HOME;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { admin } = useAppSelector((state) => state.auth);
  const price = Number(product.price).toFixed(2);
  return (
    <div className={classes.Container}>
      {admin && (
        <>
          {!disabled && (
            <div className={classes.ActionsContainer}>
              <AiFillEdit
                className={classes.Edit}
                onClick={() =>
                  navigate(
                    `${protectedRoutePaths.EDIT_PRODUCT}/${product.code}`,
                  )
                }
              />
              <CgRemove
                className={classes.Remove}
                onClick={() =>
                  dispatch(
                    addModal({
                      modalType: ModalType.WARNING,
                      body: 'Are you sure you want to delete this item?',
                      primaryButtonText: 'Delete',
                      primaryButtonAction: () =>
                        dispatch(removeProduct(product.code)),
                      secondaryButtonText: 'Cancel',
                      secondaryButtonAction: () => dispatch(removeModal()),
                    }),
                  )
                }
              />
            </div>
          )}
        </>
      )}

      <figure>
        {product.image && <img src={product.image} alt={product.name} />}
      </figure>
      <div className={classes.CardBody}>
        <div>
          <h2 className={classes.CardTitle}>
            <span>{product.brand} {product.name}</span>
            {isHome && <div>HOT</div>}
          </h2>
        </div>
        <p>{product.description}</p>
      </div>
      <div className={classes.Price}>
        Price: {isNaN(product.price) ? '0.00' : price}$
      </div>
      <div className={classes.CardActions}>
        <button
          disabled={disabled}
          onClick={() =>
            navigate(`${unprotectedRoutePaths.PRODUCT}/${product.code}`)
          }
        >
          BUY
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
