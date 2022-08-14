import React, { useState, useEffect, Fragment } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const CompanyCard = () => {
    const [company, setCompany] = useState([]);

    useEffect(() => {
        getPymes();
    }, []);

    useEffect(() => {}, [company]);

    function getPymes() {
        let pyms = [];
        const pymesCollectionRef = collection(db, "pymes");
        getDocs(pymesCollectionRef)
            .then((response) => {
                //console.log(response);
                pyms = response.docs.map((doc) => ({
                    data: doc.data(),
                    id: doc.id,
                }));
                setCompany(pyms);
            })
            .catch((error) => console.log(error));
    }

    return (
        <>
            <ul>
                {company.map((el) => (
                    <li key={el.id}>
                        <div>Código: {el.data.codigo}</div>
                        <div>Nit: {el.data.nit}</div>
                        <div>{el.data.nombre}</div>
                        <div>{el.data.razonSocial}</div>
                        <div>{el.data.telefono}</div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default CompanyCard;
