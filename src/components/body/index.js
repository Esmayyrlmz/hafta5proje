export default function Body() {

    let egitimListesi = [
        {
            id: 1,
            baslik: "Takipçi - 1",
            takibeTakip: true
        },
        {
            id: 2,
            baslik: "Takipçi - 2",
            takibeTakip: true
        },
        {
            id: 3,
            baslik: "Takipçi - 3",
            takibeTakip: false
        },
        {
            id: 4,
            baslik: "Takipçi - 4",
            takibeTakip: true
        },
        {
            id: 5,
            baslik: "Takipçi - 5",
            takibeTakip: false
        },
    ];

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#f5f5f5"
        }}>
            <div style={{
                width: "80%",
                backgroundColor: "white",
                marginRight: "20px",
                marginLeft: "50px",
                marginTop: "20px"

            }}>
                <div style={{
                    padding: "20px"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <h1>Takipçiler</h1>
                        <h1>5</h1>
                    </div>

                    <div>
                        <ul>
                            {
                                egitimListesi.map((egitim) => (
                                    <li key={egitim.id}
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            padding: "10px",
                                        }}>
                                        <img src={'https://picsum.photos/125/70?random=' + egitim.id} height={70}
                                             width={125}/>
                                        <span style={{
                                            marginLeft: "20px"
                                        }}>{egitim.baslik}</span>

                                        {
                                            egitim.takibeTakip ?
                                                <button style={{
                                                    marginLeft: "20px"
                                                }}>Takipten Çık</button>
                                                :
                                                <button style={{
                                                    marginLeft: "20px"
                                                }}>Takip Et</button>
                                        }

                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
            </div>
            <div style={{
                width: "20%",
                backgroundColor: "white"
            }}>
                <img
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                    src="https://picsum.photos/200/300?random=1"
                    alt=""/>
            </div>
        </div>
    )
        ;
}
