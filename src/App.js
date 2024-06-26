import './App.scss'
import RouteButton from './components/RouteButton'
import { ReactComponent as SvgUser } from './images/user.svg'
import { ReactComponent as SvgSearch } from './images/search.svg'
import { ReactComponent as SvgLine } from './images/Line.svg'
import { ReactComponent as SvgSmiley } from './images/Smiley.svg'

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
      <div id="main-container">
        <div id="left-main-container">
          <div id="main-text-container">
            <div id="secondary-logo-container">
              <p id="logo-text">SOON</p>
              <img id="logo" src="logo.svg" alt="logo" />
            </div>
            <p>Быстрая доставка из ресторана домой</p>
          </div>
          <div id="secondary-text-container">
            <h1></h1>
            <p></p>
          </div>
        </div>
        <div id="right-main-container">
          <div id="list-container">
            <SvgSmiley id="svg-smiley" />
            <SvgLine id="svg-line" />
            <p id="list-container-paragraph">Преимущества SOON:</p>
            <ul id="right-main-list">
              <li className="main-right-list-item">
                Быстрая доставка в течение 30 минут
              </li>
              <li className="main-right-list-item">
                Лучшие блюда из ресторана
              </li>
              <li className="main-right-list-item">Доступно по всему городу</li>
              <li className="main-right-list-item">
                Вкусные предложения каждый день
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
