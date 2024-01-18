export default function Header() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#f5f5f5"
        }}>
            <img src="https://picsum.photos/100?random=1" alt="" style={{
                width: "100px",
                height: "100px"
            }}/>
            <a href="#">Programlar</a>
            <div>
                <img src="https://picsum.photos/100?random=2" alt="" style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%"
                }}/>
                <p>Esma YORULMAZ</p>
            </div>

        </div>
    );
}
