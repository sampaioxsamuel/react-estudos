import { useState } from 'react';
import { COMMENT_POST } from '../../api';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import { useFetch } from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import styles from './PhotoCommentsForms.module.css';

const PhotoCommentsForms = ({ id, setComments, single }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForms;
