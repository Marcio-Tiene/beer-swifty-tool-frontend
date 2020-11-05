import { useHistory } from 'react-router';

import GetRecipes from './GetRecipes';

class Login extends GetRecipes {
  history = useHistory();

  async LogIn() {
    await this.LoadRecipes();

    this.history.push('/Dashboard');
  }
}

export default Login;
