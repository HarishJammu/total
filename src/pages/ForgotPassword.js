import React from "react";

const ForgotPassword = () => {
  return (
    <div>
      <div className="login=wrapper py-5 home-wrapper-2">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="card">
              <div className="card-body p-5">
                <h3 className="text-center">Forgot Password</h3>
                <p className="text-center mb-4">Welcome Back!</p>
                <form>
                  <div>
                    <label htmlFor="email" className="form-label mb-3">
                      Enter Your Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div className="d-grid gap-2 p-4">
                    <button type="submit">submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
