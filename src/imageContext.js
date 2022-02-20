import React ,{Component}from 'react'
const { Provider, Consumer } = React.createContext()
const ImageContext = React.createContext()

class ImageContextProvider extends Component {
  render() {
    return <Provider value={'image'}>{this.props.children}</Provider>
  }
}

export { ImageContextProvider, Consumer as ImageContextConsumer }
