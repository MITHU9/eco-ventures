import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAdventureContext } from "../context/Context";
import DynamicTitle from "../components/DynamicTitle";

const ForgotPassword = () => {
  const { forgotPassword } = useAdventureContext();
  const location = useLocation();
  const [mail, setMail] = useState(location.state?.mail || "");

  const goToGmail = () => {
    window.open("https://mail.google.com", "_blank");
  };

  //console.log(mail);

  return (
    <div className="flex items-center justify-center h-[90vh]">
      <DynamicTitle location={location} />
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-4">
        <form>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <Link
              onClick={() =>
                forgotPassword(mail)
                  .then(() => {
                    goToGmail();
                    setMail("");
                  })
                  .catch((err) => {
                    setError(err.message);
                  })
              }
              className=" text-sm py-3 mt-2 btn btn-success"
            >
              Reset Password
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgotPassword;
