import React from 'react'
import Icon from '../../components/Icon'
import styles from './index.module.scss'
import classNames from 'classnames'
import {useNavigate} from 'react-router-dom'
import { createBrowserHistory } from "history";
// function withRouter(Cpn){
//   function ComponetnWithRouterProp(props){
//     const location = useLocation()
//     const navigate = useNavigate()
//     const params = useParams()
//     return <Cpn {...props} router={{location,navigate,params}}/>
//   }
//   return ComponetnWithRouterProp

// } 
 function NavBar({children,extra,onLeftClick,className}) {
  const navigate = useNavigate()
  // console.log(onLeftClick);
  const history = createBrowserHistory()
  const back =()=>{
    if(onLeftClick){
      onLeftClick()
    }else{
      // navigate(-1)
      history.back()
    }
  
   
  }
  

  return (
    <div className={classNames(styles.root,className)}>
    <div className="left">
     <Icon type='icon-iconarrowl' onClick={back}/>
    </div>
    <div className="title">{children}</div>
    <div className="right">{extra}</div>
   </div>
  )
}
// export default withRouter(NavBar)
export default NavBar
