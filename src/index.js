import ReactDOM from 'react-dom/client'
import store from './store'
import App from './App'

// 导入通用样式
// 需要安装包npm i sass
import  '@scss/index.scss';

import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <Provider store={store}>
    <App />

    </Provider>

)