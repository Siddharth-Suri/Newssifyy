export default function FarLeftButton(props: any): any {
    return (
        <button
            disabled={props.disabled}
            className={`hover:cursor-pointer ${
                props.disabled ? "text-gray-500" : "hover:text-amber-400"
            }`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
            </svg>
        </button>
    )
}
