import * as React from "react"

const SvgComponent = (props) => (
    <svg
        id="background"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 359 257"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        style={{
            backgroundColor: "transparent",
        }}
        {...props}
    >
        <style>
            {
                "@keyframes background-s-use1_ts__ts{0%{transform:translate(179.499641px,128.5px) scale(.999999,1.000002)}13.333333%{transform:translate(179.499641px,128.5px) scale(.435187,1.000002)}26.666667%,80%{transform:translate(179.499641px,128.5px) scale(0,1.000002)}40%{transform:translate(179.499641px,128.5px) scale(-.33,1.000002)}53.333333%{transform:translate(179.499641px,128.5px) scale(-.66,1)}66.666667%{transform:translate(179.499641px,128.5px) scale(-1,1)}93.333333%,to{transform:translate(179.499641px,128.5px) scale(1,1.000002)}}"
            }
        </style>
        <defs>
            <image
                id="background-u-img1"
                width={359}
                height={257}
                xlinkHref="data:image/png;base64,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"
                preserveAspectRatio="xMidYMid meet"
            />
        </defs>
        <g
            transform="translate(179.5 128.5)"
            style={{
                animation:
                    "background-s-use1_ts__ts 1500ms linear infinite normal forwards",
            }}
            id="background-s-g1"
        >
            <use
                id="background-s-use1"
                width={359}
                height={257}
                xlinkHref="#background-u-img1"
                transform="translate(-179.5 -128.5)"
            />
        </g>
    </svg>
)

export default SvgComponent