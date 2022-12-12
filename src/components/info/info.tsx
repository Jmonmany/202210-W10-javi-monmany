import { GentlemanType } from '../../types/gentleman';
import { SelectAllButton } from '../buttons/select.all';

export function Info({
    gentlemenData,
    sendingAllGentlemen,
}: {
    gentlemenData: GentlemanType[];
    sendingAllGentlemen: () => void;
}) {
    let counter = 0;
    // const [updatedCounter, serCounter] = useState()

    const sendGentlemen = () => {
        sendingAllGentlemen();
    };

    const countGentlemenSelected = () => {
        gentlemenData.forEach((item) => (item.selected ? counter++ : item));
    };
    countGentlemenSelected();

    return (
        <section className="controls">
            <p className="info">{counter} gentlemen pointing at you</p>
            <SelectAllButton getGentlemen={sendGentlemen}></SelectAllButton>
        </section>
    );
}
