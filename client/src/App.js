import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Body/Container';
import AddItem from './components/Body/AddItem';
import ItemsHistory from './components/Body/ItemsHistory';

function App() {
    const [dataRes, setDataRes] = useState();
    const fetchData = () => {
        axios.get('http://localhost:8080/data').then(({data}) => setDataRes(data.data)).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <header>
                <Header/>
            </header>
            <div className="container">
                <div className='flex-btns'>
                    <div> {
                        dataRes &&< AddItem data = {
                            dataRes
                        }
                        setData = {
                            setDataRes
                        } />
                    } </div>
                    <div>
                        <ItemsHistory/>
                    </div>
                 </div>
                 {
                    dataRes &&< Container data = {
                        dataRes
                    } />
                }
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
