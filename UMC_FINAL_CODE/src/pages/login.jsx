import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions  } from '../redux/actions/authActions';
import axios from 'axios';
import '../login.css';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [ID, setID] = useState('');
  const [pw, setPw] = useState('');
  const [IDValid, setIDValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const { performLogin } = authActions;
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);
  const navigate = useNavigate();

  useEffect(() => {
    if (IDValid && pwValid) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [IDValid, pwValid]);

  const handleID = (e) => {
    setID(e.target.value);
    const regex = /^[a-zA-Z0-9]{4,12}$/;
    setIDValid(regex.test(e.target.value));
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex = /^[a-zA-Z0-9]{4,}$/;
    setPwValid(regex.test(e.target.value));
  };
  const saveCredentialsToLocalStorage = (id, token) => {
    localStorage.setItem('userID', id); // ID 저장
    localStorage.setItem('userToken', token); // 토큰 저장
  };
  const onClickConfirmButton = () => {
    if (IDValid && pwValid) {
      setLoading(true); // API 호출 전 로딩 시작
      setMsg('Loading...'); // Loading 메시지 출력

      const body = {
        id: ID,
        pw: pw
      };

      axios.post('http://localhost:3000/user/login', body)
        .then(res => {
          setLoading(false); // 통신 완료 후 로딩 종료
          setTimeout(() => setMsg(''), 1500); // Loading 메시지 1.5초 후 삭제

          const code = res.status;
          
          if (code === 400) {
            alert('비어있는 내용입니다.');
          } else if (code === 200) {
            console.log("로그임 됨");
            dispatch(performLogin(res.data.result.userId)); // 로그인 성공 시 Redux dispatch
            alert('로그인되었습니다.');
            console.log(res.data)//->이렇게 하면 서버에서 받은 정보 확인 가능
            //console.log(res.data.result.userId)//오오 이제 제대로 나온다ㅠㅠ
            const { userId: id, AccessToken: token } = res.data.result;

            saveCredentialsToLocalStorage(id, token); // 로컬 스토리지에 저장
            navigate('/');

          }
        })
        .catch(err => {
          console.error('로그인 오류', err);
          alert('로그인 실패 (아이디, 비밀번호 불일치)');
          navigate('/');
        });
    } else {
      if (!IDValid) {
        alert('올바른 ID를 입력해주세요.');
      } else if (pw.length === 0) {
        alert('비밀번호를 입력해주세요.');
      } else if (!pwValid) {
        alert('영문 대소문자와 숫자를 4자 이상 입력해주세요.');
      }
    }
  };

  return (
    <div className="page">
      <div className="titleWrap">
        아이디와 비밀번호를
        <br />
        입력해주세요
      </div>

      <div className="contentWrap">
        <div className="inputTitle">ID</div>
        <div className="inputWrap">
          <input
            className="input"
            type="text"
            placeholder="ID"
            value={ID}
            onChange={handleID}
            id="username"
            name="username"
          />
        </div>
        <div className="errorMessageWrap">
          {!IDValid && ID.length > 0 && (
            <div>올바른 아이디를 입력해주세요.</div>
          )}
        </div>

        <div style={{ marginTop: '26px' }} className="inputTitle">
          비밀번호
        </div>
        <div className="inputWrap">
          <input
            className="input"
            type="password"
            placeholder="영문 대소문자와 숫자를 4자 이상"
            value={pw}
            onChange={handlePw}
            id="password"
            name="password"
          />
        </div>
        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && (
            <div>영문 대소문자와 숫자를 4자 이상 입력해주세요.</div>
          )}
        </div>
      </div>

      <div>
        <button
          onClick={onClickConfirmButton}
          disabled={notAllow || loading}
          className="bottomButton"
        >
          확인
        </button>
      </div>
      <div>{msg}</div>
    </div>
  );
};

export default Login;