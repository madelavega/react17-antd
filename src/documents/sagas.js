import 'regenerator-runtime/runtime';
import { put, takeLatest } from 'redux-saga/effects';
import { actions, actionCreators } from './actions';
import Api from '../utils/rest/Api';

/**
 * Do a request to appEnvConfig.endpoints.documents endpoint (@see /config/{webpack_mode/services.js})
 * when the LOAD_DOCUMENTS_REQUESTED action is dispatched
 *
 * @param {object} action LOAD_DOCUMENTS_REQUESTED @see actions.LOAD_DOCUMENTS_REQUESTED
 * @returns {Generator<Promise<commander.ParseOptionsResult.unknown>|SimpleEffect<"PUT", PutEffectDescriptor<{payload: {data}, type: string}>>, void, *>}
 */
export const loadDocuments = function* (action) {
  const { payload: { filters, page, pageSize } } = action,
        //transform query parameters to be used for json server
        queryParams = {
          ...Object.keys(filters).reduce((acc, current) => ({
            ...acc,
            [`${current}_like`]: filters[current].join('|')
          }), {}),
          _page : page,
          _limit : pageSize
        }
  try {
    // eslint-disable-next-line no-undef
    const { data : documents, response } = (yield Api.get(appConfig.endpoints.documents, {
      queryParams,
    }));
    const total = response?.headers?.get("x-total-count");
    yield put(actionCreators.loadDocumentsDone(documents, total));
  } catch (ex) {
    yield put(actionCreators.loadDocumentsFailed( ex ));
  }
};

/**
 * Do a request to appEnvConfig.endpoints.documents endpoint (@see /config/{webpack_mode/services.js})
 * when the CREATE_DOCUMENT_REQUESTED action is dispatched
 *
 * @param {object} action CREATE_DOCUMENT_REQUESTED @see actions.CREATE_DOCUMENT_REQUESTED
 * @returns {Generator<Promise<commander.ParseOptionsResult.unknown>|SimpleEffect<"PUT", PutEffectDescriptor<{payload: {data}, type: string}>>, void, *>}
 */
export const createDocument = function* (action) {
  let { payload: { document : newDocument } } = action;
  try {
    // eslint-disable-next-line no-undef
    const { data } = (yield Api.post(appConfig.endpoints.documents, {
      headers :{'content-type': 'application/json'},
      body: JSON.stringify(newDocument),
    }));
    yield put(actionCreators.createDocumentDone(data));
  } catch (ex) {
    yield put(actionCreators.createDocumentFailed( ex ));
  }
};

export default [
  takeLatest(actions.loadDocumentsRequest.asyncAction(), loadDocuments),
  takeLatest(actions.createDocument.asyncAction(), createDocument),
];