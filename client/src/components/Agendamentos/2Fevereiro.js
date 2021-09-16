
import React from "react";
import '../Carrossel/Carrossel.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";


export const Fevereiro = () => {

    const [dados, setDados] = useState([])
    const mes = 1;

    useEffect(() => {

        axios.get('http://localhost:3000/api/agendamentos/2')
            .then(res => {
                // console.log(res)
                setDados(res.data)

            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];


    return (



        <div className='Carrossel'>


            <h1 key={meses[mes]}> {meses[mes]} </h1>

            {dados.map((dados) => {
                // console.log(dados.data[6])
                return (


                    <div className='agenda'>

                        <ul>

                            {dados.data[5] == '0' && dados.data[6] == '2' ?

                                <li key={dados.id_agendamento}><Button
                                    buttonStyle='btn--agenda'
                                    buttonSize='btn--xg'
                                >
                                    <h2>{dados.data[8]}{dados.data[9]} de {meses[mes]}</h2>
                                    <h3>Unidade: {dados.id_escritorio = 1 ? 'São Paulo' : 'Santos'} </h3>
                                </Button></li>

                                : null}

                        </ul>

                    </div>



                )
            })}



        </div>




    )
}