import "./CompanyCard.css";
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
                            <strong>Código: </strong>
                            {el.data.codigo}
                        </div>
                        <div>
                            <strong>Nit: </strong>
                            {el.data.nit}
                        </div>
                        <div>
                            <strong>Tel: </strong>
                            {el.data.telefono}
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default CompanyCard;
