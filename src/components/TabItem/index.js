// Write your code here
import './index.css'

const TabItem = props => {
  const {details, onClick, isActive} = props
  const {displayText, tabId} = details
  const selectedTab = isActive ? 'selectedTab' : ''
  const onClicker = () => {
    onClick(tabId)
  }
  return (
    <button type="button" className={`tab ${selectedTab}`} onClick={onClicker}>
      {displayText}
    </button>
  )
}

export default TabItem
