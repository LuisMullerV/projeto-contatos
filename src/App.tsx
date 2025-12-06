import { Provider } from 'react-redux'
import { store } from './app/store'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'
import { Header } from './components/Header'
import { ContactsPage } from './pages/ContactsPage'

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <ContactsPage />
      </ThemeProvider>
    </Provider>
  )
}
