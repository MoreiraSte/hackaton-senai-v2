import React, { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot, where } from 'firebase/firestore'
import { db } from "../firebase";
import '../styles/forum.css';
import robo1 from "../assets/robo1.png"
import storage from '../store'

const Forum = () => {
    const [id, setId] = useState(storage.atual)
    const [data, setData] = useState([])

    function sendQuestion() {
        console.log('1')
        if (!storage.logado) {
            return window.location.href = "/login";
        }
        console.log('2')

    }

    useEffect(() => {
        onSnapshot(query(collection(db, 'Question'), where('product', '==', id)), (querySnapshot) => {
            const temp = []
            querySnapshot.docs.map((doc) => {
                temp.push({
                    id: doc.id,
                    resposta: doc.data()['answer'],
                    data: doc.data()['date'],
                    pergunta: doc.data()['question'],
                })
            })
            setData(temp)
        })
    }, [])

    return (
        <div className="background">
            <div className="conteudo">
                {
                    id != "" ?
                        <div className="descritivo">
                            <div className="imagem">
                                <img src={robo1} alt="img" />
                            </div>
                            <div className="information">
                                <div className="nome">
                                    <h2>Titulo</h2>
                                </div>
                                <br></br>
                                <div className="price">
                                    <h4>preço</h4>
                                </div>
                                <br></br>
                                <div className="descr">
                                    <p>descrição</p>
                                </div>
                            </div>
                        </div>
                        :
                        <></>
                }


                <div className="container">
                    <div className="perguntas100">
                        <div className="perguntas80">
                            {
                                data.length > 0 && id != undefined ?
                                    data.map((item) => (
                                        <div className="item" key={`${item.data}/${item.pergunta}`}>
                                            <div className="data"><p>{item.data}</p></div>
                                            <p className="pergunta">Pergunta: {item.pergunta}</p>
                                            <p className="resposta">Resposta: {item.resposta}</p>
                                        </div>
                                    ))
                                    :
                                    <div className="semPerguntas">
                                        <p className='semPerguntasTexto'>
                                            Não há perguntas registradas!
                                        </p>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="formulario">
                        <textarea id="info" name="info" rows="4" cols="50" placeholder="Insira sua pergunta" />
                        <button className="button" onClick={() => sendQuestion()}>Submit</button>
                    </div>
                    <div className="forum"> </div>
                </div>
            </div>
        </div>
    );
};

export default Forum;