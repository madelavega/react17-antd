import { actionCreators, actions } from '../../documents/actions';
import { data as documents } from '../mockups/documents.json';

describe('Documents actions', () => {
  afterEach(() => {
  });
  it('should create an action to call documents list', () => {
    const payload = {
      filters : {status : ['received']},
      page : 1,
      pageSize : 10
    };
    const expectedAction = {
      type   : actions.loadDocumentsRequest.asyncAction(),
      payload,
    };
    expect(actionCreators.loadDocuments(payload.filters, payload.page, payload.pageSize)).toEqual(expectedAction);
  });

  it('should create an action to load documents list', () => {
    const payload = {
      documents,
      total : documents.length
    };
    const expectedAction = {
      type   : actions.loadDocumentsRequest.asyncDoneAction(),
      payload,
    };
    expect(actionCreators.loadDocumentsDone(documents, documents.length)).toEqual(expectedAction);
  });

  it('should create an action to manage documents list failed requests', () => {
    const payload = {
      error : 'error'
    };
    const expectedAction = {
      type   : actions.loadDocumentsRequest.asyncFailedAction(),
      payload,
    };
    expect(actionCreators.loadDocumentsFailed(payload)).toEqual(expectedAction);
  });

  it('should create an action to create one document', () => {
    const payload = {
      document : documents[0]
    };
    const expectedAction = {
      type   : actions.createDocument.asyncAction(),
      payload,
    };
    expect(actionCreators.createDocument(payload)).toEqual(expectedAction);
  });

  it('should create an action to manage documents creation success callback', () => {
    const payload = {
      document : documents[0]
    };
    const expectedAction = {
      type   : actions.createDocument.asyncDoneAction(),
      payload,
    };
    expect(actionCreators.createDocumentDone(payload.document)).toEqual(expectedAction);
  });

  it('should create an action to manage documents creation failure callback', () => {
    const payload = {
      error : 'error'
    };
    const expectedAction = {
      type   : actions.createDocument.asyncFailedAction(),
      payload,
    };
    expect(actionCreators.createDocumentFailed(payload)).toEqual(expectedAction);
  });

  it('should create an action to change document filters', () => {
    const payload = {
      group : 'status',
      values : ['1', '2']
    };
    const expectedAction = {
      type   : actions.filterChange.syncAction(),
      payload,
    };
    expect(actionCreators.filterChange(payload.group, payload.values)).toEqual(expectedAction);
  });

  it('should create an action to clear documents', () => {
    const expectedAction = {
      type   : actions.clearDocuments.syncAction()
    };
    expect(actionCreators.clearDocuments()).toEqual(expectedAction);
  });

});
