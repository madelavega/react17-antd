import {actionCreators} from '../../documents/actions';
import reducer from '../../documents/reducer';
import { data as documents } from '../mockups/documents.json';

const initialState = {
        documents : [],
        total     : 0,
        loading   : false,
        filters   : {},
        creating  : null, //first time null. Later it will be a Boolean
        error     : null,
        document  : null
      },
      document = {
        documentName : 'doc1'
      };

describe('Documents reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should clear documents data', () => {
    expect(reducer({
      documents,
      total: document.length,
    }, actionCreators.clearDocuments())).toEqual(initialState);
  });

  it('should handle loadDocumentsRequest without previous data', () => {
    expect(
      reducer({...initialState}, actionCreators.loadDocuments()),
    ).toEqual(
      {
        ...initialState,
        loading: true,
      },
    );
  });

  it('should handle loadDocuments request success callback', () => {
    expect(
      reducer({...initialState}, actionCreators.loadDocumentsDone(documents, documents.length)),
    ).toEqual(
      {
        ...initialState,
        loading: false,
        documents,
        total: documents.length
      },
    );
  });

  it('should handle loadDocuments request failure callback', () => {
    expect(
      reducer({
        ...initialState,
        loading: true
      }, actionCreators.loadDocumentsFailed({error: true})),
    ).toEqual(
      {
        ...initialState,
        loading: false,
      },
    );
  });



  it('should handle single document creation', () => {
    expect(
      reducer({...initialState}, actionCreators.createDocument(document)),
    ).toEqual(
      {
        ...initialState,
        creating: true,
        error   : null
      },
    );
  });

  it('should handle single document creation callback without previous data', () => {
    expect(
      reducer({...initialState}, actionCreators.createDocumentDone(document)),
    ).toEqual(
      {
        ...initialState,
        creating: false,
        error: null,
        document,
        total : 1,
        documents : [document]
      },
    );
  });

  it('should handle single document creation callback with previous data', () => {
    expect(
      reducer({
        ...initialState,
        documents,
        total : documents.length
      }, actionCreators.createDocumentDone(document)),
    ).toEqual(
      {
        ...initialState,
        creating: false,
        document,
        total : documents.length + 1,
        documents : [document, ...documents]
      },
    );
  });

  it('should handle single document creation failure', () => {
    expect(
      reducer({
        ...initialState,
      }, actionCreators.createDocumentFailed({error: true})),
    ).toEqual(
      {
        ...initialState,
        creating: false,
        error: true
      },
    );
  });


  it('should change filters', () => {
    expect(
      reducer({
        ...initialState,
      }, actionCreators.filterChange('group',['a', 'b'])),
    ).toEqual(
      {
        ...initialState,
        filters : {
          group : ['a', 'b']
        }
      },
    );
  });
});