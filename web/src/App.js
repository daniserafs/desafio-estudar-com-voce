import React from 'react';
import Routes from './routes/routes';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';

function App() {
    return (
        <>
        <Header />
        <Routes />
        <GlobalStyles />
        </>
        
    )
}

export default App;