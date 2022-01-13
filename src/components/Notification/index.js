// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  console.log(props)
  return (
    <div className="container-notification">
      {children}
      <div className="close-button-container">
        <GrFormClose className="close-button" />
      </div>
    </div>
  )
}

export default Notification
