// Write your code here
import './index.css'

const AppItem = props => {
  const {details} = props
  return (
    <li key={details.appId}>
      <img src={details.imageUrl} alt={details.appName} className="appImage" />
      <p className="appName">{details.appName}</p>
    </li>
  )
}

export default AppItem
