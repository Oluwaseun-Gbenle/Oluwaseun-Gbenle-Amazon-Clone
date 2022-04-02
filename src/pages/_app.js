import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';
import { SessionProvider } from "next-auth/react"

const App = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
    <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  </SessionProvider>
  )
}

export default App

