import React, {useEffect} from 'react';
import {Layout, PageHeader} from 'antd';
import DocumentsList from './List';
import DocumentsFilter from './Filter';
import {breadcrumbs as routes} from '../../routes';
import BreadcrumbItem from '../../utils/components/BreadcrumbItem';
import DocumentCreator from './DocumentCreator';
import './index.css';

const { Content } = Layout,
      breadcrumb = { routes , itemRender : BreadcrumbItem };

const Documents = ({
                     loadDocuments,
                     documents,
                     document,
                     filterChange,
                     filters,
                     createDocument,
                     creating,
                     loading,
                     total,
                     clearDocuments
                   }) => {

  //unmount...
  useEffect(() => {
    return () => {
      clearDocuments?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout style={{height: "100vh"}}>
      <DocumentsFilter
        filterChange={filterChange}
      />
      <Content>
        <Layout>
          <PageHeader
            className="site-page-header"
            title="Document Browser"
            breadcrumb={breadcrumb}
          />
          <DocumentCreator
            createDocument={createDocument}
            creating={creating}
            document={document}
          />
          <DocumentsList
            documents={documents}
            loadDocuments={loadDocuments}
            filters={filters}
            creating={creating}
            loading={loading}
            total={total}
          />
        </Layout>
      </Content>
    </Layout>
  )
}

export default Documents;