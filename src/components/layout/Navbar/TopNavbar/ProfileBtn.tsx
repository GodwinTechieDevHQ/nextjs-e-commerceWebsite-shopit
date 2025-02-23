const ProfileBtn = () => {
    const { user } = useAppSelector((state) => state.auth); // Get user state

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
            {user?.name && (
                <span className="ml-2 text-sm font-medium hidden md:inline">
                    {user.name.split(" ")[0]} {/* Show only first name */}
                </span>
            )}
        </Link>
    );
};
