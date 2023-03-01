
import HookUseEffect from '../components/HookUseEffect'
import HookUseReducer from '../components/HookUseReducer'
import HookUseState from '../components/HookUseState'
import HookUseMemo from '../components/HookUseMemo';
import HookUseLayoutEffect from '../components/HookUseLayoutEffect';

// useRef
import HookUseRef from '../components/HookUseRef';

//useContext
import { useContext } from 'react';
import { SomeContext } from '../components/HookUseContext';

//useCallback
import HookUseCallback from '../components/HookUseCallback';

//custom hook 
import HookCustom from '../components/HookCustom';


const Home = () => {

  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      HookUseState
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseLayoutEffect />
      <HookCustom />
    </div>
  )
}

export default Home