// Write your code here
import './index.css'

const AppItem = props => {
  const {details} = props
  return (
    <div className="appItem">
      <img src={details.imageUrl} alt={details.appName} className="appImage" />
      <h1>{details.appName}</h1>
    </div>
  )
}

export default AppItem
