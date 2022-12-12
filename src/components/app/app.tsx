import { useState } from 'react';
import { gentlemen as defaultGentleman } from '../../types/gentleman';
import { Gentleman } from '../gentleman/gentleman';
import { Header } from '../header/header';
import { Info } from '../info/info';

function App() {
    const [gentlemen, setGentlemen] = useState(defaultGentleman);

    const filterGentlemen = (_id: number) => {
        setGentlemen(gentlemen.filter((item) => _id !== item.id));
    };

    const changeGentlemanSelected = (_id: number) => {
        setGentlemen(
            gentlemen.map((item) =>
                item.id === _id ? { ...item, selected: true } : item
            )
        );
    };

    return (
        <div className="container">
            <Header></Header>
            <Info gentlemenData={gentlemen}></Info>
            <main className="main">
                <ul className="gentlemen">
                    {gentlemen.map((data) => (
                        <Gentleman
                            key={data.name}
                            gentlemanData={data}
                            deleteGentleman={filterGentlemen}
                            checkGentleman={changeGentlemanSelected}
                        ></Gentleman>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default App;
