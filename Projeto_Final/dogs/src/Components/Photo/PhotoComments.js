import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForms from './PhotoCommentsForms';
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef(null);

  const { login } = useContext(UserContext);

  useEffect(() => {
    commentsSection.current.scrollTop = -commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForms id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
