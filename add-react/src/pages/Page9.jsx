import "../CSS/page9.css";

let h2 = {
  marginTop: "20px",
  marginBottom: "5px",
};
let customer = {
  display: "grid",
  gap: "20px",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
};
let input = {
  backgroundColor: "white",
  border: 0,
  color: "black",
};
let address = {
  width: "100%",
  borderRadius: "3px",
  marginRight: "100px",
  height: "25px",
  display: "block",
  backgroundColor: "white",
};
let label = {
  fontSize: "10px",
};
let a11 = {
  fontSize: "13px",
  padding: "10px",
};
let quest = {
  display: "flex",
  justifyContent: "center",
  paddingBottom: "10px",
};
let h4 = {
  textAlign: "center",
  display: "grid",
  marginLeft: "40px",
  marginTop: "15px",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
};

function Page9() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "black",
        color: "white",
        maxWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      <div style={{ margin: "0 auto", maxWidth: "700px" }}>
        <div
          style={{
            padding: "20px",
            marginTop: "40px",
            border: "2px solid white",
            boxShadow: "4px 3px 5px rgba(1, 1, 1, 0.1)",
          }}
        >
          <h1
            style={{
              marginBottom: "4px",
              fontSize: "40px",
              textAlign: "center",
            }}
          >
            Survey From &#58;
          </h1>
          <hr />
          <form action="">
            <div className="form_container">
              <h2 style={h2}>Customer Name</h2>
              <div className="" style={customer}>
                <div className="firstname">
                  <input
                    style={input}
                    type="text"
                    name="firstname"
                    id="firstname"
                    required
                  />
                  <label style={label} for="firstname">
                    Enter Your First Name
                  </label>
                </div>
                <div className="lastname">
                  <input
                    style={input}
                    type="text"
                    name="lastname"
                    id="lastname"
                    required
                  />
                  <label
                    style={label}
                    for="lastname"
                    className="customer_label"
                  >
                    Enter Your Last Name
                  </label>
                </div>
              </div>

              <h2 style={h2}>Address</h2>

              <div className="long">
                <input
                  style={(input, address)}
                  type="text"
                  name="street_address"
                  // id="street_address"
                  className="long"
                  required
                />
                <label
                  style={{ ...label, marginBottom: "10px" }}
                  for="street_address"
                >
                  Street Address
                </label>
              </div>
              <div className="long">
                <input
                  style={(input, address)}
                  type="text"
                  name="street_address"
                  className="long"
                  required
                />
                <label style={label} className="a4" for="street_address2">
                  Street Address Line 2
                </label>
              </div>

              <div style={customer}>
                <div className="">
                  <input
                    style={(input, address)}
                    type="text"
                    name="street_address"
                    id="city"
                    required
                  />
                  <label style={label} for="city">
                    City
                  </label>
                </div>
                <div>
                  <input
                    style={input}
                    type="text"
                    name="street_address"
                    id="state"
                    required
                  />
                  <label style={label} for="state">
                    State
                  </label>
                </div>
                <div>
                  <input
                    style={input}
                    type="number"
                    name="street_address"
                    id="zip"
                  />
                  <label style={label} for="zip">
                    Zip
                  </label>
                </div>
              </div>

              <div className="country">
                <select name="country" id="country" style={{  backgroundColor: "white",
                             width: "80%",
                             display: "block",
                             height: "28px",
                             color: "grey",
                             border: "none",
                             borderRadius: "4px",
                             marginTop: "30px",
                             fontFamily: `'Times New Roman', Times, serif`,
                             fontSize: "19px",
                             paddingLeft: "5px"}}  required>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Libya">Libya</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Mali">Mali</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Togo">Togo</option>
                  <option value="Liberia">Libe</option>
                </select>
                <label style={label} for="country">
                  Select Country
                </label>
              </div>

              <h2 style={h2}>Contact</h2>
              <div style={customer}>
                <div className="phone">
                  <input style={input} type="tel" id="phone" required />
                  <label style={label} for="phone">
                    Phone
                  </label>
                </div>
                <div className="email">
                  <input style={input} type="email" id="email" required />
                  <label style={label} for="email">
                    Email
                  </label>
                </div>
              </div>

              <div className="personal_details">
                <h2 style={h2}>Personal Details</h2>

                <div>
                  <input
                    style={input}
                    type="radio"
                    name="gender"
                    id="male"
                    required
                  />
                  <label style={label} for="male">
                    Male
                  </label>
                </div>
                <div>
                  <input
                    style={input}
                    type="radio"
                    name="gender"
                    id="female"
                    required
                  />
                  <label style={label} for="male">
                    Female
                  </label>
                </div>
                <div>
                  <input
                    style={input}
                    type="radio"
                    name="gender"
                    id="other"
                    required
                  />
                  <label style={label} for="other">
                    Other
                  </label>
                </div>
              </div>

              <h2 style={h2}>Ratings</h2>
              <div className="" style={{ fontSize: "30px", marginTop: "5px" }}>
                <div className="rating1">
                  <label
                    style={{ ...label, ...a11, paddingRight: "30px" }}
                    for=""
                  >
                    Rating1:
                  </label>

                  <input style={input} type="radio" name="rating1" id="bad1 " />
                  <label style={(label, a11)} for="bad1">
                    Bad
                  </label>

                  <input style={input} type="radio" name="rating1" id="good1" />
                  <label style={(label, a11)} for="good1">
                    Good
                  </label>

                  <input
                    style={input}
                    type="radio"
                    name="rating1"
                    id="excellent1"
                  />
                  <label style={(label, a11)} for="excellent1">
                    Excellent
                  </label>
                </div>
                <div className="rating2">
                  <label
                    style={{ ...label, ...a11, paddingRight: "30px" }}
                    for=""
                  >
                    Rating2:
                  </label>

                  <input style={input} type="radio" name="rating2" id="bad2" />
                  <label style={(label, a11)} for="bad2">
                    Bad
                  </label>

                  <input style={input} type="radio" name="rating2" id="good2" />
                  <label style={(label, a11)} for="good2">
                    Good
                  </label>

                  <input
                    style={input}
                    type="radio"
                    name="rating2"
                    id="excellent2"
                  />
                  <label style={(label, a11)} for="excellent2">
                    Excellent
                  </label>
                </div>
                <div className="rating3">
                  <label
                    style={{ ...label, ...a11, paddingRight: "30px" }}
                    for=""
                  >
                    Rating3:
                  </label>

                  <input style={input} type="radio" name="rating3" id="bad3 " />
                  <label style={(label, a11)} for="bad3">
                    Bad
                  </label>

                  <input style={input} type="radio" name="rating3" id="good3" />
                  <label style={(label, a11)} for="good3">
                    Good
                  </label>

                  <input
                    style={input}
                    type="radio"
                    name="rating3"
                    id="excellent3"
                  />
                  <label style={label} for="excellent3">
                    Excellent
                  </label>
                </div>
                <div className="rating4">
                  <label
                    style={{ ...label, ...a11, paddingRight: "30px" }}
                    for=""
                  >
                    Rating4:
                  </label>

                  <input style={input} type="radio" name="rating4" id="bad4" />
                  <label style={(label, a11)} for="bad4">
                    Bad
                  </label>

                  <input style={input} type="radio" name="rating4" id="good4" />
                  <label style={(label, a11)} for="good4">
                    Good
                  </label>

                  <input
                    style={input}
                    type="radio"
                    name="rating4"
                    id="excellent4"
                  />
                  <label style={(label, a11)} for="excellent4">
                    Excellent
                  </label>
                </div>
                <div className="rating5">
                  <label
                    style={{ ...label, ...a11, paddingRight: "30px" }}
                    for=""
                  >
                    Rating5:
                  </label>

                  <input style={input} type="radio" name="rating5" id="bad5" />
                  <label style={(label, a11)} for="bad5">
                    Bad
                  </label>

                  <input style={input} type="radio" name="rating5" id="good5" />
                  <label style={(label, a11)} for="good5">
                    Good
                  </label>

                  <input
                    style={input}
                    type="radio"
                    name="rating5"
                    id="excellent5"
                  />
                  <label style={(label, a11)} for="excellent5">
                    Excellent
                  </label>
                </div>

                <div className="rating6">
                  <label
                    style={{ ...label, ...a11, paddingRight: "30px" }}
                    for=""
                  >
                    Rating6:
                  </label>

                  <input style={input} type="radio" name="rating6" id="bad6" />
                  <label style={(label, a11)} for="bad6">
                    Bad
                  </label>

                  <input style={input} type="radio" name="rating6" id="good6" />
                  <label style={(label, a11)} for="good6">
                    Good
                  </label>

                  <input
                    style={input}
                    type="radio"
                    name="rating6"
                    id="excellent6"
                  />
                  <label style={(label, a11)} for="excellent6">
                    Excellent
                  </label>
                </div>

                <div className="rating7">
                  <label
                    style={{ ...label, ...a11, paddingRight: "30px" }}
                    for=""
                  >
                    Rating7:
                  </label>

                  <input
                    style={input}
                    type="checkbox"
                    name="rating7"
                    id="bad7"
                  />
                  <label style={(label, a11)} for="bad7">
                    Bad
                  </label>

                  <input
                    style={input}
                    type="checkbox"
                    name="rating7"
                    id="good7"
                  />
                  <label style={(label, a11)} for="good7">
                    Good
                  </label>

                  <input
                    style={input}
                    type="checkbox"
                    name="rating7"
                    id="excellent7"
                  />
                  <label style={(label, a11)} for="excellent7">
                    Excellent
                  </label>
                </div>

                <div className="rating8">
                  <label style={(label, a11)} for="" className="a2">
                    Rating8:
                  </label>

                  <input style={input} type="radio" name="rating8" id="bad8" />
                  <label style={(label, a11)} for="bad8">
                    Bad
                  </label>

                  <input style={input} type="radio" name="rating8" id="good8" />
                  <label style={(label, a11)} for="good8">
                    Good
                  </label>

                  <input
                    style={input}
                    type="radio"
                    name="rating8"
                    id="excellent8"
                  />
                  <label style={label} for="excellent89">
                    Excellent
                  </label>
                </div>
              </div>
              <div style={quest}>
                <h4 style={h4}>Details</h4>
                <h4 style={h4}>Remark</h4>
              </div>
              <div style={quest}>
                <p style={{marginRight:"10px"}}>Do you understand what you are doing &#63; </p>

                <input
                  style={input}
                  type="checkbox"
                  name="yes1"
                  id="yes1"
                  checked
                />
                <label
                  style={{ ...label, marginLeft: "3px", fontSize: "13px"}}
                  for="yes1"
                >
                  Yes
                </label>

                <input style={input} type="checkbox" name="no1" id="no1" />
                <label
                  style={{ ...label, marginLeft: "3px", fontSize:"13px"}}
                  for="no1"
                >
                  No
                </label>
              </div>

              <div style={quest}>
                <p style={{marginRight:"10px"}}>Do you get any help while doing this &#63; </p>

                <input style={input} type="checkbox" name="yes2" id="yes2" />
                <label
                  style={{ ...label, marginLeft: "3px", fontSize:"13px" }}
                  for="yes2"
                >
                  Yes
                </label>

                <input
                  style={input}
                  type="checkbox"
                  name="no2"
                  className="check"
                  id="no2"
                  checked
                />
                <label style={{...label,fontSize:"13px", marginLeft:"3px"}} className="a3" for="no2">
                  No
                </label>
              </div>
            </div>
            <button
              value="submit"
              style={{
                backgroundColor: "rgb(57, 57, 235)",
                padding: " 4px 5px 4px 5px",
                border: "1px solid white",
                borderRadius: "3px",
                width: "70px",
                marginTop: "15px",
                fontSize: "17px",
                transition: "1s ease",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page9;
