import { useState } from "react";
import "./Main.css"
const Main = () => {
    // const[email, setEmail]=useState('petter@gmail.com')
    return (
        <>
            <div style={{ margin: "32px", marginTop:'42px' }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center", gap: "32px", marginLeft: "64px" }}>
                    <div style={{ backgroundColor: "#008B5D", display: "flex", flexDirection: "row", alignItems: "center", width: "800px", padding: "20px", gap: "16px", borderRadius: "8px" }}>
                        <div style={{ width: "72px", height: "72px", borderRadius: "1000px", backgroundColor: "#FFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <img src="/assets/career.svg" width="48px" height="48px"></img>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <h4 style={{ alignSelf: "stretch", fontSize: "24px", fontWeight: 400, lineHeight: "30px", color: "#FFF" }}>Premium Account</h4>
                            <p style={{ fontSize: "15px", color: "#FFF", fontWeight: 400, lineHeight: "22px", alignSelf: "stretch" }}>
                                You have a premium account, granting you access to all the remarkable features offered by <br />
                                ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited <br />
                                number of resumes and cover letters in both PDF and Word formats.
                            </p>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <h4 style={{ width: "800px", fontSize: "24px", fontWeight: 400, lineHeight: "30px" }}><b>Personal Information</b></h4>
                        <form style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                <div style={{ position: "relative", display: "flex", flexDirection: "row", alignItems: 'center', justifyContent: "flex-start", gap: "16px", }}>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                                        <div style={{ display: "flex", flexDirection: "row", gap: "24px" }}>
                                            <div className="divform" style={{ width: "308px" }}>
                                                <label>First Name</label>
                                                <input type="text" style={{ borderColor: "none" }}></input>
                                            </div>
                                            <div className="divform" style={{ width: "308px" }} >
                                                <label>Last Name</label>
                                                <input type="text" style={{ borderColor: "none" }}></input>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "row", gap: "24px" }}>
                                            <div className="divform" style={{ width: "308px" }}>
                                                <label>City</label>
                                                <input type="text" style={{ borderColor: "none" }}></input>
                                            </div>
                                            <div className="divform" style={{ width: "308px" }}>
                                                <label>Postal Code</label>
                                                <input type="text" style={{ borderColor: "none" }}></input>
                                            </div>
                                        </div>
                                        <div className="divform">
                                            <label>Address</label>
                                            <input type="text" style={{ borderColor: "none" }}></input>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                                            <div style={{ display: "flex", flexDirection: "row", gap: "24px" }}>
                                                <div className="divform" style={{ width: "308px" }}>
                                                    <label>Email</label>
                                                    <input type="text" style={{ borderColor: "none" }} ></input>
                                                    <img src="/assets/check.svg" width="16px" height="16px"></img>
                                                </div>
                                                <div className="divform" style={{ width: "308px" }}>
                                                    <label>Phone</label>
                                                    <input type="text" style={{ borderColor: "none" }}></input>
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "row", gap: "24px" }}>
                                                <div className="divform" style={{ width: "308px" }}>
                                                    <label>Password</label>
                                                    <input type="password" style={{ borderColor: "none" }}></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="/assets/Ellipse 12.svg" style={{ position: "absolute", right: "-1px", top: "-10px" }}></img>
                                </div>
                                <div style={{}}>
                                    <p style={{ color: "#4C4C55", fontSize: "15px" }}>Use this email to log in to your <a style={{ color: "#1688FE" }} href="resumedone.io">resumedone.io</a> account and receive notifications.</p>
                                </div>
                                <button style={{ fontSize: "15px", backgroundColor: "#1688FE", width: "170px", height: "40px", color: "#FFFFFF", borderRadius: "4px" }} >Save</button>
                                <div style={{display:"flex", flexDirection:"column", gap:"32px"}}>
                                    <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                                        <input type="checkbox" width="16px" height="16px"></input>
                                        <p style={{ color: "#4C4C55", fontSize: "15px" }}>Show my profile to serious employers on <a style={{ color: "#1688FE" }} href="resumedone.io">resumedone.io</a> for free </p>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "16px", border: "1px solid #E3E3E4", borderRadius: "8px" }}>
                                        <h5 style={{ color: "#000", fontWeight: 400, fontSize: "17px", lineHeight: "24px" }}><b>Delete account</b></h5>
                                        <p style={{ color: "#4C4C55", fontSize: "15px" }}>If you delete your account you’ll be permanently removing it from our systems - you can’t undo it.</p>
                                        <button style={{ color: "#F25773", fontSize: "15px", alignSelf: "flex-start" }}><b>Yes, Delete my account</b></button>
                                    </div>
                                    <div style={{}}>
                                        <p style={{ color: "#4C4C55", fontSize: "15px" }}><a style={{ color: "#1688FE" }} href="resumedone.io">Get in touch with our support team</a> if you have any question or want to leave some feedback.<br />
                                            We’ll be happy to hear from you.</p>
                                    </div>
                                </div>
                                <div style={{width:"800px", paddingTop:"16px", borderTop:"1px solid #E3E3E4"}}>
                                    <ul style={{display:"flex", flexDirection:"row", gap:"32px"}}>
                                        <button  style={{color:"#595964", fontSize:"14px", fontWeight:400, lineHeight:"22px"}}>Terms & Conditions</button>
                                        <button  style={{color:"#595964", fontSize:"14px", fontWeight:400, lineHeight:"22px"}}>Privacy Policy</button>
                                        <button  style={{color:"#595964", fontSize:"14px", fontWeight:400, lineHeight:"22px"}}>FAQ</button>
                                        <button  style={{color:"#595964", fontSize:"14px", fontWeight:400, lineHeight:"22px"}}>Contact Us</button>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main;