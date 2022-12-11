import { gentlemen } from '../../types/gentleman';
import { Gentleman } from '../gentleman/gentleman';
import { Header } from '../header/header';
import { Info } from '../info/info';

function App() {
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
                        ></Gentleman>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default App;
