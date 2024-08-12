import './Login.css';
const Login = function () {
  return (
    <div className="login">
      <table className="login__table">
        <tr>
          {' '}
          <td>아이디</td>
          <td>
            <input
              type="text"
              className="textBox"
              placeholder="아이디를 입력해주세요"
            />
          </td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td>
            <input
              type="text"
              className="textBox"
              placeholder="비밀번호를 입력해주세요"
            />
          </td>
        </tr>
      </table>
      <div className="login__button">
        <button className="yellowButton">로그인</button>
      </div>
    </div>
  );
};
export default Login;
