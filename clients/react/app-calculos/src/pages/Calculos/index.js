import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import DivContainer from '../DivContainer';
import api from '../../services/api';

export default function Calculos(){

    const [calculos, setCalculos] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(1);
    const [totalRegistros, setTotalRegistros] = useState(1);
    
    const navigate = useNavigate();

    useEffect(()=>{
        getPage(pagina);
    }, [pagina]);

    const getPage = async function(pPagina){

        if( pPagina < 1 ){
            setPagina(totalPaginas);
            pPagina = totalPaginas;
        }

        await api
            .get(`calculos/listar?page=${pPagina}&limit=10`)
            .then(response => {
                
                setTotalPaginas( response.data.totalPaginas );
                setTotalRegistros( response.data.totalRegistros );

                if( response.data.calculos !== undefined && response.data.calculos.length > 0 ){
                    setCalculos(response.data.calculos);
                }else{
                    setPagina(1);
                }
            });
    }

    function nextPage(ev){
        ev.preventDefault();
        let pageAtual = pagina + 1;
        setPagina(pageAtual)
    }

    function prevPage(ev){
        ev.preventDefault();
        let pageAtual = pagina - 1;
        setPagina(pageAtual)
    }

    return (
        <DivContainer title='Listagem de Calculos'>
            
            <div class="row">
                <div class="col-md-11">
                    <h3>Página: {pagina} de {totalPaginas} - Registros: {totalRegistros}</h3>
                </div>
                
                <div class="col-md-1 justify-content-end mb-2">

                    <div class="btn-group justify-content-end" role="group">
                        <button type="button" class="button-sm" onClick={prevPage}>Prev</button>
                        <button type="button" class="button-sm" onClick={nextPage}>Next</button>
                    </div>

                </div>

            </div>
            
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                
                    <table class="table" id="table" >
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ID</th>
                                <th scope="col">UUID</th>
                                <th scope="col">Valor 1</th>
                                <th scope="col">Valor 2</th>
                                <th scope="col">Sinal</th>
                                <th scope="col">Resultado</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                calculos.map(c => (
                                    <tr>    
                                        <th scope="row"></th>
                                        <td scope="col">{c.id}</td>
                                        <td scope="col">{c.calculoUU}</td>
                                        <td scope="col">{c.numero1}</td>
                                        <td scope="col">{c.numero2}</td>
                                        <td scope="col">{c.sinal}</td>
                                        <td scope="col">{c.resultado}</td>
                                        <td scope="col">{c.descricao}</td>
                                        <td scope="col">{c.estado}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>

                <div class="col-md-1"></div>
            </div>

        </DivContainer>
    );
}