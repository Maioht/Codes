import React from 'react';




const TeamGallery = (props) => {
    return (
        <div style={{ padding: "10%" }}>

            <div className="gallery" style={{
                backgroundColor: "#4f8a8b"
            }}>
                <h1>meet the team</h1>
                <hr />
            </div>
            <div style={{ position: "absolute", height: "100%", width: "100%" }}>
                <div style={{ width: "10", height: "20", float: "left", padding: "15px" }}>
                    <img src="../../res/blank-photo.png" alt="1photo" style={{ width: "200px", height: "300px" }}></img>
                    <div class="container" style={{ padding: 0, content: "", clear: "both", display: "table" }}>
                        <h2>Jane Doe</h2>
                        <p class="title">Nice title</p>
                        <p>lorem ipsum ipsum lorem.</p>
                        <p>example@example.com</p>
                    </div>

                </div>
                <div style={{ width: "10", height: "20", float: "left", padding: "15px" }}>
                    <img src="../../res/blank-photo.png" alt="2photo" style={{ width: "200px", height: "300px" }}></img>
                    <div class="container" style={{ padding: 0, content: "", clear: "both", display: "table" }}>
                        <h2>John Doe</h2>
                        <p class="title">nice title</p>
                        <p>lorem ipsum ipsum lorem.</p>
                        <p>example@example.com</p>
                    </div>
                </div>



            </div>
        </div>
    );
}
export default TeamGallery;