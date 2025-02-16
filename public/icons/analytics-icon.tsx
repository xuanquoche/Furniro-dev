const AnalyticsIcon = ({ isActive }: { isActive?: boolean }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M4 3C4.55228 3 5 3.44772 5 4V19H20C20.5523 19 21 19.4477 21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"
                fill={isActive ? '#ffffff' : '#667085'}
            />
            <path
                d="M19.832 8.55468C20.1384 8.09516 20.0142 7.47429 19.5547 7.16793C19.0952 6.86158 18.4743 6.98576 18.1679 7.44528L14.7543 12.5657L11.6 10.2C11.1407 9.85553 10.4864 9.96762 10.1679 10.4453L6.16793 16.4453C5.86158 16.9048 5.98576 17.5257 6.44528 17.832C6.90481 18.1384 7.52568 18.0142 7.83203 17.5547L11.2457 12.4342L14.4 14.8C14.8593 15.1444 15.5136 15.0324 15.832 14.5547L19.832 8.55468Z"
                fill={isActive ? '#ffffff' : '#667085'}
            />
        </svg>
    );
};

export default AnalyticsIcon;
