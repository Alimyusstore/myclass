let parent = {
  display: "flex",
  justifyContent: "center",
  width: "100vw",
  alignItems: "center",
  backgroundColor: "rgb(203, 202, 202)",
  height: "100vh",
  textAlign: "center",
  fontSize: "30px",
};
let grid = {
  width: "80%",
  height: "88vh",
  display: "grid",
  gridTemplate: `"logo logo logo logo" 10%
                   "side header header header" 20%
                   "side body body body" 50%
                   "footer footer footer footer" 8% / 2fr 1fr 1fr 1fr`,
  rowGap: "10px",
};
function Classgrid() {
  return (
    <section style={parent}>
      <section style={grid}>
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgb(196, 142, 142), rgb(206, 206, 150), rgb(250, 208, 200))",
            gridArea: "logo",
          }}
        >
          Logo
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgb(136, 105, 111), rgb(164, 212, 134), rgb(219, 91, 130))",
            gridArea: "side",
          }}
        >
          side bar Navigation
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgb(142, 201, 185), rgb(178, 232, 170), rgb(243, 169, 143))",
            gridArea: "header",
          }}
        >
          header
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgb(71, 26, 92), rgb(253, 206, 230), rgb(171, 122, 110))",
            gridArea: "body",
          }}
        >
          body
        </div>
        <div
          style={{
            backgroundImage:
              "radial-gradient(rgb(122, 32, 222), rgb(117, 201, 193), rgb(219, 162, 235))",
            gridArea: "footer",
          }}
        >
          Footer
        </div>
      </section>
    </section>
  );
}

export default Classgrid;
