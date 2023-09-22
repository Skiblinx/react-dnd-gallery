import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

import { CustomInput } from "../inputs/CustomInput";
import { ButtonHoverDark } from "../button/button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../api/firebase-config/firebase-config";
import { SuccessToast } from "../toast/toasts";
import { useState } from "react";
import { ErrorMsg } from "../alert/ErrorMsg";

const schema = yup.object().shape({
    email: yup.string().email().required("email is required"),
    password: yup.string().required('password is required'),
});

const LoginComponent = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const method = useForm({
        resolver: yupResolver(schema)
    });

    const { handleSubmit } = method;

    const handleClick = (data) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                setLoading(false)
                SuccessToast();
                navigate("/");
            })
            .catch((error) => {
                setLoading(false);
                switch (error.code) {
                    case 'auth/wrong-password':
                        setError('Incorrect password');
                        break;
                    case 'auth/user-not-found':
                        setError('no user associated with this email');
                        break;
                    case 'auth/invalid-login-credentials':
                        setError('invalid login details');
                        break;
                    default:
                        setError("error occurred.")
                        break;
                }
            })
    }


    return (
        <section className="max-w-[500px] mt-10 rounded-xl p-2 xs:p-3 md:p- mx-auto my-auto shadow-md">
            <h2 className="text-black text-xl sm:text-2xl text-center mt-2"> Login </h2>
            <p className="text-xs sm:text-2xl italic text-center mt-2"> Login with the default credentials in the input placeholder</p>

            <section className="mt-2">
                <CustomInput
                    label={"Email"}
                    name={"email"}
                    placeholder={"user@example.com"}
                    method={method}
                    defaultType={"text"}
                />

                <CustomInput
                    method={method}
                    name={"password"}
                    label={"Password"}
                    placeholder={"1Password"}
                    defaultType={"password"}
                />
            </section>
            {error &&
                <section className="flex justify-center my-3">
                    <ErrorMsg msg={error} />
                </section>
            }

            <section className="flex justify-center">
                {loading
                    ?
                    <ButtonHoverDark
                        text={"Loading..."}
                    />
                    :
                    <ButtonHoverDark
                        text={"Login"}
                        handleClick={handleSubmit(handleClick)}
                    />
                }
            </section>


        </section>
    );
}

export default LoginComponent;