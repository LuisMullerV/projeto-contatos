import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { store } from './app/store'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'
import { Header } from './components/Header'
import {ContactsListPage} from './pages/ContactsPage'
import { NewContactPage } from './pages/NewContactPage'

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<ContactsListPage />} />
            <Route path="/novo" element={<NewContactPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}
