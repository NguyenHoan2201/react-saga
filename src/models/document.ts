export interface Document {
    id: string;
    title: string;
    type: DocType;
    description: string;
    author: string;
}

export const DocType= {
    PDF: 'pdf',
    DOCX: 'docx'
}

export type DocType = keyof typeof DocType;