import React from 'react';
import '../style.css'

const Tugas8 = (props) =>{
    return (
        <div className="Box">
            <div className="isi">
            <h1>Data diri peserta kelas Reactjs</h1>
            </div>
            <ul>
                <li><b>Nama Lengkap :</b> {props.name}</li>
                <li><b>Email :</b> {props.email}</li>
                <li><b>Batch Pelatihan :</b> {props.batch}</li>
            </ul>  
        </div>
    );
}

export default Tugas8