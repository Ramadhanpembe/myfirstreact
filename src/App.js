import React, { Component, Suspense } from 'react';
import { Helmet } from "react-helmet";
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';

const TITLE="APP";
const LoginLayout = React.lazy(() => import("./components/LoginLayout"));
const MainLayout = React.lazy(() => import("./components/MainLayout"));


// const CreateAccount = React.lazy(() => import("./components/CreateAccount"));

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading..</div>
);

function App() {
  return (
    <div className="App">
      <>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
      </>
      <HashRouter>
        <Suspense fallback={loading}>
          <Switch>
            <Route
              path="/L/"
              name="Layout"
              render={(props) => <LoginLayout {...props}/>}
            />
            <Route
              path="/M/"
              name="MainLayout"
              render={(props) => <MainLayout {...props}/>}
            />
          </Switch>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
