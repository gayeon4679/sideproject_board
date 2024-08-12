import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
const Signup = function () {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    nickname: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    nickname: '',
    email: '',
  });

  // 유효성 검사 함수들
  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9]{4,20}$/;
    if (!usernameRegex.test(username)) {
      return '아이디는 특수문자를 제외한 4~20자리여야 합니다.';
    }
    return '';
  };

  // 닉네임 유효성 검사 함수
  // 닉네임은 2~10자리의 영문자 또는 숫자만 허용 (특수문자 제외)
  const validateNickname = (nickname) => {
    const nicknameRegex = /^[a-zA-Z0-9]{2,10}$/;
    if (!nicknameRegex.test(nickname)) {
      return '닉네임은 특수문자를 제외한 2~10자리여야 합니다.';
    }
    return ''; // 유효하면 빈 문자열 반환 (오류 없음)
  };

  // 이메일 유효성 검사 함수
  // 이메일 형식에 맞아야 함 (간단한 정규식 사용)
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return '이메일 형식이 올바르지 않습니다.';
    }
    return ''; // 유효하면 빈 문자열 반환 (오류 없음)
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if (!passwordRegex.test(password)) {
      return '비밀번호는 8~16자 영문 대소문자, 숫자, 특수문자를 포함해야 합니다.';
    }
    return '';
  };

  // 입력값이 변경될 때마다 호출되는 함수
  const handleChange = (e) => {
    const { name, value } = e.target;

    // 입력값을 업데이트
    setFormData({ ...formData, [name]: value });

    // 입력된 필드에 대해 즉시 유효성 검사 실행
    let error = '';
    if (name === 'username') error = validateUsername(value);
    if (name === 'password') error = validatePassword(value);
    if (name === 'nickname') error = validateNickname(value);
    if (name === 'email') error = validateEmail(value);

    // 오류 메시지를 업데이트
    setErrors({ ...errors, [name]: error });
  };

  // 폼이 제출될 때 호출되는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지가 새로고침 되는 것을 방지

    // 모든 필드에 대해 유효성 검사를 실행
    const usernameError = validateUsername(formData.username);
    const passwordError = validatePassword(formData.password);
    const nicknameError = validateNickname(formData.nickname);
    const emailError = validateEmail(formData.email);

    // 오류가 있으면 오류 메시지를 상태에 설정하고 폼 제출을 중단
    if (usernameError || passwordError || nicknameError || emailError) {
      setErrors({
        username: usernameError,
        password: passwordError,
        nickname: nicknameError,
        email: emailError,
      });
      return;
    }

    // 오류가 없으면 폼이 정상적으로 제출됨
    console.log('Form Submitted', formData);
  };

  const navigate = useNavigate();

  const handleListClick = () => {
    navigate('/');
  };

  return (
    <div className="signup">
      <table className="signup__table">
        <tr>
          <td className="signup__id">아이디</td>
          <td>
            <input
              type="text"
              name="username"
              className="textBox"
              placeholder="아이디를 입력해주세요"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <div className="signup-error">{errors.username}</div>
            )}
          </td>
        </tr>
        <tr>
          <td className="signup__pass">비밀번호</td>
          <td>
            <input
              type="password"
              name="password"
              className="textBox"
              placeholder="비밀번호를 입력해주세요"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="signup-error">{errors.password}</div>
            )}
          </td>
        </tr>
        <tr>
          <td className="signup__nick">닉네임</td>
          <td>
            <input
              type="text"
              name="nickname"
              className="textBox"
              placeholder="닉네임을 입력해주세요"
              value={formData.nickname}
              onChange={handleChange}
            />
            {errors.nickname && (
              <div className="signup-error">{errors.nickname}</div>
            )}
          </td>
        </tr>
        <tr>
          <td className="email">이메일</td>
          <td>
            <input
              type="text"
              name="email"
              className="textBox"
              placeholder="이메일을 입력해주세요"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="signup-error">{errors.email}</div>}
          </td>
        </tr>
      </table>

      <div className="signup__button">
        <button className="yellowButton">가입</button>
        <button className="grayButton" onClick={handleListClick}>
          목록
        </button>
      </div>
    </div>
  );
};
export default Signup;
