import men from "../assest/images/2 men.jpg";
import plant from "../assest/images/plant3.jpeg";
import jewel from "../assest/images/jewel7.jpeg";

let child = {    display: "flex",
    justifyContent: "space-between"
}
let span = {
     fontSize: "larger",
    fontFamily:`Arial, Helvetica, sans-serif`
}
let button1 = {
    backgroundColor: "rgb(35, 97, 242)",
    color: "white",
    borderRadius: '45%',
    border: 0,
    padding: "2px 8px",
}
let profile = {display:"flex", justifyContent:"space-between", padding:"8px", backgroundColor:"azure"}
let proPic = {
    display: "grid",
    gridTemplateColumns:"50px 120px",
    columnGap: "10px"
}
let pic = {alignSelf: "center"}
let images = {
    width: "50px",
    height: "50px",
    borderRadius: "50%"
}
let parag = {
    margin: 0,
    color: "rgba(108, 106, 106, 0.829)",

}
let followBtn = {
  color: "white",
  backgroundColor: "rgb(107, 131, 249)",
  padding:"8px",
  border:0,
  fontWeight:"bold",
};
function Flex(){
    return (
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr",
            padding: "10px",
            borderRadius: "10px",
            rowGap: "10px",
            width: "45%",
            margin: "30px",
            backgroundColor: "aliceblue",
          }}
        >
          <div className="" style={child}>
            <div>
              <span style={span}>Home</span>
            </div>
            <div>
              <button className="" style={button1}>
                14
              </button>
            </div>
          </div>
          <div className="" style={child}>
            <div>
              <span style={span}>Notifications</span>
            </div>
            <div>
              <button className="" style={button1}>
                3
              </button>
            </div>
          </div>
          <div className="" style={child}>
            <div>
              <span style={span}>Messages</span>
            </div>
            <div>
              <button className="" style={button1}>
                5
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "rgb(159, 11, 252)",
            padding: "8px",
            display: "flex",
            justifyContent: "space-between",
            minWidth: "55%",
            alignItems: "center",
            margin: "30px",
          }}
        >
          <div style={{ color: "white", fontSize: "20px" }}>Home</div>
          <div>
            <input
              type="text"
              placeholder="Search"
              style={{
                borderRadius: "20px",
                padding: "5px 13px",
                width: "500px",
                height: "20px",
                border: "none",
              }}
            />
          </div>
          <div>
            <button
              className=""
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "1px solid white",
                padding: "5px 8px",
                fontSize: "20px",
              }}
            >
              Download
            </button>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr",
            width: "30%",
            margin: "30px",
          }}
        >
          <div style={profile}>
            <div style={proPic}>
              <div style={pic}>
                <img src={men} alt="men" style={images} />
              </div>
              <div >
                <h4 style={{ margin: 0 }}>Oliver</h4>
                <p style={parag}>the cat</p>
                <p style={parag}>Popular</p>
              </div>
            </div>
            <div style={{alignSelf: "center"}}>
              <button style={followBtn}>Follow</button>
            </div>
          </div>
          <div  style={profile}>
            <div  style={proPic}>
              <div style={pic}>
                <img src={plant} alt="plant" style={images} />
              </div>
              <div >
                <h4 style={{ margin: 0 }}>Mimi</h4>
                <p style={parag}>Sleepy Cat</p>
                <p style={parag}>Popular</p>
              </div>
            </div>
            <div>
              <button style={followBtn}>Follow</button>
            </div>
          </div>
          <div style={profile}>
            <div style={proPic}>
              <div style={pic}>
                <img src={jewel} alt="jewel" style={images} />
              </div>
              <div >
                <h4 style={{ margin: 0 }}>Rex</h4>
                <p style={parag}>Happy Building</p>
                <p style={parag}>Popular</p>
              </div>
            </div>
            <div>
              <button style={followBtn}>Follow</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Flex;