import react, {useState,FC,createContext} from 'react';
import { TodoTypes } from '../class/TodoInterface';
import { ContextTypeTodos } from './count-context';

 export const Ctxt = createContext<ContextTypeTodos|undefined>(undefined);

export const ContextTest:FC = ({children}) =>{
    const [todos, setTodos] = useState<TodoTypes[]>([
        
    ]);
    return (
        <Ctxt.Provider
        value={{ todos, setTodos }}
        >
          {children}
        </Ctxt.Provider>
      );
}