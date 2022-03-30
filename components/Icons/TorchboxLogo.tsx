import styles from './TorchboxLogo.module.scss';

type TorchboxLogoProps = {
    className?: string;
};

export const TorchboxLogo = ({ className }: TorchboxLogoProps) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="130"
        height="50"
        fill="none"
        viewBox="0 0 137 40"
    >
        <g>
            <path
                className={styles.textPath}
                d="M7.576 20.672H0v-4.67h20.427v4.67h-7.535v18.764H7.576V20.672z"
            />
            <path
                className={styles.textPath}
                d="M16.111 31.181c0-1.222.22-2.362.644-3.42.439-1.072 1.028-1.992 1.809-2.788a8.238 8.238 0 012.78-1.882c1.083-.454 2.288-.687 3.59-.687 1.301 0 2.493.233 3.576.687 1.068.453 2 1.085 2.767 1.881a8.889 8.889 0 011.809 2.789c.438 1.071.643 2.212.643 3.42a9.104 9.104 0 01-.643 3.42c-.439 1.072-1.028 1.992-1.809 2.79-.767.796-1.699 1.428-2.767 1.895-1.069.467-2.26.7-3.576.7-1.315 0-2.507-.233-3.59-.7-1.082-.467-2.013-1.1-2.78-1.896a8.889 8.889 0 01-1.809-2.788 9.2 9.2 0 01-.644-3.42zm8.837 4.423c.63 0 1.192-.123 1.685-.37a3.696 3.696 0 001.247-1.003c.342-.426.589-.893.753-1.429a5.431 5.431 0 00.247-1.634c0-.564-.083-1.113-.247-1.635a4.077 4.077 0 00-.753-1.401 3.83 3.83 0 00-1.247-.99c-.493-.246-1.055-.37-1.685-.37a3.81 3.81 0 00-1.7.37 3.564 3.564 0 00-1.246.99 4.6 4.6 0 00-.753 1.4 5.042 5.042 0 00-.26 1.636 5.041 5.041 0 001.013 3.063c.329.426.74.755 1.247 1.002a3.81 3.81 0 001.699.371zm10.905-12.651h4.836l.178 2.075c.425-.564 1-1.1 1.74-1.621.74-.509 1.685-.77 2.85-.77.438 0 .822.028 1.137.07.315.04.63.123.931.246l-.808 4.465c-.52-.165-1.123-.248-1.822-.248-1.192 0-2.151.358-2.89 1.072-.74.714-1.11 1.73-1.11 3.036v8.145h-5.042v-16.47zm27.372 14.3c-.67.755-1.575 1.387-2.685 1.937-1.11.535-2.425.81-3.945.81-1.33 0-2.535-.22-3.63-.646-1.083-.44-2.015-1.044-2.782-1.827a8.587 8.587 0 01-1.808-2.788c-.439-1.072-.644-2.267-.644-3.544 0-1.223.219-2.363.671-3.42a8.58 8.58 0 011.836-2.789 8.354 8.354 0 012.808-1.882c1.083-.453 2.275-.686 3.562-.686 1.494 0 2.795.247 3.891.741a8.503 8.503 0 012.768 1.965L60.21 28.42c-.37-.426-.835-.797-1.37-1.126-.534-.33-1.246-.495-2.137-.495-.602 0-1.15.124-1.63.371s-.89.563-1.233.962a4.15 4.15 0 00-.767 1.387 5.173 5.173 0 00-.26 1.676c0 .536.082 1.071.26 1.593s.438 1.003.767 1.402c.343.412.753.741 1.233 1.002.48.261 1.028.385 1.63.385.863 0 1.59-.165 2.179-.508.589-.344 1.054-.715 1.397-1.113l2.945 3.297zm1.412-21.264h5.014v8.544c.534-.632 1.246-1.113 2.137-1.456a7.403 7.403 0 012.699-.508c1.89 0 3.411.563 4.535 1.69 1.137 1.126 1.698 2.788 1.698 4.985v10.193h-5.014v-9.423c0-.962-.246-1.704-.74-2.253-.493-.536-1.15-.81-1.959-.81-.534 0-1.014.096-1.438.302a3.067 3.067 0 00-1.055.796 3.44 3.44 0 00-.63 1.14c-.137.44-.206.893-.206 1.388v8.86h-5.041V15.989zm18.974 0h5.042v8.187c.465-.495 1.11-.88 1.904-1.154.808-.275 1.603-.426 2.397-.426 1.165 0 2.206.22 3.124.673a6.631 6.631 0 012.302 1.813 8.147 8.147 0 011.425 2.638c.328 1.003.493 2.06.493 3.173 0 1.332-.22 2.569-.644 3.695-.439 1.126-1.055 2.088-1.877 2.884-.822.797-1.822 1.415-3.014 1.869-1.192.44-2.548.673-4.069.673-1.397 0-2.726-.124-3.973-.385-1.247-.26-2.288-.522-3.096-.81v-22.83h-.014zm5.042 19.437c.274.123.589.206.931.26.343.056.809.083 1.425.083 1.329 0 2.37-.44 3.096-1.305.74-.865 1.11-2.005 1.11-3.406 0-.522-.069-1.017-.192-1.511a4.1 4.1 0 00-.575-1.319 3.15 3.15 0 00-1-.948c-.411-.247-.904-.37-1.494-.37-1.123 0-1.945.315-2.493.933-.534.619-.808 1.443-.808 2.473v5.11zm13.001-4.245a9.09 9.09 0 01.644-3.42c.438-1.072 1.027-1.992 1.808-2.788a8.248 8.248 0 012.781-1.882c1.083-.454 2.288-.687 3.59-.687 1.301 0 2.493.233 3.576.687a8.32 8.32 0 012.767 1.881 8.884 8.884 0 011.808 2.789c.439 1.071.644 2.212.644 3.42a9.09 9.09 0 01-.644 3.42c-.438 1.072-1.027 1.992-1.808 2.79-.767.796-1.699 1.428-2.767 1.895-1.069.467-2.261.7-3.576.7s-2.507-.233-3.59-.7c-1.082-.467-2.013-1.1-2.781-1.896a8.884 8.884 0 01-1.808-2.788 9.195 9.195 0 01-.644-3.42zm8.837 4.423c.63 0 1.191-.123 1.685-.37a3.69 3.69 0 001.246-1.003c.343-.426.589-.893.754-1.429a5.444 5.444 0 00.246-1.634c0-.564-.082-1.113-.246-1.635a4.08 4.08 0 00-.754-1.401 3.825 3.825 0 00-1.246-.99c-.494-.246-1.055-.37-1.685-.37-.631 0-1.192.124-1.699.37a3.566 3.566 0 00-1.247.99 4.597 4.597 0 00-.753 1.4 5.019 5.019 0 00-.261 1.636c0 .563.082 1.112.261 1.634a4.91 4.91 0 00.753 1.429c.329.426.74.755 1.247 1.002.493.248 1.068.371 1.699.371z"
            />
            <path
                className={styles.textPath}
                d="M125.013 31.181l-5.987-8.228h6.028l2.945 4.396 2.973-4.396h5.507l-5.781 7.871L137 39.437h-6.028l-3.261-4.74-3.288 4.74h-5.507l6.097-8.256z"
            />
            <path
                className={styles.flamePath}
                d="M136.794 11.374a.227.227 0 00-.424-.083c-.644 1.154-1.548 2.143-2.179 2.445v-.123C134.082 5.632 128.328 1.305 126.3.04c-.192-.123-.424.083-.329.289 1.329 2.76.836 5.37-1.397 7.912-.425.467-.89 1.071-1.288 1.676 0 0-.479.7-.931 1.662l-.028-.028c-.918-1.4-1.123-3.077-1.164-3.997-.014-.22-.288-.302-.411-.137-.576.796-1.562 2.417-1.713 4.19-.356 4.285 2.179 8.667 6.535 9.834.206.055.356-.165.233-.343-.384-.605-.616-1.456-.616-2.555 0-2.541 2.74-6.401 2.74-6.401s2.74 3.86 2.74 6.401c0 1.113-.233 1.964-.617 2.569-.11.178.041.398.233.343 4.233-1.099 6.22-5.014 6.521-7.417.137-1.058.055-2.034-.014-2.665z"
            />
        </g>
    </svg>
);
