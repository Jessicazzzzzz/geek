import React, { useEffect } from 'react'
import styles from './index.module.scss'
import Tabs from '@/components/Tabs'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {getChannelsData} from '@/store/home'

 function Home() {
  const dispatch = useDispatch()
  const getChannels = useSelector(state=>state.home.getHomeChannelInfo)

  const tabs = getChannels?.data?.channels || []
useEffect(()=>{
  dispatch(getChannelsData())
},[dispatch])

  return (
    <div className={styles.root}>
      <Tabs tabs={tabs}/>
    </div>
  )
}
export default Home