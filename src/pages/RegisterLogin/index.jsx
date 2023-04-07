import { Radio } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './index.module.scss';
import { loginUser, registerUser } from '../../store/apiCall';

const Auth = () => {
  const [toggle, setToggle] = useState(false);
  const [dataDk, setDataDk] = useState({});
  const [dataDn, setDataDn] = useState({});
  const [value, setValue] = useState('Japan');
  const dispatch = useDispatch();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    registerUser({ ...dataDk, country: value }, dispatch);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    loginUser(dataDn, dispatch);
  };

  return (
    <div className={style.register__wrapper}>
      <div
        className={
          !toggle
            ? style.container
            : `${style.container} ${style.right_panel_active}`
        }
      >
        <div className={`${style.form_container} ${style.sign_up_container}`}>
          <form>
            <h1>Create Account</h1>
            {/* <div className={style.social_container}></div> */}
            <span>or use your email for registration</span>
            <input
              onChange={(e) =>
                setDataDk({ ...dataDk, company_name: e.target.value })
              }
              type='text'
              placeholder='Name Company'
            />
            <input
              onChange={(e) => setDataDk({ ...dataDk, email: e.target.value })}
              type='email'
              placeholder='Email'
            />
            <input
              onChange={(e) =>
                setDataDk({ ...dataDk, user_name: e.target.value })
              }
              type='text'
              placeholder='Username'
            />
            <input
              onChange={(e) => setDataDk({ ...dataDk, phone: e.target.value })}
              type='text'
              placeholder='Phone'
            />
            <input
              onChange={(e) =>
                setDataDk({ ...dataDk, password: e.target.value })
              }
              type='password'
              placeholder='Password'
            />
            <input type='password' placeholder='Comfirm password' />
            <Radio.Group
              onChange={onChange}
              value={value}
              style={{ marginBottom: '10px' }}
            >
              <Radio value='Japan'>Japan</Radio>
              <Radio value='Viet Name'>Viet Nam</Radio>
            </Radio.Group>
            <button onClick={handleSignUp}>Sign Up</button>
          </form>
        </div>
        <div className={`${style.form_container} ${style.sign_in_container}`}>
          <form>
            <h1>Sign in</h1>
            <div className={style.social_container}></div>
            <span>or use your account</span>
            <input
              onChange={(e) => setDataDn({ ...dataDn, email: e.target.value })}
              type='email'
              placeholder='Email'
            />
            <input
              onChange={(e) =>
                setDataDn({ ...dataDn, password: e.target.value })
              }
              type='password'
              placeholder='Password'
            />
            <a href='/'>Forgot your password?</a>
            <button onClick={handleSignIn}>Sign In</button>
          </form>
        </div>
        <div className={style.overlay_container}>
          <div className={style.overlay}>
            <div className={`${style.overlay_panel} ${style.overlay_left}`}>
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => setToggle(!toggle)}
                className={style.ghost}
                id='signIn'
              >
                Sign In
              </button>
            </div>
            <div className={`${style.overlay_panel} ${style.overlay_right}`}>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                onClick={() => setToggle(!toggle)}
                className={style.ghost}
                id='signUp'
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
