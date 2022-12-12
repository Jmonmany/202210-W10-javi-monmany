import { GentlemanType } from '../../types/gentleman';
import { CheckButton } from '../buttons/check';
import { DeleteButton } from '../buttons/delete';

export function Gentleman({
    gentlemanData,
    deleteGentleman,
    checkGentleman,
}: {
    gentlemanData: GentlemanType;
    deleteGentleman: (arg0: number) => void;
    checkGentleman: (arg0: number) => void;
}) {
    const sendGentlemanId = () => {
        deleteGentleman(gentlemanData.id);
    };

    const sendGentlemanCheck = () => {
        checkGentleman(gentlemanData.id);
    };
    // console.log(gentlemanData)
    return (
        <li className="gentleman">
            <div className="gentleman__avatar-container">
                <img
                    className="gentleman__avatar"
                    src={`assets/${gentlemanData.picture}`}
                    alt={gentlemanData.alternativeText}
                />
                <span className="gentleman__initial">
                    {gentlemanData.name[0]}
                </span>
            </div>
            <div className="gentleman__data-container">
                <h2 className="gentleman__name">{gentlemanData.name}</h2>
                <ul className="gentleman__data-list">
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">
                            Profession:
                        </span>
                        {gentlemanData.profession}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Status:</span>
                        {gentlemanData.status}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Twitter:</span>
                        {gentlemanData.twitter}
                    </li>
                </ul>
            </div>
            <CheckButton getGentleman={sendGentlemanCheck}></CheckButton>
            <DeleteButton getGentleman={sendGentlemanId}></DeleteButton>
        </li>
    );
}
