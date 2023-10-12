'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface StateType {
  loading: boolean;
  error: string;
  totalDistance: number;
  totalTime: number;
  path?: Array<string[]>;
  startPoint: string;
  startPointError?: boolean;
  dropOffPoint: string;
  dropOffPointError?: boolean;
}

interface ValueType {
  state: StateType;
  setState: Dispatch<SetStateAction<StateType>>;
}

const defaultState: StateType = {
  loading: false,
  error: '',
  totalDistance: 0,
  totalTime: 0,
  startPoint: '',
  dropOffPoint: '',
};

const defaultValue: ValueType = {
  state: defaultState,
  setState: () => null,
};

export const AppContext = createContext<ValueType>(defaultValue);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<StateType>(defaultState);
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContextHook = () => {
  const context = useContext(AppContext);
  const { state, setState } = context;

  const loading = state.loading;
  const path = state.path;
  const totalDistance = state.totalDistance;
  const totalTime = state.totalTime;
  const startPoint = state.startPoint;
  const dropOffPoint = state.dropOffPoint;
  const startPointError = state.startPointError;
  const dropOffPointError = state.dropOffPointError;

  const setError = (msg: string) => {
    setState((prev) => ({
      ...prev,
      error: msg,
    }));
  };

  const toggleLoading = () => {
    setState((prev) => ({
      ...prev,
      loading: !prev.loading,
    }));
  };

  const setPathDetail = ({
    path,
    totalDistance,
    totalTime,
  }: {
    path: Array<string[]>;
    totalDistance: number;
    totalTime: number;
  }) => {
    setState((prev) => ({
      ...prev,
      path,
      totalDistance,
      totalTime,
    }));
  };

  const setLocation = (type: 'start' | 'drop', value: string) => {
    setState((prev) => ({
      ...prev,
      ...(type === 'start' ? { startPoint: value } : { dropOffPoint: value }),
    }));
  };

  const setInputError = (type: 'start' | 'drop', value: boolean) => {
    setState((prev) => ({
      ...prev,
      ...(type === 'start'
        ? { startPointError: value }
        : { dropOffPointError: value }),
    }));
  };

  const resetData = () => {
    setState({
      loading: false,
      path: [],
      error: '',
      totalDistance: 0,
      totalTime: 0,
      startPoint: '',
      dropOffPoint: '',
    });
  };

  return {
    loading,
    path,
    totalDistance,
    totalTime,
    startPoint,
    dropOffPoint,
    startPointError,
    dropOffPointError,
    setError,
    toggleLoading,
    setPathDetail,
    resetData,
    setLocation,
    setInputError,
  };
};
