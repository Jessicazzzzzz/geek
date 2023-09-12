import NavBar from '@/components/NavBar'
import styles from './index.module.scss'
import { useState, useEffect } from 'react'
import { List, DatePicker , Popup} from 'antd-mobile'
import dateFormat from '@/utils/dateformat'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getProfileData } from '@/store/profile'
import classNames from 'classnames'
import EditorInput from './components/Editinput'
const now = new Date()
export default function Editor() {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const [visible4, setVisible4] = useState(false)
  useEffect(() => {
    dispatch(getProfileData())
  }, [dispatch])

  const { profileInfo } = useSelector(
    (state) => ({ profileInfo: state.user.getProfileInfo }),
    shallowEqual
  )
  console.log('profileInfo', profileInfo)
  const { birthday, gender, id, mobile, name, photo } = profileInfo

  const handleClose =()=>{
    setVisible(true)
  }
  const handlepopClose =()=>{
    setVisible4(false)
  }
  return (
    <div className={styles.root}>
      <NavBar>个人信息</NavBar>

      <div className="wrapper">
        <List className="profile-list">
          <List.Item
           onClick={() => {
            setVisible4(true)
          }}
            extra={
              <span className="avatar-wrapper">
                <img src={photo} alt="" className="img" />
              </span>
            }
          >
            avatar
          </List.Item>
          <List.Item onClick={() => {}} extra={name}>
            nickname
          </List.Item>
          <List.Item
            onClick={() => {}}
            extra={
              <span
                className={classNames('intro', {
                  normal: profileInfo?.intro,
                })}
              >
                {profileInfo?.intro?profileInfo.info:'empty'}
              </span>
            }
          >
            intro
          </List.Item>
        </List>

        <List className="profile-list">
          <List.Item onClick={() => {}} extra={!!gender ? 'female' : 'male'}>
            gender
          </List.Item>

          <List.Item
            onClick={() => {
              setVisible(true)
            }}
            extra={
              <DatePicker
                visible={visible}
                onClose={handleClose}
                value={new Date(birthday)}
                max={now}
                min={new Date('1900-1-1')}
                title="chose birthday"
              >
                {(value) => dateFormat(value?.toDateString(), 'd/M/y')}
              </DatePicker>
            }
          >
            birthday
          </List.Item>
        </List>
      </div>

      <div className="logout">
        <button className="btn">退出登录</button>
      </div>
      
      <Popup
              visible={visible4}
              position='right'
              bodyStyle={{ width: '100vw' }}
            >
              {<EditorInput onClose = {handlepopClose} />}
            </Popup>
    </div>

  )


  
}
