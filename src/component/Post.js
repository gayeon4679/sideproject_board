import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';
const Post = function () {
  const navigate = useNavigate();

  const handleListClick = () => {
    navigate('/');
  };

  return (
    <div className="post">
      <table className="post__table">
        <tr>
          <td className="post__title-cell">제목</td>
          <td>
            <input
              className="textBox"
              type="text"
              placeholder="제목을 입력하세요"
            ></input>
          </td>
        </tr>
        <tr>
          <td className="post__content-cell">내용</td>
          <td>
            <textarea
              className="post__content-textbox"
              placeholder="내용을 입력하세요"
            ></textarea>
          </td>
        </tr>
      </table>

      <div className="post__button">
        <button className="yellowButton">작성</button>
        <button onClick={handleListClick} className="grayButton">
          목록
        </button>
      </div>
    </div>
  );
};
export default Post;
