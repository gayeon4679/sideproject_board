import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Set.css';

const Set = function () {
  const navigate = useNavigate();
  const handleListClick = () => {
    navigate('/');
  };
  return (
    <div className="set">
      <table className="set__table">
        <tr>
          <td className="set__id">아이디</td>
          <td>
            <div className="readTextbox">읽기아이디</div>
          </td>
        </tr>
        <tr>
          <td className="set__pass">비밀번호</td>
          <td>
            <input type="text" className="textBox"></input>
          </td>
        </tr>
        <tr>
          <td className="set__nick">닉네임</td>
          <td>
            <input type="text" className="textBox"></input>
          </td>
        </tr>
        <tr>
          <td className="set__email">이메일</td>
          <td>
            <div className="readTextbox">읽기 이메일</div>
          </td>
        </tr>
      </table>
      <div className="set__button">
        <button className="yellowButton">완료</button>
        <button className="grayButton" onClick={handleListClick}>
          목록
        </button>
      </div>
    </div>
  );
};
export default Set;
