import './App.scss'
import RouteButton from './components/RouteButton'
import { ReactComponent as SvgUser } from './images/user.svg'
import { ReactComponent as SvgSearch } from './images/search.svg'

function App() {
  return (
    <>
      <header id="main-header">
        <div id="left-header-container">
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
        </div>
        <div id="right-header-container">
          <div id="search-container">
            <input placeholder="поиск..." id="search-input" type="text" />
            <SvgSearch id="svg-search" style={{ fill: 'black' }} />
          </div>
          <div id="account-container">
            <SvgUser id="svg-user" style={{ fill: 'white' }} />
            <p id="profile-text">Войти</p>
          </div>
        </div>
      </header>
      <div id="main-container"></div>
    </>
  )
}

export default App
