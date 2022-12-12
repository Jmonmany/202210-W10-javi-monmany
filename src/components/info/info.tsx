import { GentlemanType } from '../../types/gentleman';
import { SelectAllButton } from '../buttons/select.all';

export function Info({ gentlemenData }: { gentlemenData: GentlemanType[] }) {
    let counter = 0;
    // const [updatedCounter, serCounter] = useState()
    const countGentlemenSelected = () => {
        gentlemenData.forEach((item) => (item.selected ? counter++ : item));
    };
    countGentlemenSelected();

    return (
        <section className="controls">
            <p className="info">{counter} gentlemen pointing at you</p>
            <SelectAllButton></SelectAllButton>
        </section>
    );
}
