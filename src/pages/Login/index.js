import NavBar from "@/components/NavBar";
import styles from './index.module.scss'

export default function Login(props) {

  return (
    <div  className={styles.root}>
   <NavBar>首页</NavBar>
    {/* login form  */}
    <div className="content">
      <h3>短信登录</h3>
      <form>
        <div className="input-item">
        <input type="text"></input>
        <div className="validate">手机号验证错误信息</div>
        </div>
        <div className="input-item">
        <input type="text"></input>
        <div className="validate">验证码验证错误信息</div>
        </div>
        
        <button type="submit" className="login-btn">登录</button>
      </form>

    </div>
   </div>
  )
}
