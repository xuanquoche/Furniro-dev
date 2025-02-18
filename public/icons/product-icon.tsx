const ProductIcon = ({ isActive }: { isActive?: boolean }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-label="Product"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6H17C18.6569 6 20 7.34315 20 9V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V9C4 7.34315 5.34315 6 7 6H8ZM10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6H10ZM8 8V8.5C8 9.05228 8.44772 9.5 9 9.5C9.55228 9.5 10 9.05228 10 8.5V8H14V8.5C14 9.05228 14.4477 9.5 15 9.5C15.5523 9.5 16 9.05228 16 8.5V8H17C17.5523 8 18 8.44772 18 9V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V9C6 8.44772 6.44772 8 7 8H8Z"
                fill={isActive ? '#ffffff' : '#667085'}
            />
        </svg>
    );
};

export default ProductIcon;
