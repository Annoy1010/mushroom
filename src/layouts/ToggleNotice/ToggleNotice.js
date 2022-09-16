import classNames from 'classnames/bind'
import styles from './ToggleNotice.module.scss'

const cx = classNames.bind(styles)

function ToggleNotice({ status, description }) {
    console.log('ToggleNotice')
    return <div className={cx('wrapper')}>
        <h4 className={cx('status')}>{status}</h4>
        <span>{description}</span>
    </div>
}

export default ToggleNotice