"use client";  

import React from "react";

const exampleData = [
    {
        id: 1,
        firstname: "Chinguun",
        lastname: "Toivgoo",
        school: "NIT",
        job: "developer",
        alive: "true",
        items: [
            { id: 10, name: "keyboard" },
            { id: 11, name: "mouse" }
        ],
        height: 185,
        image: 
        "https://gfxcrate.com/cdn/shop/collections/ss_959c2ea2f9129e4fb56e0b8ef7f78e498ab9866e.1920x1080.jpg?v=1737225190"
    },
    {
        id: 2,
        firstname: "Anand",
        lastname: "Altankhuyag",
        school: "NIT",
        job: "Software",
        alive: "true",  
        items:[
            { id: 12, name: "bag"},
            { id: 13, name: "phone"}
        ],
        height: 190,
        image:
        "https://w0.peakpx.com/wallpaper/426/583/HD-wallpaper-walter-white-jesse-pinkman-breaking-bad-jesse-pinkman-meth-walter-white-thumbnail.jpg"
    },
    {
        id: 3,
        firstname: "Anduul",
        lastname: "Altankhaich",
        school: "NIT",
        job: "UI-UX Designer",
        alive: "true",
        items:[
            { id: 14, name: "mouse"},
            { id: 15, name: "knife"}
        ],
        height: 190,
        image:
        "https://resizing.flixster.com/6OpOE_Poe-6srswUlPV0UDq7e-A=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p185267_b_h10_aa.jpg"
    },
    {
        id: 4,
        firstname: "Anar",
        lastname: "Batsukh",
        school: "NIT",
        job: "developer",
        alive: "true",
        items:[
            { id: 16, name: "airpod"},
            { id: 17, name: "pen"}
        ],
        height: 190,
        image:
        "https://i.guim.co.uk/img/media/8fc2d2159d4cadcec1eb1ab8c6eace7bdc693fea/0_140_4284_2570/master/4284.jpg?width=1200&quality=85&auto=format&fit=max&s=1a7076caeed54b8771676939f8ec3094"
    },
    {
        id: 5,
        firstname: "Audaulet",
        lastname: "Nurbulsin",
        school: "NIT",
        job: "Machine Learning",
        alive: "true",
        items: [
            { id: 10, name: "russia" },
            { id: 11, name: "nike" }
        ],
        height: 185,
        image: 
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b81c2865-f3f7-4c2d-9389-fc560e29404d/dc8t47q-8f2bf3db-7dd7-4aec-b8c9-5c99ac793f44.png/v1/fill/w_1024,h_576,q_80,strp/team_6_vanoss_rap_song_thumbnail_by_heymrnoodles_dc8t47q-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I4MWMyODY1LWYzZjctNGMyZC05Mzg5LWZjNTYwZTI5NDA0ZFwvZGM4dDQ3cS04ZjJiZjNkYi03ZGQ3LTRhZWMtYjhjOS01Yzk5YWM3OTNmNDQucG5nIiwiaGVpZ2h0IjoiPD01NzYiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9iODFjMjg2NS1mM2Y3LTRjMmQtOTM4OS1mYzU2MGUyOTQwNGRcL2hleW1ybm9vZGxlcy00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.Hm5w1X2fh5Fn93NlHZGSJYP-nSCFsJWz0HZBI_Pm9A0"
    },
    {
        id: 6,
        firstname: "Khantushig",
        lastname: "Ganhuyag",
        school: "NIT",
        job: "Businessman",
        alive: "true",
        items:[
            { id: 12, name: "vodka"},
            { id: 13, name: "barca jersey"}
        ],
        height: 190,
        image:
        "https://historyradio.org/wp-content/uploads/2018/03/napoleon-bonaparte-youtube-Thumbnail-1080x675-1024x640.png"
    },
    {
        id: 7,
        firstname: "Ayden-Anand",
        lastname: "AmarBold",
        school: "NIT",
        job: "developer",
        alive: "true",
        items:[
            { id: 14, name: "skibidi"},
            { id: 15, name: "roblox"}
        ],
        height: 190,
        image:
        "https://preview.redd.it/saw-this-cool-looking-you-tube-thumbnail-v0-0yjj0ukmp6nd1.png?auto=webp&s=aa39fb3ee9bfe477f09782d7c6433eb935e143df"
    },
    {
        id: 8,
        firstname: "Erkhes",
        lastname: "Sanchir",
        school: "NIT",
        job: "developer",
        alive: "true",
        items:[
            { id: 16, name: "bag"},
            { id: 17, name: "phone"}
        ],
        height: 190,
        image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-iEXhHDsOmKXw2d_bVGiQYCW7Fwr2TsaY7hjEOyrZE-be9kwOEcU0JoCwskFJI9byYjX3NFwlNrvqglP9g8ZfmWk_-RYdH83i4ozkLAKjypkBEYEx01RpuoFaDL1B0YjB8TucWh3DbC4/w1200-h630-p-k-no-nu/AwakenMyLove.jpg"
    },
    {
        id: 9,
        firstname: "Batpurev",
        lastname: "Batmunkh",
        school: "NIT",
        job: "Software Engineer",
        alive: "true",
        items:[
            { id: 14, name: "bag"},
            { id: 15, name: "phone"}
        ],
        height: 190,
        image:
        "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/256949692/original/29ebec4371296992451652d7d89f44405ec35ee1/design-anime-thumbnails-that-attracts-viewers.jpg"
    },
    {
        id: 10,
        firstname: "Soyombo",
        lastname: "Chinguunjav",
        school: "NIT",
        job: "developer",
        alive: "true",
        items:[
            { id: 16, name: "angry"},
            { id: 17, name: "sigma"}
        ],
        height: 190,
        image:
        "https://media.gettyimages.com/id/1409368635/video/macro-video-small-green-frog-in-garden-on-a-leaf.jpg?s=640x640&k=20&c=beIdOpIWwACkKGS8RF91WPgGyxn91UJimW7adui_2rE="
    },

    

];

export default function lab4() {
    const a = exampleData;
    console.log("length ->", exampleData.length);
    return (
        <div className="p-5 grid grid-cols-4 justify-between gap-10">
        {exampleData.map((element) => (
            <div key={element.id} className="flex flex-col p-3 rounded-lg text-black shadow-md w-60 h-50 border-white border shadow-lg shadow-blue-500">
                <img 
                    src={element.image} 
                    className="object-cover rounded"
                />
                <div className="flex justify-center">
                    <p className="text-white font-semibold">{element.firstname}</p>
                </div>
                <p className="text-white ml-2">Lastname: {element.lastname}</p>
                <p className="text-purple-700 ml-2">School: {element.school}</p>
                <p className="text-purple-700 ml-2">Job: {element.job}</p>
                <div className="mt-2 ml-2">
                        <p className="text-blue-400 font-semibold">Items:</p>
                        <ul className="list-disc ml-5 text-white">
                            {element.items.map((item) => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                    </div>  
            </div>
        ))}
    </div>
    );
}
