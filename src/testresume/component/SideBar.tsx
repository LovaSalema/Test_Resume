import "./index.css"
const template = [
    {
        title: "Software Engineer"
    },
    {
        title: "Computer hardware "
    },
    {
        title: "Network administrator"
    },
    {
        title: "Management"
    },
    {
        title: "Data analysis"
    },
    {
        title: "Computer technician"
    },
];
const search = [
    {
        title: "Post search 1"
    },
    {
        title: "Post search 2"
    },
    {
        title: "Computers and information"
    },
    {
        title: "Database Administrator"
    },
    {
        title: "Computer security"
    },
    {
        title: "Computer Systems Analyst"
    },
]
const board = [
    {
        title: "Board 1"
    },
    {
        title: "board 2"
    },
    {
        title: "board 3"
    }
]
const boardAgent = [
    {
        title: "Board agent 1"
    },
    {
        title: "Board agent 1"
    },
    {
        title: "Board agent 1"
    }
]
const SideBar = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", backgroundColor: "#FFF"}}>
                <div style={{ display: "flex", flexDirection: "column", width: "240px", height: "1000px", borderRight: "1px solid #ECECED", justifyContent: "flex-start" }}>
                    <div style={{ borderBottom: "1px solid #ECECED", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: '10px' }}>
                        <img src="/assets/Resumizeme.png" alt="" width="114px" height="24px" />
                    </div>
                    <ul style={{ display: "flex", flexDirection: "column", marginTop: "32px" }}>
                        <li style={{ display: "flex", flexDirection: "row", gap: "5px", marginLeft: "10px" }}>
                            <img src="/assets/icon template.svg"></img>
                            <p style={{ fontFamily: "Gilroy-Bold", fontWeight: "bold", fontSize: "13px" }}>My templates</p>
                        </li>
                        <li style={{ display: "flex", flexDirection: "row", gap: "5px", marginLeft: "10px", marginTop: '13px' }}>
                            <img src="/assets/icon search.svg"></img>
                            <button>
                                <p style={{ fontFamily: "Gilroy-Bold", fontWeight: "bold", fontSize: "13px" }}>Search</p>
                            </button>
                        </li>
                        {
                            template.map((item, index) => (
                                <li key={index} style={{ display: "flex", flexDirection: "row", gap: "5px", marginLeft: "10px", marginTop: '13px' }}>
                                    <p style={{ lineHeight: "22px", fontWeight: 400, fontFamily: "Gilroy-Light" }}>⭐️</p>
                                    <p style={{ fontSize: "13px", fontFamily: "Gilroy-Medium" }}>{item.title}</p>
                                </li>
                            ))
                        }
                        {
                            search.map((item, index) => (
                                <li key={index} style={{ display: "flex", flexDirection: "row", gap: "5px", marginLeft: "10px", marginTop: '13px' }}>
                                    <img src="/assets/Group.svg"></img>
                                    <p style={{fontFamily: "Gilroy-Medium" , fontSize: "13px" }}>{item.title}</p>
                                </li>
                            ))
                        }
                        <li style={{ display: "flex", flexDirection: "row", gap: "5px", marginLeft: "10px", marginTop: '13px', justifyContent: "space-between" }}>
                            <div style={{display:"flex", flexDirection:"row", gap:"12px"}}>
                                <img src="/assets/icon board.svg"></img>
                                <p style={{ fontFamily: "Gilroy-Bold", fontWeight: "bold", fontSize: "13px" }}>My boards</p>
                            </div>
                            <button style={{ marginRight: "20px" }}>
                                <img src="/assets/add.svg" ></img>
                            </button>
                        </li>
                        {
                            board.map((item, index) => (
                                <li key={index} style={{ display: "flex", flexDirection: "row", gap: "5px", marginLeft: "10px", marginTop: '13px' }}>
                                    <p style={{ lineHeight: "22px", fontWeight: 400 }}>🗂️</p>
                                    <p style={{ fontFamily: "Gilroy-Medium" , fontSize: "13px" }}>{item.title}</p>
                                </li>
                            ))
                        }
                        {
                            boardAgent.map((item, index) => (
                                <li key={index} style={{ display: "flex", flexDirection: "row", gap: "5px", marginLeft: "10px", marginTop: '13px' }}>
                                    <p style={{ lineHeight: "22px", fontWeight: 400 }}>🔒</p>
                                    <p style={{ fontFamily: "Gilroy-Medium" , fontSize: "13px" }}>{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>

                </div>
                <div style={{ width: "100%", border: "1px solid #ECECED", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: '16px' }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: 'center', gap: "12px" }}>
                        <img src="/assets/img.png" alt="" width="32px" height="32px" />
                        <p style={{ color: "#4C4C55", fontSize: "13px" }}>Carla</p>
                    </div>
                    <div style={{ width: "32px", height: "32px", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                        <img src="/assets/icon settings.svg" width="16px" height="16px" />
                    </div>
                </div>
            </div>

        </>)
}
export default SideBar;