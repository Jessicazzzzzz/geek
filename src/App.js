
import { Button,Toast} from 'antd-mobile'
import  './box.css'

export default function App() {
  return (
    <div>
      <Button color='primary' fill='solid'  onClick={() => {
              Toast.show({
                icon: 'loading',
                content: '加载中…',
              })
            }}
              > loading</Button>
          <div className='box'>hello</div>
    </div>
  )
}
