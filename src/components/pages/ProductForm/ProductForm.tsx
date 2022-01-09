import React, { FC, useEffect, useState } from 'react';
import classes from './ProductForm.module.scss';
import {
  categories,
  Category,
  CHOOSE_CATEGORY,
  Product,
} from '../../../store/models/Product';
import { v4 } from 'uuid';
import { useForm } from 'react-hook-form';
import Input from '../../ui/Input/Input';
import Textarea from '../../ui/Textarea/Textarea';
import Select from '../../ui/Select/Select';
import FileInput from '../../ui/FileInput/FileInput';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  addProduct,
  editProduct,
  getProduct,
} from '../../../features/shopSlice';
import ProductCard from '../../ui/ProductCard/ProductCard';
import { addModal } from '../../../features/globalSlice';
import { ModalType } from '../../../store/models/Modal';
import { BsCartCheckFill } from 'react-icons/bs';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { protectedRoutePaths, unprotectedRoutePaths } from '../../../routes';
import { CgCheckO } from 'react-icons/cg';

interface ProductFormData {
  name: string;
  brand: string;
  category: Category;
  type: string;
  price: string;
  year: string;
  code: string;
  stock: string;
  description: string;
}

const defaultValues: ProductFormData = {
  name: '',
  brand: '',
  category: Category.CHOOSE,
  type: '',
  price: '',
  year: '',
  stock: '',
  description: '',
  code: v4(),
};

const ProductForm: FC = () => {
  const dispatch = useAppDispatch();
  const [image, setImage] = useState<string>('');
  const navigate = useNavigate();
  const { productId } = useParams();
  const location = useLocation();
  const isEdit = location.pathname.includes(protectedRoutePaths.EDIT_PRODUCT);
  const editingProduct = useAppSelector(
    (state) => state.shop.currentProduct[0],
  );

  useEffect(() => {
    if (productId) dispatch(getProduct(productId!));
  });

  const { handleSubmit, register, formState, watch, reset } =
    useForm<ProductFormData>({
      mode: 'onSubmit',
      defaultValues,
    });

  const { isDirty, dirtyFields, errors } = formState;

  const editingProductForm = (): ProductFormData => {
    setImage('');
    if (!isEdit) {
      return { ...defaultValues };
    }
    setImage(editingProduct?.image);
    return {
      brand: editingProduct?.brand,
      category: editingProduct?.category,
      code: editingProduct?.code,
      description: editingProduct?.description,
      name: editingProduct?.name,
      price: editingProduct?.price.toString(),
      stock: editingProduct?.stock.toString(),
      type: editingProduct?.type,
      year: editingProduct?.year.toString(),
    };
  };

  useEffect(() => {
    reset(editingProductForm());
    //eslint-disable-next-line
  }, [editingProduct, isEdit]);

  const onSubmit = (data: Product) => {
    if (!isEdit) {
      dispatch(addProduct({ ...data, image }));
      reset();
      dispatch(
        addModal({
          modalType: ModalType.SUCCESS,
          icon: <BsCartCheckFill />,
          body: 'Product was successfully added to the shop.',
        }),
      );
      navigate(unprotectedRoutePaths.SHOP);
    } else {
      dispatch(
        editProduct({
          ...data,
          image: image,
        }),
      );
      dispatch(
        addModal({
          modalType: ModalType.SUCCESS,
          icon: <CgCheckO />,
          body: 'Product was successfully edited.',
        }),
      );
    }
  };

  const data = watch();

  const product: Product = {
    name: data.name,
    brand: data.brand,
    category: data?.category,
    type: data.type,
    price: parseFloat(data.price),
    year: parseInt(data.year),
    stock: parseInt(data.stock) | 0,
    description: data.description,
    code: v4(),
    image: image,
  };

  const isDisabled = (): boolean => {
    if (!isEdit) {
      return (dirtyFields.name &&
        dirtyFields.brand &&
        dirtyFields.year &&
        dirtyFields.price &&
        dirtyFields.stock &&
        dirtyFields.description &&
        image.length > 0) as boolean;
    } else {
      return isDirty;
    }
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Card}>
        <h1>{isEdit ? 'Edit product' : 'Add product'}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            id={'brand'}
            placeholder={'Brand'}
            errors={errors}
          />
          <Input
            register={register}
            id={'name'}
            placeholder={'Name'}
            errors={errors}
          />
          <Input
            register={register}
            id={'year'}
            type={'number'}
            placeholder={'Year'}
            errors={errors}
          />
          <Input
            register={register}
            id={'price'}
            type={'number'}
            step={'0.001'}
            placeholder={'Price'}
            errors={errors}
          />
          <Input
            register={register}
            id={'stock'}
            type={'number'}
            placeholder={'Stock'}
            errors={errors}
          />
          <Textarea
            register={register}
            id={'description'}
            placeholder={'Description'}
            errors={errors}
          />
          <Select
            options={categories}
            placeholder={CHOOSE_CATEGORY}
            id={'category'}
            register={register}
            value={data.category}
          />
          <FileInput label={'Upload image'} setImage={setImage} file={image} />
          <div className={classes.ButtonContainer}>
            <button type={'submit'} disabled={!isDisabled()}>
              {isEdit ? 'Save' : 'Add'}
            </button>
          </div>
        </form>
      </div>
      <div>
        <h1>Product card preview</h1>
        <ProductCard product={product} disabled={true} />
      </div>
    </div>
  );
};
export default ProductForm;
