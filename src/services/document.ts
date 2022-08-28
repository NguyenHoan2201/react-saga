import { DocType, Document } from "../models/document";

export interface FilterDocuments {
    base: number;
    limit: number;
    filter: string;
    orderBy: string;
    order?: ''|'asc'|'desc'
}
export async function getDocuments( opt: FilterDocuments ){
    const documents: Document[] = [];
    for(let i=opt.base; i< opt.base + opt.limit; i++) {
        documents.push({
            id: `docid-${i}`,
            title: `doctitle-${i}`,
            type: DocType.DOCX as DocType,
            author: 'nghoan',
            description: 'a fake document'
        })
    }
    return {
        data: documents, count: 200
    }
}