import Link from "next/link";
import Image from "next/image";

const ProfileBtn = () => {
    return (
        <Link href="/profile" className="p-1 flex items-center">
            <Image
                priority
                src="/icons/user.svg"
                height={22}
                width={22}
                alt="profile"
                className="max-w-[22px] max-h-[22px]"
            />
        </Link>
    );
};

export default ProfileBtn;

// In case u need authentication
// const { user } = useAppSelector((state) => state.auth); Get user state
// const profilebtn = () => {

//     return (
//         <Link href="/profile" className="p-1 flex items-center">
//             <Image
//                 priority
//                 src="/icons/user.svg"
//                 height={22}
//                 width={22}
//                 alt="profile"
//                 className="max-w-[22px] max-h-[22px]"
//             />
//             {user?.name && (
//                 <span className="ml-2 text-sm font-medium hidden md:inline">
//                     {user.name.split(" ")[0]} {/* Show only first name */}
//                 </span>
//             )}
//         </Link>
//     );
// };
