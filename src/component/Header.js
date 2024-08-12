import './Header.css';
import Setting from '../assets/Setting_fill.svg';
import { Link } from 'react-router-dom';
const Header = function ({ isLoggedIn, handleLogout }) {
  return (
    <header>
      <div className="header__inner">
        <div className="header__logo">
          <Link to="/">
            Board <em>site</em>
          </Link>
        </div>

        <nav className="header__menu">
          {isLoggedIn ? (
            <ul className="header__login">
              <li>___님 안녕하세요!</li>
              <li>
                <Link to="#" onClick={handleLogout}>
                  로그아웃
                </Link>
              </li>
              <li>
                <Link to="/Set">
                  <img className="set-icon" src={Setting}></img>
                </Link>
              </li>
              <li></li>
            </ul>
          ) : (
            <ul className="header__logout">
              <li>
                <a
                  href="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  네이버 로그인
                </a>
              </li>
              <li>
                <a
                  href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.co.kr%2Fsearch%3Fq%3D%25EB%25A1%259C%25EA%25B7%25B8%25EC%259D%25B8%26sca_esv%3D0e526ec8824269be%26sxsrf%3DADLYWIKjn89Of58ob5voNP5x_AAiug3TPg%3A1722923187490%26source%3Dhp%26ei%3Ds7ixZt_fG4PAvr0P0bq74AI%26iflsig%3DAL9hbdgAAAAAZrHGw5DCp23emm9UspYnKg5xU5nVE1b2%26ved%3D0ahUKEwifhcGE1d-HAxUDoK8BHVHdDiwQ4dUDCBk%26uact%3D5%26oq%3D%25EB%25A1%259C%25EA%25B7%25B8%25EC%259D%25B8%26gs_lp%3DEgdnd3Mtd2l6IgnroZzqt7jsnbgyBBAAGAMyBBAAGAMyCBAAGIAEGLEDMgQQABgDMgsQABiABBixAxiDATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESOQXUN0BWIkWcAV4AJABAJgBkwGgAd8MqgEEMC4xM7gBA8gBAPgBAZgCC6ACiAaoAgrCAgcQIxgnGOoCwgILEC4YgAQYsQMYgwHCAggQLhiABBixA8ICBhAAGAMYCsICChAAGIAEGLEDGArCAg0QABiABBixAxiDARgKwgIHEAAYgAQYCsICCBAAGIAEGKIEwgIFEC4YgATCAgsQLhiABBjHARivAZgDCZIHAzUuNqAHhlw%26sclient%3Dgws-wiz&ec=futura_gmv_dt_so_72586115_e&hl=ko&passive=true&ifkv=AdF4I74wJIBR7mJKrAy7gdrw9zgOsJm2vUaWllbcDo3GBHm8vdzmJVlIk1b6ehWAjqeKZAW0z4fxtA&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  구글 로그인
                </a>
              </li>
              <li>
                <Link to="/Login">로그인</Link>
              </li>
              <li>
                <Link to="/Signup">회원가입</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
      <div className="line"></div>
    </header>
  );
};
export default Header;
