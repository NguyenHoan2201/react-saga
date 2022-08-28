import { RootState } from './../../store/index';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListResponse } from "../../models/common";
import { Document } from "../../models/document";
import { FilterDocuments } from "../../services/document";

interface DocumentsParams{
    data: Document[];
    opts: FilterDocuments;
    loading: boolean;
    count: number;
}
interface DocumentsState {
    documents: DocumentsParams
}
const initialState: DocumentsState = {
    documents: {
        data: [],
        opts: {
            base: 0,
            limit: 25,
            filter: '',
            orderBy: '',
            order: '',
        },
        count: 0,
        loading: false
    }
}
const docSlice = createSlice({
    name: 'document',
    initialState,
    reducers: {
        getDocuments(state, action: PayloadAction<FilterDocuments>) {
            console.log('in slice', action.payload)
            state.documents.opts = action.payload;
            state.documents.loading = true;
        },
        getDocumentsSuccess(state, action: PayloadAction<ListResponse<Document>>) {
            state.documents.data = action.payload.data;
            state.documents.count  = action.payload.count;
            state.documents.loading = false;
        },
        getDocumentsFailed(state) {
            state.documents.loading = false;
        }
    }
})

export const documentAction = docSlice.actions;

export const getDocuments = (state: RootState)=> state.document.documents.data;

const documentsReducer = docSlice.reducer;
export default documentsReducer;