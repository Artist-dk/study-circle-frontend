import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Api from '../../services/api'

import axios from "axios";

export default function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        // Api.logout(); 
        console.log("logged out")
        navigate('/account')
        try {
            axios.get('http://localhost:8081/logout',
                {
                    headers: {
                        Accept: "*/*",
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                }
            )
            .then(function (response) {
                console.log(response);
                navigate('/account')
            })
            .catch(function (error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error)
        }    
    }, []);
    return <div>Logged out successfully</div>;
}
