import '../CSS/Ball.css'

let bigBall = {
     marginTop: "10%",
     width: "200px",
     height: "200px",
    borderColor: `rgb(9, 105, 105) rgb(216, 135, 110) rgb(35, 27, 16)
                  rgb(16, 229, 91)`,
    borderRadius: "50%",
    borderstyle: "solid",
    transition: "1.5s background-image ease",
}

let bounss = {
  animationPlayState: "running",
  animationFillMode: "forwards"
}
function Ball (){
    return (
      <section style={{ height: "100vh", width: "100vw", overflowX: "hidden" }}>
        <div
          style={{
            ...bigBall,
            animation: "ball 2.5s alternate infinite ease-in",
          }}
        ></div>
        <div
          style={{
            ...bigBall,
            animation: "ballcourt 2.5s alternate infinite ease-out 2.5s",
            position: "absolute",
            left: "50%",
            bottom: "42%",
          }}
        ></div>

        <div
          className=" boun"
          style={{ animationName: "bounce", animationDuration: "20s" }}
        ></div>
        <div
          className=" boun bounss bounce2"
          style={{ animationName: "bounce1", animationDuration: " 1.5s" }}
        ></div>
        <div
          className=" boun bounce3"
          style={{
            ...bounss,
            animationName: "bounce1",
            animationDuration: " 1.2s",
          }}
        ></div>
        <div
          className=" boun bounce4"
          style={{
            ...bounss,
            animationName: "bounce1",
            animationDuration: " 1.6s",
          }}
        ></div>
        <div
          className=" boun bounss bounce5"
          style={{ animationName: "bounce1", animationDuration: " 1.4s" }}
        ></div>
        <div
          className=" boun bounss bounce6"
          style={{ animationName: "bounce1", animationDuration: "3s" }}
        ></div>
        <div
          className=" boun bounss bounce1"
          style={{ animationName: "bounce1", animationDuration: " 1s" }}
        ></div>
        <div
          className=" boun"
          style={{ animationName: "bounce", animationDuration: "16.8s" }}
        ></div>
        <div
          className=" boun"
          style={{ animationName: "bounce", animationDuration: "21.8s" }}
        ></div>
        <div
          className=" boun"
          style={{ animationName: "bounce", animationDuration: "18.8s" }}
        ></div>
        <div
          className=" boun"
          style={{ animationName: "bounce", animationDuration: "23.8s" }}
        ></div>
      </section>
    );
}

export default Ball