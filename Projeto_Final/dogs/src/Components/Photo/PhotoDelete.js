import React from 'react';
import styles from './PhotoDelete.module.css';
import { PHOTO_DELETE } from '../../api';
import { useFetch } from '../../Hooks/useFetch';
import Error from '../Helper/Error';

const PhotoDelete = ({ id }) => {
  const { request, error, loading } = useFetch();

  async function handleOnClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button disbled className={styles.delete}>
          Deletando
        </button>
      ) : (
        <button onClick={handleOnClick} className={styles.delete}>
          Deletar
        </button>
      )}
      <Error error={error} />
    </>
  );
};

export default PhotoDelete;
