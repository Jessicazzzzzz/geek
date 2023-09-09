/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react'
import App from '../App.js'
import Icon from '../components/Icon'
import NavBar from '../components/NavBar/index.js'
import '@testing-library/jest-dom'

test('app component', async () => {
  render(<App />)
})

test('icon component', () => {
  const { debug } = render(<Icon />)
  debug()
  const iconCpn = screen.getByTestId('svg')
  expect(iconCpn).not.toBeEmptyDOMElement()
  expect(iconCpn).toBeInTheDocument()
})
test('navbar component',()=>{
  const {debug} = render(<NavBar/>)
  debug()
 

})