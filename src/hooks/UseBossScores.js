import { useState, useEffect } from "react";
import axios from "axios";

export function useBossScores(requestedName) {
    const [bossScores, setBossScores] = useState([]);

    useEffect(() => {
        axios
            .get(`http://37.120.167.218:8083/api/bosses?name=${requestedName}&filter=true`)
            .then((res) => {
                const bosses = res.data;
                setBossScores(bosses);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [requestedName]);

    return bossScores;
}