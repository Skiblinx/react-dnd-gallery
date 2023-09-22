/* eslint-disable react/prop-types */
import { signOut } from "firebase/auth";
import SearchBar from "../search-bar/search-bar";
import { auth } from "../../api/firebase-config/firebase-config";
import { ErrorToast, SuccessToast } from "../toast/toasts";

const Navbar = ({ data, setData }) => {

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                SuccessToast("Logout Successful");
            })
            .catch(() => {
                ErrorToast("Error logging out");
            })
    }

    return (
        <nav className="bg-gray-400 w-full shadow-md py-3 flex items-center justify-center s:justify-between flex-wrap gap-2.5 px-4">
            <SearchBar data={data} setData={setData} />
            <p onClick={handleSignOut} className="cursor-pointer hover:scale-[1.1] text-white text-xl font-medium"> Log out </p>
        </nav>
    );
}

export default Navbar;