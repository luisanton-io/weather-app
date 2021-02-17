import { Provider as StoreProvider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles';
import { store } from '../store';
import { theme } from './theme'
import Main from './Main'
import React, { useState } from 'react';
import SkinContext from '../contexts/SkinContext';
import { Skin } from '../models/skin';
import { CssBaseline } from '@material-ui/core';

export default () => {
  const [skin, setSkin] = useState(Skin.day)

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <SkinContext.Provider value={[skin, setSkin]}>

          <Main />
        </SkinContext.Provider>
      </ThemeProvider>
    </StoreProvider>
  )
}