import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
// when user types => request server on each type
// for a word ==> w(r)o(r)r(r)(d)
// debounce ==> 300ms, reduce server hits
// for a word ==> word(r)

import { useResultContext } from "../contexts/ResultContextProvider";

import { Links } from "./Links";

export const Search = () => {
    const [text, setText] = useState("");
    const { setSearchTerm } = useResultContext();
    const [debounceValue] = useDebounce(text, 300);

    useEffect(() => {
        if (debounceValue) setSearchTerm(debounceValue);
        // eslint-disable-next-line
    }, [debounceValue]);

    return (
        <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
            <input
                value={text}
                type="text"
                className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-small outline-none p-6 text-black hover:shadow-lg"
                placeholder="Khoj or type URL"
                onChange={(e) => setText(e.target.value)}
            />
            {text && (
                <button
                    type="button' className='absoulute top-1.5 right-4 text-2xl text-gray-500"
                    onClick={() => setText("")}
                >
                    X
                </button>
            )}
            <Links />
        </div>
    );
};
