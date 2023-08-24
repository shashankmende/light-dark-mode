// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {content: 'Light Mode', className: 'first_view_container'}

  update = () => {
    const {content} = this.state
    if (content === 'Light Mode') {
      this.setState(() => ({
        content: 'Dark Mode',
        className: 'second_view_container',
      }))
    } else {
      this.setState(() => ({
        content: 'Light Mode',
        className: 'first_view_container',
      }))
    }
  }

  render() {
    const {content, className} = this.state
    return (
      <div className="bg_container">
        <div className={className}>
          <h1 className="first_view_heading">Click To Change Mode</h1>
          <button type="button" onClick={this.update}>
            {content}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
