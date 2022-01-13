// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'

import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const Success = () => (
    <Notification>
      <div className="icon-container">
        <AiFillCheckCircle className=" icon success-color" />
      </div>
      <div className="content-container">
        <h1 className="heading success-heading">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )
  const ErrorPage = () => (
    <Notification>
      <div className="icon-container">
        <RiErrorWarningFill className="icon error-color" />
      </div>
      <div className="content-container">
        <h1 className="heading error-heading">Error</h1>
        <p className="description">
          Sorry, You are not authorized to have access to delete the file.
        </p>
      </div>
    </Notification>
  )
  const WarningNotification = () => (
    <Notification>
      <div className="icon-container">
        <MdWarning className="icon warning-color" />
      </div>
      <div className="content-container">
        <h1 className="heading warning-heading">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions.
        </p>
      </div>
    </Notification>
  )
  const Info = () => (
    <Notification>
      <div className="icon-container">
        <MdInfo className="icon info-color" />
      </div>
      <div className="content-container">
        <h1 className="heading info-heading">Info</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )
  return (
    <div className="background-container">
      <h1 className="mainheading">Alert Notifications</h1>
      {Success()}
      {ErrorPage()}
      {WarningNotification()}
      {Info()}
    </div>
  )
}

export default AlertNotifications
