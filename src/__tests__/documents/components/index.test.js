import React from 'react';
import { render, screen } from '../../../utils/test';
import Documents from '../../../documents/Container';
import { cleanup, fireEvent, waitFor } from '@testing-library/react';
import { data as documents } from '../../mockups/documents.json';

beforeEach(cleanup);
describe('Dcouments view', () => {
  it('Renders the documents view with initialState', () => {
    render(<Documents />, { initialState: {
        documentBrowser : {
          documents: [],
          total    : 0,
          loading  : false,
          filters  : {},
          creating : null, //first time null. Later it will be a Boolean
          error    : null,
          document : null
        }
      }
    });
    expect(screen.getByText(/No data/i)).toBeInTheDocument();
    expect(screen.getByTestId('documents-list')).toBeInTheDocument();
    expect(screen.getByTestId('new-document-input')).toBeInTheDocument();
    expect(screen.getByText(/Add New/i)).toBeInTheDocument();
    expect(screen.getByTestId('save-document')).toBeDisabled();
  });

  it('Renders the documents with a new document ready to be saved', async () => {
    render(<Documents />, { initialState: {
        documentBrowser : {
          documents: [],
          total    : 0,
          loading  : false,
          filters  : {},
          creating : null, //first time null. Later it will be a Boolean
          error    : null,
          document : null
        }
      }
    });

    const newDocumentInput = screen.getByTestId('new-document-input');
    fireEvent.change(newDocumentInput, { target: { value: "new document name" }});
    // await waitFor(() => screen.getByRole('alert'))

    expect(screen.getByTestId('save-document')).not.toBeDisabled();
  });

  it('Renders the document view with loaded documents', () => {
    render(<Documents />, { initialState: {
        documentBrowser : {
          documents: documents,
          total    : documents.length,
          loading  : false,
          filters  : {},
          creating : null, //first time null. Later it will be a Boolean
          error    : null,
          document : null
        }
      }
    });

    const documentsList = screen.getByTestId('documents-list');
    expect(documentsList.querySelectorAll('.ant-table-row')).toHaveLength(documents.length);
  });
})
