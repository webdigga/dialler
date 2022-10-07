type props = {
    keyPadNumber: number
}

function key( props: props ) {
    return (
        <p>{ props.keyPadNumber }</p>
    );
}

export default key;
