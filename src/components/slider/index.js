export default function Slider() {
    return (
        <div style={
            {
                width: '100%',
                height: '400px',
                overflow: 'hidden',
                position: 'relative'
            }
        }>
            <img src="https://picsum.photos/1800?random=1" alt="" style={{
                width: '100%',
                height: 'auto',
                position: 'absolute',
                top: '0',
                left: '0'
            }}/>
        </div>
    );
}
