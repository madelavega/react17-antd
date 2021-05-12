import { runSaga } from 'redux-saga';
import sinon from 'sinon';
import Api from '../../utils/rest/Api';
import { loadDocuments, createDocument } from '../../documents/sagas';
import { actionCreators } from '../../documents/actions';
import { data } from '../mockups/documents.json';
import {statusFiltersOptions} from '../../documents/consts';

describe( 'Testing sagas for Documents', () => {
  const statusFilter= [statusFiltersOptions[0].value, statusFiltersOptions[1].value].join('|'),
    queryParams = {
        page : 0,
        pageSize : 10,
        filters : {
          status : [statusFiltersOptions[0].value,statusFiltersOptions[1].value]
      }
    },
    expectedQueryParams = {
      _page : queryParams.page,
      _limit : queryParams.pageSize,
      status_like : statusFilter
  },
    doc = {
      documentName : 'doc1'
  };

  //if true, saga will works fine... else it will fail
  let mustFail;

  /*
      Wrapping the Api GET method to saga testing
   */
  sinon.stub(Api, 'get').callsFake(( url, { queryParams } ) => new Promise((resolve, reject) => {
    expect(queryParams).toEqual(expectedQueryParams);
    mustFail ? reject({error: {mustFail}}) : resolve({ data, response : { headers : { get : () => 3}} });
  }));

  /*
      Wrapping the Api POST method to saga testing
   */
  sinon.stub(Api, 'post').callsFake(() => new Promise((resolve, reject) => {
    mustFail ? reject({error: {mustFail}}) : resolve({data : doc });
  }));

  test('Load documents saga works successfully', async () => {
    mustFail = false;

    let dispatched = [],
        //with page data
          actionPayload = { payload: { filters : queryParams.filters, page : queryParams.page, pageSize: queryParams.pageSize } };

    await runSaga({
      dispatch: (action) => {
        return dispatched.push(action);
      },
      getState: () => ({}),
    }, loadDocuments, actionPayload);

    expect(dispatched).toEqual([actionCreators.loadDocumentsDone(data, data.length)]);
  });

  test('Load documents saga fails', async () => {
    mustFail = true;

    let dispatched = [],
        //with page data
        actionPayload = { payload: { filters: queryParams.filters, page : queryParams.page, pageSize: queryParams.pageSize } };

    await runSaga({
      dispatch: (action) => {
        return dispatched.push(action);
      },
      getState: () => ({}),
    }, loadDocuments, actionPayload);

    expect(dispatched).toEqual([actionCreators.loadDocumentsFailed({error: {mustFail}})]);
  });

  test('Create documents saga works successfully', async () => {
    mustFail = false;

    let dispatched = [],
        //with page data
        actionPayload = { payload: { document: doc } };

    await runSaga({
      dispatch: (action) => {
        return dispatched.push(action);
      },
      getState: () => ({}),
    }, createDocument, actionPayload);

    expect(dispatched).toEqual([actionCreators.createDocumentDone(doc)]);
  });


  test('Create documents saga fails', async () => {
    mustFail = true;

    let dispatched = [],
        //with page data
        actionPayload = { payload: { document: doc } };

    await runSaga({
      dispatch: (action) => {
        return dispatched.push(action);
      },
      getState: () => ({}),
    }, createDocument, actionPayload);

    expect(dispatched).toEqual([actionCreators.createDocumentFailed({error: {mustFail}})]);
  })
});