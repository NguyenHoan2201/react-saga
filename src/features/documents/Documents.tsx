import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { documentAction, getDocuments } from "./slice";

export default function Documents(){

    const dispatch = useAppDispatch();
    const documents = useAppSelector(getDocuments);

    useEffect(()=>{
        dispatch(documentAction.getDocuments({ limit: 20, base: 0, filter: '', orderBy: ''}))
    }, [])

    const fetchDocs = ()=>{
        dispatch(documentAction.getDocuments({ limit: 20, base: 0, filter: '', orderBy: '', order: 'desc'}))
    }
    return (
        <>
        <div>
            List of all documents
        </div>
        <button onClick={fetchDocs}>cloic</button>
            {
                documents.map((v, i)=>{
                    return (
                        <div key={i}>{JSON.stringify(v)}</div>
                    )
                })
            }
        </>
    )
}