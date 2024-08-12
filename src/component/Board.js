import './Board.css';
import SearchIcon from '../assets/Search_alt.svg';
import RightIcon from '../assets/Expand_right.svg';
import LeftIcon from '../assets/Expand_left.svg';
import { useNavigate, Link } from 'react-router-dom';

const Board = function () {
  const navigate = useNavigate();

  const handleWriteClick = () => {
    navigate('/post');
  };

  return (
    <div className="board">
      <div className="search">
        <img src={SearchIcon} alt="Search" />
        <input type="text" className="search__textbox" placeholder="Search" />
      </div>
      <div className="board__container">
        <table className="board__table">
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
          <tr>
            <td>1</td>
            <td className="title">
              <Link to="/Read">게시물 제목</Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td className="title">dkssudgktpdy</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td className="title">rlarkdus</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td className="title"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td className="title"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td className="title"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td className="title"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td className="title"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td className="title"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div className="board__controls">
        <div className="board__icon">
          <img src={LeftIcon}></img>
          <img src={RightIcon}></img>
        </div>
        <div className="board__button">
          <button className="yellowButton" onClick={handleWriteClick}>
            글쓰기
          </button>
        </div>
      </div>{' '}
    </div>
  );
};
export default Board;
