import React, { useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import { collection, query, orderBy, onSnapshot, where, addDoc } from 'firebase/firestore'
import { db } from "../firebase";
import '../styles/forum.css';
import robo1 from "../assets/robo1.png"
import storage from '../store'

const Forum = () => {
    const [id, setId] = useState(storage.atual)
    const [data, setData] = useState([])
    const [objectData, setObjectData] = useState(storage.objectData)
    const [quest, setQuest] = useState('')

    function sendQuestion() {
        if (!storage.logado)
            return window.location.href = "/login";

        if (quest == '')
            return

        var date = new Date();
        var current_date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        addDoc(collection(db, "Question"), {
            answer: '',
            date: `${current_date}`,
            product: id,
            question: quest
        });

        setQuest('')
        document.getElementById('info').value = ''
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
           
            <Link to='/'>
            <button className=" bg-zinc-100 h-10 w-20 rounded-md ">Back</button>
            </Link>
            
            <div className="conteudo">
                {
                    id != "" ?
                        <div className="descritivo">
                            <div className="imagem">
                                <img src={robo1} alt="img" />
                            </div>
                            <div className="information">
                                <div className="nomeRobo">
                                    <h2>{objectData.name}</h2>
                                </div>
                                <br></br>
                                <div className="price">
                                    <h4>{objectData.price}</h4>
                                </div>
                                <br></br>
                                <div className="descr">
                                    <p>{objectData.description}</p>
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
                                            <p className="pergunta">Question: {item.pergunta}</p>
                                            <p className="resposta">Answer: {item.resposta}</p>
                                        </div>
                                    ))
                                    :
                                    <div className="semPerguntas">
                                        <p className='semPerguntasTexto'>
                                            No answers here!
                                        </p>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="formulario">
                        <textarea id="info" name="info" rows="4" cols="50" placeholder="Your question here" onChange={(event) => setQuest(event.target.value)} />
                        <button className="button" id="button" onClick={() => sendQuestion()}>Submit</button>
                    </div>
                    <div className="forum"> </div>
                </div>
            </div>
        </div>
    );
};

export default Forum;