import React, { useEffect ,useState} from 'react'
import styles from './index.module.scss'
import Tabs from '@/components/Tabs'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {getChannelsData,getAllChannelsData} from '@/store/home'
import Icon from '@/components/Icon'
import { Popup} from 'antd-mobile'
import Channels from './components/channels'

 
 function Home() {
  const [channelsValue,setchannelsValue]= useState(false)
  const dispatch = useDispatch()
  const getChannels = useSelector(state=>state.home.getHomeChannelInfo)

  const tabs = getChannels || []
  console.log(tabs);
  const [active,setActive] = useState(0)
useEffect(()=>{
  dispatch(getChannelsData())
  dispatch(getAllChannelsData())
},[dispatch])

  return (
    <div className={styles.root}>
      <Tabs tabs={tabs} index={active} onChange={(e)=>{setActive(e)}}/>
      <div className='tabs-opration'>
        <Icon type="icon-pro-search"></Icon>
        <Icon type="icon-duoxuanzu" onClick={()=>{setchannelsValue(true)}}></Icon>
      </div>

      {/* channels pop up */}
      <Popup  style={{overflow:'auto'}}
              visible={channelsValue}
              onMaskClick={() => {
                setchannelsValue(false)
              }}
              position='left'
              bodyStyle={{ width: '100vw' }}
            >
           { channelsValue &&<Channels onClose={()=>{setchannelsValue(false)}}  tabActiveIndex={active} onChannelClick={(index)=>{setActive(index)}}></Channels>}
            </Popup>
    </div>
  )
}
export default Home