import actionGenerators from '../utils/redux/actionGenerators';

const ACTION_PREFIX = 'DOCUMENTS',
      LOAD_DOCUMENTS = 'LOAD_DOCUMENTS',
      CREATE_DOCUMENT = 'CREATE_DOCUMENT',
      FILTER_CHANGE = 'FILTER_CHANGE',
      CLEAR_DOCUMENTS = 'CLEAR_DOCUMENTS';

export const actions = {
  /**
   * Load documents
   */
  loadDocumentsRequest : actionGenerators(ACTION_PREFIX, LOAD_DOCUMENTS),

  /**
   * save new document
   */
  createDocument : actionGenerators(ACTION_PREFIX, CREATE_DOCUMENT),

  /**
   * filter change
   */
  filterChange : actionGenerators(ACTION_PREFIX, FILTER_CHANGE),

  /**
   * Clear documents
   */
  clearDocuments : actionGenerators(ACTION_PREFIX, CLEAR_DOCUMENTS),
};

export const actionCreators = {
  /**
   * Fires the LOAD_DOCUMENTS_REQUESTED action to load documents data with the provided filters
   *
   * @param {Object} filters
   * @param {Number} page
   * @param {Number} pageSize
   * @returns {{payload: {date}, type: string}}
   */
  loadDocuments: (filters = {}, page = 0, pageSize = 10) => ({
    type   : actions.loadDocumentsRequest.asyncAction(),
    payload: { filters, page, pageSize },
  }),

  /**
   * Fires the LOAD_DOCUMENTS_DONE action with the loaded documents data, after doing a request
   *
   * @param documents
   * @returns {{payload: {documents, total}, type: string}}
   */
  loadDocumentsDone: (documents, total) => ({
    type   : actions.loadDocumentsRequest.asyncDoneAction(),
    payload: { documents, total },
  }),

  /**
   * Fires the LOAD_DOCUMENTS_FAILED action, when something wrong happens when LOAD_DOCUMENTS_REQUESTED is dispatched
   * @param data
   * @returns {{payload: {data}, type: string}}
   */
  loadDocumentsFailed: ({ error, ...rest }) => ({
    type   :  actions.loadDocumentsRequest.asyncFailedAction(),
    payload: { error, ...rest },
  }),

  /**
   * Fires the CREATE_DOCUMENT_REQUESTED action to save a new document
   *
   * @param {object} document
   * @returns {{payload: {document}, type: object}}
   */
  createDocument: (document) => ({
    type   : actions.createDocument.asyncAction(),
    payload: { document },
  }),

  /**
   * Fires the CREATE_DOCUMENT_DONE action with the created document data
   *
   * @param {object} document
   * @returns {{payload: {document}, type: object}}
   */
  createDocumentDone: (document) => ({
    type   : actions.createDocument.asyncDoneAction(),
    payload: { document },
  }),

  /**
   * Fires the CREATE_DOCUMENT_FAILED action, when something wrong happens when CREATE_DOCUMENT_REQUESTED is dispatched
   * @param data
   * @returns {{payload: {data}, type: string}}
   */
  createDocumentFailed: ({ error, ...rest }) => ({
    type   : actions.createDocument.asyncFailedAction(),
    payload: { error, ...rest },
  }),

  /**
   * Fires the FILTER_CHANGE action, when the documents criteria have changes
   * @param {String} group
   * @param {[String]} values
   */
  filterChange: (group, values) => ({
    type   : actions.filterChange.syncAction(),
    payload: { group, values },
  }),

  /**
   * Clear documents data
   * @returns {{type: *}}
   */
  clearDocuments : () => ({
    type   : actions.clearDocuments.syncAction(),
  })
};