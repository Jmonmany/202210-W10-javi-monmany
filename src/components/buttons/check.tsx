export function CheckButton({
    getGentleman,
    gentlmanSelect,
}: {
    getGentleman: () => void;
    gentlmanSelect: boolean;
}) {
    const handlerCheck = () => {
        getGentleman();
    };

    return (
        <>
            <i
                className={`icon ${
                    gentlmanSelect
                        ? 'gentleman__icon--checked'
                        : 'gentleman__icon'
                } fas fa-check`}
                onClick={() => {
                    handlerCheck();
                }}
            ></i>
        </>
    );
}
