import React, { useEffect } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'
import Icon from '@/components/Icon'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import Image from '@/components/Img';
import { hasToken } from '@/utils/storage';
import { useSelector,useDispatch } from 'react-redux';
import { moreActions } from '@/store/home';
dayjs.extend(relativeTime)


export default function ArticleItem({article}) {
  // console.log(article);
  const hastoken = useSelector(state=>!!state.login.getAuthInfo.token)
  const dispatch = useDispatch()
  const moreAction = useSelector(state=>state.home.moreAction)
  const {cover:{type,images},title,aut_name,comm_count,pubdate}=article
  return (
    <div className={styles.root}>
    <div className={classNames('article-content',{t3:type===3,'none-mt':type===0})}>
    <h3>{title}</h3>
    {
      type!==0 &&(
        <div className='article-imgs'>
          {images.map((item,i)=>(
            <div className='article-img-wrapper' key={i}>
              {/* <img src={item} alt=''></img> */}
              <Image src={item}></Image>
            </div>
          ))}
        </div>
      )
    }
    </div>
    <div className={classNames('article-info',type===0?'none-mt':'')}>
     <span>{aut_name}</span>
     <span>{comm_count}comment</span>
     <span>{dayjs(pubdate).fromNow()}</span>
     <span className='close'>
      {
        hastoken&&<Icon type="icon-pro-fail" onClick={()=>{
          dispatch(moreActions({...moreAction,visible:true,articleId:article.art_id}))
        }}></Icon>
      }
      
     </span>
    </div>
    </div>
  )
}
