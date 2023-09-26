import React,{useState,useRef, useEffect} from 'react'
import classnames from 'classnames';
import styles from './index.module.scss';
import Icon from '../Icon';

export default function Image({src,className}) {
  const [isError,setisError] = useState(false)
  const [isLoading,setLoading] = useState(true)
  const imgRef = useRef(null)
  useEffect(()=>{
   const observer = new IntersectionObserver(([{isIntersecting}])=>{
    if(isIntersecting){
      // 图片在可视区
      imgRef.current.src = imgRef.current.dataset.src
      observer.unobserve(imgRef.current)
    }

   })

   observer.observe(imgRef.current)
  },[])
  return (
    <div className={classnames(styles.root,className)}>
     {isLoading &&(
      <div className= 'image-icon'>
        <Icon type=''></Icon>
      </div>
     )}
      {isError &&(
      <div className= 'image-icon'>
        <Icon type=''></Icon>
      </div>
     )}
       {!isError &&(
       <img alt=''  data-src={src} ref={imgRef}
       onLoad={()=>setLoading(false)}
       onError={()=>setisError(true)}
       ></img>
     )}


    </div>
  )
}
