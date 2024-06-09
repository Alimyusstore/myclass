import '../CSS/Ball.css'

function Ball (){
    return (
      <section style={{ height: "100vh", width: "100vw", overflowX: "hidden" }}>
        <div
          className="div"
          style={{ animation: "ball 2.5s alternate infinite ease-in" }}
        ></div>
        <div
          className="div"
          style={{
            animation: "ballcourt 2.5s alternate infinite ease-out 2.5s",
            position: "absolute",
            left: "50%",
            bottom: "42%",
          }}
        ></div>

        <div className=" boun" style={{ animationName: "bounce", animationDuration:"20s" }}></div>
        <div
          className=" boun bounss bounce2"
          style={{ animationName: "bounce1", animationDuration:" 1.5s" }}
        ></div>
        <div
          className=" boun bounss bounce3"
          style={{ animationName: "bounce1", animationDuration:" 1.2s" }}
        ></div>
        <div
          className=" boun bounss bounce4"
          style={{ animationName: "bounce1", animationDuration:" 1.6s" }}
        ></div>
        <div
          className=" boun bounss bounce5"
          style={{ animationName: "bounce1", animationDuration:" 1.4s" }}
        ></div>
        <div
          className=" boun bounss bounce6"
          style={{ animationName: "bounce1", animationDuration: "3s" }}
        ></div>
        <div
          className=" boun bounss bounce1"
          style={{ animationName: "bounce1", animationDuration:" 1s" }}
        ></div>
        <div className=" boun" style={{ animationName: "bounce", animationDuration:"16.8s" }}></div>
        <div className=" boun" style={{ animationName: "bounce", animationDuration:"21.8s" }}></div>
        <div className=" boun" style={{ animationName: "bounce", animationDuration:"18.8s" }}></div>
        <div className=" boun" style={{ animationName: "bounce", animationDuration:"23.8s" }}></div>
      </section>
    );
}

export default Ball