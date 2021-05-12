import { actions } from './actions.js';

const initialState = {
  documents : [],
  total     : 0,
  loading   : false,
  filters   : {},
  creating  : null, //first time null. Later it will be a Boolean
  error     : null,
  document  : null
};

const reducer = (state = initialState, action) => {
  const actionTypes = {
    [actions.loadDocumentsRequest.asyncAction()]: () => {
      return {
        ...state,
        loading: true,
      };
    },
    [actions.loadDocumentsRequest.asyncDoneAction()]: () => {
      const { payload: { documents, total } = {} } = action;
      return {
        ...state,
        loading: false,
        documents,
        total
      };
    },
    [actions.loadDocumentsRequest.asyncFailedAction()]: () => {
      return {
        ...state,
        loading: false,
      };
    },
    [actions.createDocument.asyncAction()]: () => {
      return {
        ...state,
        creating: true,
        error   : null
      };
    },
    [actions.createDocument.asyncDoneAction()]: () => {
      const { payload: { document } = {} } = action;
      return {
        ...state,
        creating: false,
        error: null,
        document,
        total : ++state.total,
        documents : [document, ...state.documents]
      };
    },
    [actions.createDocument.asyncFailedAction()]: () => {
      const { payload: { error } = {} } = action;
      return {
        ...state,
        creating: false,
        error
      };
    },
    [actions.filterChange.syncAction()]: () => {
      const { payload: { group, values } = {} } = action;
      return {
        ...state,
        filters : {
          ...state.filters,
          [group] : values
        },
      };
    },
    [actions.clearDocuments.syncAction()]: () => ({...initialState}),
  };
  return actionTypes[action.type] ? actionTypes[action.type]() : state;
};

export default reducer;