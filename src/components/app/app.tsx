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

    return (
        <div className="container">
            <Header></Header>
            <Info></Info>
            <main className="main">
                <ul className="gentlemen">
                    {gentlemen.map((data) => (
                        <Gentleman
                            key={data.name}
                            gentlemanData={data}
                            deleteGentleman={filterGentlemen}
                        ></Gentleman>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default App;
