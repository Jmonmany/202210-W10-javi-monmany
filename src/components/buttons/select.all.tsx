export function SelectAllButton({
    getGentlemen,
}: {
    getGentlemen: () => void;
}) {
    const handlerClick = () => {
        getGentlemen();
    };
    return (
        <>
            <button
                className="button button--select"
                onClick={() => {
                    handlerClick();
                }}
            >
                Select all
            </button>
        </>
    );
}
