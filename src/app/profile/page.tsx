"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProfilePage = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Profile Header */}
            <div className="flex items-center gap-4 border-b pb-6">
                <Image
                    src="/images/avatar.png"
                    width={80}
                    height={80}
                    alt="User Avatar"
                    className="rounded-full"
                />
                <div>
                    <h2 className="text-2xl font-semibold">John Doe</h2>
                    <p className="text-gray-500">johndoe@example.com</p>
                </div>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Link href="/profile/orders" className="profile-link">
                    My Orders
                </Link>
                <Link href="/profile/wishlist" className="profile-link">
                    Wishlist
                </Link>
                <Link href="/profile/settings" className="profile-link">
                    Account Settings
                </Link>
                <Link href="/profile/address" className="profile-link">
                    Shipping Address
                </Link>
            </div>

            {/* Logout Button */}
            <div className="mt-6">
                <Button variant="destructive" className="w-full">
                    Logout
                </Button>
            </div>
        </div>
    );
};

export default ProfilePage;
