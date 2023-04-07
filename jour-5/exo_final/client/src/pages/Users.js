import React, {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import axios from 'axios';

const Users = () => {
    const [students, setStudents] = useState([]);

    // useeffect avec axios
    useEffect(() => {
        axios.get('http://localhost:3030/users')
        .then(res => {
            setStudents(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const handleDelete = (id) => {
axios.delete(`http://localhost:3030/users/${id}`)
        .then(res => {
            setStudents(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="users">
            {
                students.map((student, index) => {
                    return (
                        <div key={index}>
                            <h2>{student.name}</h2>
                            <p>{dayjs(student.date).format('DD/MM/YYYY')}</p>
                            <button className="delete-btn" onClick={() => handleDelete(student.id)}>Supprimer</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Users;