export default function Footer() {
    return (
        <div id="component" className="container-fluid bg-black">
            <div style={{backgroundColor : "black", display : "flex", justifyContent : "space-around", padding : "80px"}}
              className="px-6 py-8 bg-black"
            >
              <div className="col-xxl-1 row align-items-start">
                <div
                  className="col-12 row justify-content-center align-items-center d-flex"
                >
                  <p>
                    <a
                      style={{textDecoration : "none"}}
                      className="text-white fs-4 fw-bold font-family-Montserrat col-12 m-0 py-2"
                      >My App</a>
                  </p>
                </div>
                <p
                  className="text-white fs-6 fw-normal font-family-Montserrat col-12 m-0 py-2"
                >
                  © copyright Prog 2024
                </p>
              </div>
              <div className="col-xxl-0 row">
                <p
                  className="text-white fs-5 fw-bold font-family-Montserrat col-12 m-0 py-2"
                >
                  MENU
                </p>
                <div className="col-9 row d-flex">
                  <p>
                    <a
                      className="text-white fs-6 fw-normal font-family-Montserrat col-12 m-0 py-2"
                      >SENTINENT</a>
                  </p>
                  <p>
                    <a
                      className="text-white fs-6 fw-normal font-family-Montserrat col-12 m-0 py-2"
                      >Login</a>
                  </p>
                  <p>
                    <a
                      className="text-white fs-6 fw-normal font-family-Montserrat col-12 m-0 py-2"
                      >FAQ</a>
                  </p>
                  <p>
                    <a
                      className="text-white fs-6 fw-normal font-family-Montserrat col-12 m-0 py-2"
                      href="login.html"
                      >Dashboard</a>
                  </p>
                </div>
              </div>
              <div className="col-xxl-2 row">
                <p
                  className="text-white fs-5 fw-bold font-family-Montserrat col-10 m-0 py-2"
                >
                  Nous contacter
                </p>
                    <p
                      className="text-white fs-6 fw-normal font-family-Montserrat col-11 m-0 py-2"
                    >
                      sentinent@contact.mg
                    </p>
                  <div className="col-10 row align-items-center">
                    <p
                      className="text-white fs-6 fw-normal font-family-Montserrat col-10 m-0 py-2"
                    >
                      Antananarivo 101
                    </p>
                  </div>
                </div>
              </div>
            </div>
    )
} 