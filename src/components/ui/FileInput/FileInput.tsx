import React, { ChangeEvent, FC } from 'react';
import classes from './FileInput.module.scss';
import { BsImage } from 'react-icons/bs';
import { CgRemove } from 'react-icons/cg';

interface FileInputProps {
  label: string;
  accept?: string;
  setImage: (url: string) => void;
  file?: string;
}

const FileInput: FC<FileInputProps> = ({
  label,
  accept = 'image/*',
  setImage,
  file = '',
}) => {
  const onChangeFile = (e: ChangeEvent) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleRemove = () => {
    setImage('');
  };

  return (
    <div className={classes.Container}>
      <label className={classes.FileInput}>
        {file ? (
          <span className={classes.Remove} onClick={handleRemove}>
            <CgRemove />
            Remove file
          </span>
        ) : (
          <span>
            <input type={'file'} accept={accept} onChange={onChangeFile} />
            <BsImage />
            {label}
          </span>
        )}
        <input type="text" value={file} readOnly />
      </label>
    </div>
  );
};

export default FileInput;
