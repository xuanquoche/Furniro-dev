interface StandardItemProps {
    icon: React.JSX.Element;
    title: string;
    description: string;
}

export const StandardItem = ({ description, icon, title }: StandardItemProps) => {
    return (
        <div className="flex gap-3 cursor-pointer">
            <div>{icon}</div>
            <div className="flex flex-col">
                <p className="font-semibold text-2xl">{title}</p>
                <p className="text-text-sort-description">{description}</p>
            </div>
        </div>
    );
};
