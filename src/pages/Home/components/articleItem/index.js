import React, { useEffect } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'
import Icon from '@/components/Icon'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)


export default function ArticleItem({article}) {
  // console.log(article);
  
 
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
              <img src={item} alt=''></img>
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
      <Icon type="icon-pro-fail"></Icon>
     </span>
    </div>
    </div>
  )
}
