import Icon from '@/components/Icon'


import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUserData } from '@/store/profile'

const Profile = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getUserData())
  },[dispatch])

 const user = useSelector(state=>state.user.getUserInfo)

  
  return (
    <div className={styles.root}>
      <div className="profile">
        <div className="user-info">
          <div className="avatar">
            <img  alt="" src={user?.photo}/>
          </div>
          <div className="user-name">{user?.name}</div>
          <Link to={'/home/profile/editor'}>
              个人信息<Icon type=""></Icon>
          </Link>
        </div>

        <div className="read-info">
          
          <Icon type="iconbtn_readingtime" />
          今日阅读
          <span>10</span>
          分钟
        </div>

        <div className="count-list">
          <div className="count-item">
            <p>{user?.art_count}</p>
            <p>动态</p>
          </div>
          <div className="count-item">
            <p>{user?.follow_count}</p>
            <p>关注</p>
          </div>
          <div className="count-item">
            <p>{user?.fans_count}</p>
            <p>粉丝</p>
          </div>
          <div className="count-item">
            <p>{user?.like_count}</p>
            <p>被赞</p>
          </div>
        </div>

        <div className="user-links">
          <div className="link-item">
            <Icon type="icon-xiaoxi_48" />
            <div>消息通知</div>
          </div>
          <div className="link-item">
            <Icon type="icon-zhibodianzan_48" />
            <div>收藏</div>
          </div>
          <div className="link-item">
            <Icon type="icon-wode_liulanjilu_48" />
            <div>浏览历史</div>
          </div>
          <div className="link-item">
            <Icon type="icon-wode_wentifankui_48" />
            <div>我的作品</div>
          </div>
        </div>
      </div>
      <div className="more-service">
        <h3>更多服务</h3>
        <div className="service-list">
          <div
            className="service-item"
           
          >
            <Icon type="icon-wode_wentifankui_48" />
            <div>用户反馈</div>
          </div>
          <div
            className="service-item"
            
          >
            <Icon type="icon-jiqirentoubu" />
            <div>小智同学</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile