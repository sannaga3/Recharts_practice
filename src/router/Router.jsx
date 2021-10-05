import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Posts } from '../components/pages/Posts';
import { Top } from '../components/pages/Top';
import { HeaderOnly } from '../components/templates/HeaderOnly';
import { DefaultLayout } from '../components/templates/DefaultLayout';



export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route exact path='/posts'>
          <HeaderOnly>
            <Posts />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}