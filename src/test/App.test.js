/* eslint-disable testing-library/no-debugging-utils */
import { render,screen} from '@testing-library/react'
import App from '../App.js'
import Icon from '../components/Icon'
import '@testing-library/jest-dom'



test("app component",async()=>{
 render(<App/>)
  screen.getByTestId('hi')
  screen.getByText('hi,okay')
})




test('icon component', ()=>{
 const {debug}= render(<Icon/>) 
 debug()
 const iconCpn =screen.getByTestId('svg')

 expect(iconCpn).not.toBeEmptyDOMElement()
 expect(iconCpn).toBeInTheDocument()
 
})