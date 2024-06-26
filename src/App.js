import './App.scss'
import RouteButton from './components/RouteButton'

function App() {
  return (
    <>
      <header id="main-header">
        <div id="logo-container">
          <p id="logo-text">SOON</p>
          <img id="logo" src="logo.svg" alt="logo" />
        </div>
        <div id="route-container">
          <RouteButton text={'Новосибирск'} />
          <RouteButton text={'Меню'} />
          <RouteButton text={'Ресторан'} />
          <RouteButton text={'Акции'} />
        </div>
        <div id="account-container">
          <img src="user.svg" alt="" />
        </div>
      </header>
      <div id="main-container"></div>
    </>
  )
}

export default App
