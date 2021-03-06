import { LOGIN, IReducer } from '@frameworks/web/redux/interfaces/iSession';
import { IToken, ILoginAction } from '@adapters/presenters/action-interfaces/ISession';

const initState: IToken = {
  token: ''
};

const session: IReducer = (state = initState, action: ILoginAction): IToken => {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.payload.token
      };
    default:
      return {
        ...state
      };
  }
}

export default session;