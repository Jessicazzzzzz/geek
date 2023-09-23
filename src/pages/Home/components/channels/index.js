import React,{useEffect, useState} from 'react'
import styles from './index.module.scss'
import Icon from '@/components/Icon'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import { addChannelData, delChannelData, getHomeChannelAction} from '@/store/home'
import { getLocalChannels, hasToken,setLocalChannels } from '@/utils/storage'
import { Toast } from 'antd-mobile'


export default function Channels({ tabActiveIndex, onClose, onChannelClick }) {

 
  const getChannels = useSelector((state) => state.home.getHomeChannelInfo)
  const getAllChannels = useSelector((state) => state.home.getAllChannelsInfo)
  const recommendChannels = getAllChannels?.filter((item) => {
    return getChannels?.findIndex((v) => v.id === item.id) === -1
  }
 )
const dispatch = useDispatch()
const changeChannel= (index)=>{
  // if in editing mode ,not allowed change page
  if(editing) return
  onChannelClick(index)
  
  onClose()
}
//handle  editing
const [editing,setEditing] = useState(false)
  // console.log("recommend",recommendChannels);


  //delete channels
  const deleteChannel=async(item,index)=>{
      // console.log(item);
      if(getChannels.length<=4){
        Toast.show({
          
          content: '至少保留四个频道',
         })

        return
      }
  
     await dispatch(delChannelData(item.id))
     
          // highlight
  // delete tabActiveIndex > index 
  //delete tabActiveIndex < index
  if(tabActiveIndex<index){
    onChannelClick(index-1)
  }else if(tabActiveIndex===index){
        onChannelClick(0)
  }else{
    onChannelClick(index)
  }
    
  }
  const addChannel=async(item)=>{
   await dispatch(addChannelData(item))
  }
  return (
    <div className={styles.root}>
      <div className="channel-header">
        <Icon type="icon-pro-fail" onClick={onClose}></Icon>
      </div>
      <div className="channel-content">
        <div className={classNames("channel-item",{edit:editing})}>
          <div className="channel-item-header ">
            <span className="channel-item-title ">我的频道</span>
            <span className="channel-item-title-extra">{editing?'点击删除频道':'点击进入频道'}</span>
            <span className="channel-item-edit" onClick={()=>setEditing(!editing)}>{editing?'完成':'编辑'}</span>

          </div>
          <div className="channel-list">
            {getChannels?.map((item,index) => (
              <span className={classNames("channel-list-item",{ "selected":index===tabActiveIndex})} key={item.id} onClick={()=>{changeChannel(index)}}>
                {item.name}
               {editing && item.id!==0 && getChannels.length>4&&<Icon type="icon-pro-fail" onClick={()=>deleteChannel(item,index)}></Icon>} 
              </span>
            ))}
          </div>
          <div className="channel-item">
            <div className="channel-item-header ">
              <span className="channel-item-title">频道推荐</span>
              <span className="channel-item-title-extra">点击添加频道</span>
              <div className="channel-list">
                {recommendChannels?.map((item) => (
                  <span className="channel-list-item" key={item.id} onClick={()=>{addChannel(item)}}>
                    + {item.name}
                  </span>
                ))}


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
