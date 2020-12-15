import 'antd/dist/antd.css'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { wrapper, configStore } from '../redux/configstore'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Skeleton } from 'antd'

function MyApp({ Component, pageProps }) {
  const store = configStore(pageProps.initialReduxState)
  const persistor = persistStore(store)
  return(
    <Provider store={store}>
      <PersistGate loading={<Skeleton active />} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)
