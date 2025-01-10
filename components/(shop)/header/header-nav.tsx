import Link from 'next/link';

interface HeaderNavItem {
    title: string;
    url: string;
}

interface HeaderNavProps {
    navs: HeaderNavItem[];
}

const HeaderNav = ({ navs }: HeaderNavProps) => {
    return (
        <div className="flex w-[30%] justify-around">
            {navs.map((item, index) => (
                <Link key={index} href={item.url} className="py-1 px-2 hover:text-button-background">
                    <p className="text-base font-medium">{item.title}</p>
                </Link>
            ))}
        </div>
    );
};

export default HeaderNav;
