import React, { useState } from "react";

import { NavLink } from "react-router-dom";

const links = [
    { url: "/search", text: "🔎 All" },
    { url: "/news", text: "📰 News" },
    { url: "/image", text: "📷 Images" },
    { url: "/videos", text: "🎥 Videos" },
];

export const Links = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {links.map(({ url, text }) => (
                <NavLink
                    exact
                    to={url}
                    className={ isActive ? 'text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2' : 'm-2 pb-0'}
                    onClick={() => setIsActive(true)}
                    activeClassName=" text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
                >
                    {text}
                </NavLink>
            ))}
        </div>
    );
};
