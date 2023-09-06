import ReactDOM from 'react-dom/client'
import App from './App'
// 导入通用样式
// 需要安装包npm i sass
import  '@scss/index.scss';

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
 
    <App />

)