import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Login.module.scss'

const cx = classNames.bind(styles)

function Home() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [successSubmit, setSuccessSubmit] = useState(false)

    const handleLogin = () => {
        if (username === 'namlun' && password === '19092002') {
            setSuccessSubmit(true)
        } 
    }

    return <div className={cx('wrapper')}>
        {successSubmit === true ? (
            <div className={cx('login-wrapper')}>
                <h4 className={cx('status')}>Đăng nhập thành công !!!</h4>
                <span className={cx('description')}>Cùng xem phần sau có gì nhé ^^</span>
            </div>
        ) : (
            <div className={cx('login')}>
                <div className={cx('username')}>
                    <h4 className={cx('label')}>Tên đăng nhập</h4>
                    <input 
                        className={cx('input')} 
                        value={username} 
                        type="text"
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className={cx('password')}>
                    <h4 className={cx('label')}>Mật khẩu</h4>
                    <input 
                        className={cx('input')} 
                        value={password} 
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button 
                    className={cx('submit-btn')}
                    onClick={handleLogin}
                >
                    Đăng nhập
                </button>
        </div>
        )}
    </div>
}

export default Home