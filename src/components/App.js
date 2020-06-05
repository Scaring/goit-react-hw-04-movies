import React, { Fragment, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './Nav/Nav';
import Loader from '../components/Loader/Loader';

const HomePage = lazy(() => import('../pages/Home'));
const Details = lazy(() => import('../pages/Details'));
const MoviesPage = lazy(() => import('../pages/Movies'));

const App = () => {
  return (
    <Fragment>
      <Nav />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:movieId" component={Details} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={HomePage} />
        </Switch>
      </Suspense>
    </Fragment>
  );
};

export default App;
