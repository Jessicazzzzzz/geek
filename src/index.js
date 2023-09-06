import ReactDOM from 'react-dom/client'
import App from './App'
// 导入通用样式
// 需要安装包npm i sass
import  '@scss/index.scss';

import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <Provider store={store}>
    <App />
    </Provider>

)