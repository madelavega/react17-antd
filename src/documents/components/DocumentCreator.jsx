import React, { useEffect, createRef, useState } from 'react';
import {Input, Form, Button, Col, Row, Card, notification, Tooltip } from 'antd';
import {PlusOutlined} from '@ant-design/icons';

const {Item : FormItem} = Form;

const List = ({
                createDocument,
                creating,
                error,
                document
  }) => {

  const [form] = Form.useForm(),
       [creatingDocument, setCreatingDocument] = useState(false),

        nameFile = createRef(),

        openNotification = (error) => {
          notification[error ? 'error' : 'success']({
            message: error
              ? 'There was an error saving the document'
              : 'Document saved!',
            description: !error && `The document ${document?.documentName} has been saved`
          });
        },

        valueChange = ({target}) => {
          if(target?.value?.length) {
            setCreatingDocument(true);
          } else {
            setCreatingDocument(false);
          }
        },

        onFinish = (document) => {
          createDocument(document);
          setCreatingDocument(false);
          form.resetFields();
        };

  useEffect(() => {
    //the first time creating is null
    if(creating === false) {
      openNotification(error);
    } else if(creating === null) {
      nameFile.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [creating]);

  return (
    <Card style={{ margin: '0 24px 24px' }}>
      <Form onFinish={onFinish} form={form}>
        <Row>
          <Col flex="auto">
            <FormItem name={['document', 'documentName']} label="Doc. Name" style={{width: "50%", marginBottom: '0px'}}>
              <Input ref={nameFile} onChange={valueChange} placeholder="New document..."/>
            </FormItem>
          </Col>
          <Col>
            <FormItem style={{marginBottom: '0px'}}>
              <Tooltip placement="left" title={creatingDocument ? 'Save the new document' : 'Type the document name to enable this button'}>
                <Button disabled={!creatingDocument} type="primary" loading={creating || false /*null protection*/} icon={<PlusOutlined/>} htmlType="submit">Add New</Button>
              </Tooltip>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}

export default List;