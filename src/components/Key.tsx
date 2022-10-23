type props = {
    keyPadNumber: number,
	clickHandler: (number: number) => void
}

function keyPress(number: number, clickHandler: (number: number) => void): void {
	clickHandler(number);
}

function key( props: props): JSX.Element {
    return (
        <button onClick={() => keyPress(props.keyPadNumber, props.clickHandler)}>{ props.keyPadNumber }</button>
    );
}

export default key;
