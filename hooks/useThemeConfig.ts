import { useContext } from 'react';
import { ConfigContext } from '../contexts/general/ConfigContext';

// ==============================|| CONFIG - HOOKS  ||============================== //

const useConfig = () => useContext(ConfigContext);

export default useConfig;
