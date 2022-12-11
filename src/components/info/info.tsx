/* eslint-disable prefer-const */
import { SelectAllButton } from '../buttons/select.all';

export function Info() {
    let counter = 0;
    return (
        <section className="controls">
            <p className="info">{counter} gentlemen pointing at you</p>
            <SelectAllButton></SelectAllButton>
        </section>
    );
}
