import "./CompanyCard.css";
import React, { useState, useEffect, Fragment } from "react";
import {
    collection,
    getDocs,
    orderBy,
    limit,
    query,
    startAfter,
} from "firebase/firestore";
import { db } from "../Firebase";

const CompanyCard = () => {
    const [company, setCompany] = useState([]);
    const [lastDocs, setLastDocs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        getPymes();
    }, []);

    const pymesCollectionRef = collection(db, "pymes");

    const updateState = (response) => {
        const isResponseEmpty = response.size === 0;
        console.log(response.size);
        if (!isResponseEmpty) {
            const pyms = response.docs.map((doc) => ({
                data: doc.data(),
                id: doc.id,
            }));
            setCompany((previous) => [...previous, ...pyms]);
            const lasts = response.docs[response.docs.length - 1];
            setLastDocs(lasts);
        } else {
            setCompleted(true);
        }
        setLoading(false);
    };

    function getPymes() {
        const q = query(pymesCollectionRef, limit(20), orderBy("codigo"));
        getDocs(q)
            .then((response) => updateState(response))
            .catch((error) => console.log(error));
    }

    function fetchMore() {
        setLoading(true);
        const q = query(
            pymesCollectionRef,
            limit(20),
            orderBy("codigo"),
            startAfter(lastDocs)
        );
        getDocs(q)
            .then((response) => {
                updateState(response);
            })
            .catch((error) => console.log(error));
    }

    return (
        <>
            <ul className="container">
                {company.map((el) => (
                    <li key={el.id} className="items">
                        <div
                            style={{
                                fontSize: "30px",
                                fontWeight: "bold",
                                color: "#e53535",
                                margin: "20px 0 5px",
                            }}
                        >
                            {el.data.nombre}
                        </div>
                        <div style={{ fontSize: "12px", marginBottom: "20px" }}>
                            {el.data.razonSocial}
                        </div>
                        <div>
                            <strong>Nit: </strong>
                            {el.data.nit}
                        </div>
                        <div>
                            <strong>Tel: </strong>
                            {el.data.telefono}
                        </div>
                        <div>
                            <strong>Código: </strong>
                            {el.data.codigo}
                        </div>
                    </li>
                ))}
            </ul>
            {loading && <h1>Loading...</h1>}
            {!loading && !completed && (
                <button onClick={() => fetchMore()}>Cargar más</button>
            )}
            {completed && <h1>No más resultados por mostrar</h1>}
        </>
    );
};

export default CompanyCard;
