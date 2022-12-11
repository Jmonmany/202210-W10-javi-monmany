export function DeleteButton({ getGentleman }: { getGentleman: () => void }) {
    const handlerClick = () => {
        getGentleman();
    };
    return (
        <>
            <i
                className="icon gentleman__icon gentleman__icon--delete fas fa-times"
                onClick={() => {
                    handlerClick();
                }}
            ></i>
        </>
    );
}
