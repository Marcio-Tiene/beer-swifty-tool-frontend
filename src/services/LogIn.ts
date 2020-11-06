import { useHistory } from 'react-router';

import GetRecipes from './GetRecipes';

class Login {
  history = useHistory();
  getRecipes = new GetRecipes();

  async LogIn() {
    await this.getRecipes.LoadRecipes();

    this.history.push('/Dashboard');
  }
}

export default Login;
