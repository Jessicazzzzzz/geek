import NavBar from '@/components/NavBar'
import styles from './index.module.scss'
import { useState, useEffect, useRef } from 'react'
import { List, DatePicker, Popup, Toast,Modal } from 'antd-mobile'
import dateFormat from '@/utils/dateformat'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getProfileData, updateProfileData,updatePhotoData } from '@/store/profile'
import classNames from 'classnames'
import EditorInput from './components/Editinput'
import EditList from './components/Editlist'
import dayjs from 'dayjs'
import { logoutData } from '@/store/login'
import { useNavigate } from 'react-router-dom'
const now = new Date()
export default function Editor() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const [visible4, setVisible4] = useState({
    visible: false,
    type: '',
  })
  const [visible2, setVisible2] = useState({
    visible: false,
    type: '',
  })
  const fileRef = useRef(null)
  // console.log(visible4)
  useEffect(() => {
    dispatch(getProfileData())
  }, [dispatch])

  const { profileInfo } = useSelector(
    (state) => ({ profileInfo: state.user.getProfileInfo }),
    shallowEqual
  )
  // console.log('profileInfo', profileInfo)
 
    const { birthday, gender, id, mobile, name, photo } = profileInfo || {}
  
 

 
  const handlepopClose = () => {
    setVisible(false)
    setVisible4({ visible: false, name: '' })
    setVisible2({visible:false,type:''})
  }

  const onCommit = async (type, value) => {
    // console.log(type,value);
     await dispatch(updateProfileData({ [type]: value }))
    Toast.show({
      content: 'update  Succeed',
    })
    handlepopClose()
  }
  const config = {
    photo:[{
      title:'拍照',
      onClick:()=>{
        console.log('拍照');
      }
    },
    {
      title:'本地选择',
      onClick:()=>{
        console.log('本地选择');
        fileRef.current.click()
      }
    },

  ],
    gender:[
      {
        title:'男',
        onClick:()=>{
          console.log('男');
          onCommit('gender',0)
        }
      },
      {
        title:'女',
        onClick:()=>{
          console.log('女');
          onCommit('gender',1)
        }
      },
    ]

  }

 const  onFileChange=async (e)=>{
   console.log(e.target.files);
   const file = e.target.files[0]
   const fd = new FormData()
   fd.append('photo',file)
  await dispatch(updatePhotoData(fd))
  Toast.show({
    content: 'update avatar Succeed',
  })
  Toast.show({
    content: 'update Succeed',
  })
  handlepopClose()
 }

const  onBirthdayChange=(e)=>{
const dateFormat =dayjs(e).format('YYYY-MM-DD')
console.log(dateFormat);
onCommit('birthday',dateFormat)

}

  const logout=()=>{
// 1.show pop
 Modal.confirm({
  content: 'are you sure to logout',
  onConfirm:async ()=>{
    // 2.delete token (redux and localstorage)
   await dispatch(logoutData())
   Toast.show({ content: 'logout succeed', position: 'bottom' })
   //3.jump to login
   navigate('/login')
  }
})

  }
  return (
    <div className={styles.root}>
      <NavBar>个人信息</NavBar>

      <div className="wrapper">
        <List className="profile-list">
          <List.Item
            onClick={() => setVisible2({visible:true,type:'photo'})}
            extra={
              <span className="avatar-wrapper">
                <img src={photo} alt="" className="img" />
              </span>
            }
          >
            avatar
          </List.Item>
          <List.Item
            onClick={() => {
              setVisible4({
                visible: true,
                type: 'name',
              })
            }}
            extra={name}
          >
            nickname
          </List.Item>
          <List.Item
            onClick={() => {
              setVisible4({
                visible: true,
                type: 'intro',
              })
            }}
            extra={
              <span
                className={classNames('intro', {
                  normal: profileInfo?.intro,
                })}
              >
                {profileInfo?.intro ? profileInfo.intro : 'empty'}
              </span>
            }
          >
            intro
          </List.Item>
        </List>

        <List className="profile-list">
          <List.Item onClick={() => {setVisible2({visible:true,type:'gender'})}} extra={!!gender ? 'female' : 'male'}>
            gender
          </List.Item>

          <List.Item
            onClick={() => {
              setVisible(true)
            }}
            extra={
              <DatePicker
                visible={visible}
                onClose={handlepopClose}
                value={new Date(birthday)}
                defaultValue={now}
                max={now}
                onConfirm={onBirthdayChange}
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

      <div className="logout" onClick={logout}>
        <button className="btn">退出登录</button>
      </div>
      {/* file upload */}
      <input type='file' style={{display:'none'}} ref ={fileRef} onChange={onFileChange}></input>
      <Popup
        visible={visible4.visible}
        position="right"
        bodyStyle={{ width: '100vw' }}
      >
        {visible4.visible && (
          <EditorInput
            onClose={handlepopClose}
            type={visible4.type}
            onCommit={onCommit}
          />
        )}
      </Popup>
      <Popup
        visible={visible2.visible}
        position="bottom"
        bodyStyle={{ width: '100vw' }}
        onMaskClick={handlepopClose}
       
      >
       {visible2.visible &&(
          <EditList type={visible2.type} config={config} 
          onClose={handlepopClose}
          />
       )}

      </Popup>
    </div>
  )
}
