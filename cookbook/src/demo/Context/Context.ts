import { createContext, Dispatch, SetStateAction } from 'react';

type ContextType = [string, Dispatch<SetStateAction<string>>];

const Context = createContext<ContextType>(['', () => {}]);

export default Context;
