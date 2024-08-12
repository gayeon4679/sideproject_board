import Comment from '../assets/comment.svg';
import View from '../assets/View.svg';

const Read = function () {
  return (
    <div class="container">
      <div className="read__info">
        <div className="left-content">
          <span>번호:1</span>
          <span>작성자:---</span>
        </div>
        <div className="right-content">
          <img src={View}></img>0
        </div>
      </div>
      <div className="read__body">
        <div className="readTextbox">행복하세요</div>
        <div className="readContent">행복~~~~~~~~~~~</div>
      </div>
      <div>
        <div className="date">2022.10.27</div>
        <div className="list-button">
          <button className="yellowButton">목록</button>
        </div>
      </div>

      <div>
        1개의 댓글 <img src={Comment} />
      </div>
      <div className="readTextbox">댓글을 작성하려면 로그인 해주세요.</div>
    </div>
  );
};
export default Read;
