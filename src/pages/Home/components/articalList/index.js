import React, { useEffect,useState } from 'react'
import styles from './index.module.scss'
import ArticleItem from '../articleItem'
import MyRequest from "@/utils/request";
import { useDispatch, useSelector } from 'react-redux';
import { getArticalData } from '@/store/home';
import { PullToRefresh,InfiniteScroll} from 'antd-mobile'
export default function ArticleList({channelsId,activeId}) {
  //  const [list,setList] = useState([])
  const  currentList = useSelector(state=>state.home.getArticlesInfo[channelsId])
  const [hasMore,setHasMore] = useState(true)
  const [loading,setLoading] = useState(false)

   
   const  dispatch = useDispatch()
  //  useEffect(()=>{
  //    const fetchData = async()=>{
  //   const res = await  MyRequest.get({
  //     url:'/articles',
  //     params:{
  //       channel_id: channelsId,
  //        timestamp:Date.now()
  //       }
  //     })
  //     // console.log('fetch data ',res);
  //     setList(res.data.results)
  //   }
  //   if(channelsId===activeId){
  //     fetchData()
  //   }
    
    
  // },[channelsId,activeId])
  
  useEffect(()=>{

    //redux has list ,do not request again
    if(currentList) return
    if(channelsId===activeId){
      dispatch(getArticalData({channelsId,timestamp:Date.now()}))
    }
    
  },[dispatch,channelsId,activeId,currentList])
  if(!currentList) return null
  console.log('lists',currentList);

  const onRefresh= async()=>{
    // 下拉刷新,pull to refresh need to  request
    try{
      await dispatch(getArticalData({channelsId,timestamp:Date.now()}))
    }finally{

      setHasMore(true)
    }

}
// 这个需要节流 throttle
const loadMore = async()=>{
    if(loading) return
    if(channelsId!== activeId) return
    // console.log('loading data');
    // no more data ,no need to request
    if(!currentList.timestamp){
      setHasMore(false)
      return
    }
    setLoading(true)
   
    try{
      await dispatch(getArticalData({channelsId,timestamp:currentList.timestamp,loadMoreData:true}))
    }finally{

      setLoading(false)
    }
   
    
  }
  return (
    <div className={styles.root}>
      <PullToRefresh onRefresh={onRefresh}>
     <div className='articles'>
      {
        currentList.list.map(item=>(<div className='article-item' key={item.art_id}>
        <ArticleItem article={item}/>
      </div>))
      }
      

     </div>
     </PullToRefresh>
     <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  )
}
