import Documents from './components';
import { connect } from 'react-redux';
import { actionCreators } from './actions';
import moment from 'moment';
import {statusFiltersOptions} from './consts';

const mapStateToProps = ({documentBrowser}) => documentBrowser;

const mapDispatchToProps = dispatch => {
  return {
    loadDocuments   : (filters, page, pageSize) => dispatch(actionCreators.loadDocuments(filters, page, pageSize)),
    clearDocuments  : () => dispatch(actionCreators.clearDocuments()),
    filterChange    : (group, values) => dispatch(actionCreators.filterChange(group, values)),
    createDocument  : (document) => {
      //updating new document with more data
      document = {
        ...document,
        dataModified : moment().format('YYYYDDMM'),
        status : statusFiltersOptions[Math.floor(Math.random() * statusFiltersOptions.length-1)].value
      }
      dispatch(actionCreators.createDocument(document))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Documents);