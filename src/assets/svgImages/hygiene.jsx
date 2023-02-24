import React from 'react';

const Hygiene = (props) => {
    return (
        <div>
            <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                class="w-16 h-16"
            >
                <mask
                    id="b"
                    style={{
                        maskType: "alpha",
                    }}
                    maskUnits="userSpaceOnUse"
                    x={8}
                    y={28}
                    width={48}
                    height={32}
                >
                    <path
                        d="M8 30.92A2.92 2.92 0 0 1 10.92 28h.19c2.003 0 3.799 1.236 4.515 3.107a7.599 7.599 0 0 0 8.829 4.682l5.304-1.242a9.901 9.901 0 0 1 4.486-.007l5.592 1.292a7.251 7.251 0 0 0 8.492-4.714A4.614 4.614 0 0 1 52.693 28h.263a2.847 2.847 0 0 1 2.84 3.037l-1.134 16.964A12 12 0 0 1 42.69 59.2H21.226A12 12 0 0 1 9.259 48.092L8 31.2v-.28Z"
                        fill="url(#a)"
                    />
                </mask>
                <g mask="url(#b)">
                    <path fill="#F7A6A5" d="M8 28h48v31.2H8z" />
                    <path opacity={0.6} fill="url(#c)" d="M22.4 34.752h18.4V49.6H22.4z" />
                    <path
                        opacity={0.6}
                        transform="rotate(56.208 13.477 23.587)"
                        fill="url(#d)"
                        d="M13.477 23.587h25.477v8.334H13.477z"
                    />
                    <path
                        opacity={0.6}
                        transform="matrix(-.5344 .84523 .84524 .5344 51.198 24.898)"
                        fill="url(#e)"
                        d="M0 0h25.477v6.555H0z"
                    />
                </g>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M37.623 6.494c-3.266 1.39-7.98 1.39-11.246 0-2.654-1.13-5.622-1.235-8.36-.051-5.78 2.499-8.373 9.8-5.857 16.387v.004l.785 1.697a84.326 84.326 0 0 1 5.963 17.922l1.246 5.876a3.817 3.817 0 0 0 3.7 2.87 3.817 3.817 0 0 0 3.77-3.207l1.756-10.905A2.652 2.652 0 0 1 32 34.858c1.303 0 2.413.945 2.62 2.23l1.756 10.904a3.817 3.817 0 0 0 3.77 3.208 3.817 3.817 0 0 0 3.7-2.871l1.246-5.876a84.326 84.326 0 0 1 5.963-17.922l.785-1.697v-.004c2.515-6.587-.077-13.888-5.857-16.387-2.738-1.184-5.707-1.08-8.36.05Z"
                    fill="url(#f)"
                />
                <defs>
                    <linearGradient
                        id="a"
                        x1={32}
                        y1={28}
                        x2={32}
                        y2={59.2}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#F7A6A5" />
                        <stop offset={1} stopColor="#F7A6A5" />
                    </linearGradient>
                    <linearGradient
                        id="c"
                        x1={31.6}
                        y1={34.752}
                        x2={31.6}
                        y2={49.6}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E78180" />
                        <stop offset={1} stopColor="#E78180" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                        id="d"
                        x1={26.215}
                        y1={23.587}
                        x2={26.215}
                        y2={31.921}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E78180" />
                        <stop offset={1} stopColor="#E78180" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                        id="e"
                        x1={12.739}
                        y1={0}
                        x2={12.739}
                        y2={6.555}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E78180" />
                        <stop offset={1} stopColor="#E78180" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                        id="f"
                        x1={16.706}
                        y1={5.6}
                        x2={41.555}
                        y2={49.508}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#F0F6F9" />
                        <stop offset={1} stopColor="#CDDFF2" />
                    </linearGradient>
                </defs>
            </svg>

        </div>
    );
}

export default Hygiene;
