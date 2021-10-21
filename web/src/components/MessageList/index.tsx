import styles from './styles.module.scss'

import logoImg from '../../assets/logo.svg'

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img className={styles.logo} src={logoImg} alt="DoWhile" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod repudiandae eum omnis quia minima tenetur vel</p>

          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/pauloreis7.png" alt="Paulo Reis" />
            </div>
            
            <span>Paulo Reis</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod repudiandae eum omnis quia minima tenetur vel</p>

          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/pauloreis7.png" alt="Paulo Reis" />
            </div>
            
            <span>Paulo Reis</span>
          </div>
        </li>
        
        <li className={styles.message}>
          <p className={styles.messageContent}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod repudiandae eum omnis quia minima tenetur vel</p>

          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/pauloreis7.png" alt="Paulo Reis" />
            </div>
            
            <span>Paulo Reis</span>
          </div>
        </li>
      </ul>
    </div>
  )
}