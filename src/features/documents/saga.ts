import { call, fork, put, take, takeLatest } from "redux-saga/effects";
import { ListResponse } from "../../models/common";
import { Document } from "../../models/document";
import { FilterDocuments, getDocuments } from "../../services/document";
import { documentAction } from "./slice";

function* fetchDocuments({ payload }: any) {
    try {
        console.log('----------------------------------------');
        console.log(payload)
        const response: ListResponse<Document> = yield call(getDocuments, payload);
        console.log(response)
        yield put(documentAction.getDocumentsSuccess(response));
    } catch (err) {
        yield put(documentAction.getDocumentsFailed());
    }
}

export default function* documentsSaga() {
    yield takeLatest(documentAction.getDocuments.type, fetchDocuments);
}