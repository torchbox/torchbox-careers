type ShareIconProps = {
    width?: number;
    height?: number;
    className?: string;
};

export const ShareIcon = ({
    width = 32,
    height = 33,
    className,
}: ShareIconProps) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        aria-hidden="true"
        viewBox="0 0 24 24"
    >
        <path
            fill="#2F128D"
            fillRule="evenodd"
            d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92 0-1.61-1.31-2.92-2.92-2.92z"
            clipRule="evenodd"
        />
        <mask
            id="a"
            style={{ maskType: 'alpha' }}
            width="18"
            height="20"
            x="3"
            y="2"
            maskUnits="userSpaceOnUse"
        >
            <path
                fill="#fff"
                fillRule="evenodd"
                d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92 0-1.61-1.31-2.92-2.92-2.92z"
                clipRule="evenodd"
            />
        </mask>
        <g mask="url(#a)">
            <path fill="#2F128D" d="M0 0h24v24H0z" />
        </g>
    </svg>
);
