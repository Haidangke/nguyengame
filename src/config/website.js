import { FaWikipediaW, FaSteam, FaHome } from "react-icons/fa";
import React from 'react';
import {
    BsDiscord,
    BsFacebook,
    BsTwitter,
    BsTwitch,
    BsInstagram,
    BsYoutube,
    BsApple,
    BsReddit
} from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import { SiFandom, SiItchdotio, SiGogdotcom } from 'react-icons/si';
const websiteCategory = [
    {
        name: "official",
        value: 1,
        icon: <FaHome />
    },
    {
        name: "wikia",
        value: 2,
        icon: <SiFandom />
    },
    {
        name: "wikipedia",
        value: 3,
        icon: <FaWikipediaW />
    },
    {
        name: "facebook",
        value: 4,
        icon: <BsFacebook />
    },
    {
        name: "twitter",
        value: 5,
        icon: <BsTwitter />
    },
    {
        name: "twitch",
        value: 6,
        icon: <BsTwitch />
    },
    {
        name: "instagram",
        value: 8,
        icon: <BsInstagram />
    },
    {
        name: "youtube",
        value: 9,
        icon: <BsYoutube />
    },
    {
        name: "iphone",
        value: 10,
        icon: <BsApple />
    },
    {
        name: "android",
        value: 12,
        icon: <DiAndroid />
    },
    {
        name: "steam",
        value: 13,
        icon: <FaSteam />
    },
    {
        name: "reddit",
        value: 14,
        icon: <BsReddit />
    },
    {
        name: "itch",
        value: 15,
        icon: <SiItchdotio />
    },
    {
        name: "gog",
        value: 17,
        icon: <SiGogdotcom />
    },
    {
        name: "discord",
        value: 18,
        icon: <BsDiscord />
    }
];

export default websiteCategory;