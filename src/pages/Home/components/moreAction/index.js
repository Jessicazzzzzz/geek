import React,{useState} from 'react'
import { Mask, Toast} from 'antd-mobile'
import styles from './index.module.scss'
import Icon from '@/components/Icon'
import { useDispatch, useSelector } from 'react-redux'
import { dislikeArticle, moreActions } from '@/store/home'

export default function MoreAction() {
  const [type,setType]= useState('normal')
  const dispatch = useDispatch()
  const moreAction = useSelector(state=>state.home.moreAction)
 
 const MaskClick=()=>{
    dispatch(moreActions({
      ...moreAction,
      visible:false,
      articleId:'',
     
    }))
    setType('normal')
 }
 const unlike=()=>{
  dispatch(dislikeArticle({target:moreAction.articleId}))
  MaskClick()
  Toast.show({
    content:'拉黑成功'
  })
 }
  return (
    <div className={styles.root}>
       <Mask visible={moreAction.visible} onMaskClick={MaskClick}>
        <div className='overlayContent'>
        <div className='more-action'>
          {
            type==='normal'&&(
              <>
              <div className='action-item' onClick={unlike}>
                <Icon type=''></Icon> 不感兴趣
              </div>
               <div className='action-item' onClick={()=> setType('junk')}>
               <span className='text'>反馈垃圾内容</span>
               <Icon type='icon-iconarrowr'></Icon> 
             </div>
              <div className='action-item'>
              <Icon type=''></Icon> 拉黑作者
            </div>
            </>
            )
          }
          {
            type==='junk'&&(
              <>
             
               <div className='action-item' onClick={()=>setType('normal')}>
               <Icon type='icon-iconarrowl'></Icon> 
               <span className='text'>反馈垃圾内容</span>
             </div>
              <div className='action-item' >
              旧文重复
            </div>
            <div className='action-item'>
             广告软文
            </div>
            <div className='action-item'>
             其他问题
            </div>
            </>
            )
          }
        </div>
        </div>
      </Mask>

    </div>
  )
}
