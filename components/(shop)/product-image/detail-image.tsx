import Image from 'next/image';
import Sofa from '@/public/images/sofa.png';
import SubImage from '@/public/images/sub-image.png';

export interface IDetailImageProps {
    thumbnail?: string;
    images?: string[];
}

export function DetailImage({ thumbnail, images }: IDetailImageProps) {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-8 max-h-[500px]">
            <div className="flex flex-row md:flex-col px-2 gap-3 overflow-y-scroll max-h-[500px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full">
                <Image
                    src={SubImage}
                    alt="sub-image"
                    width={76}
                    height={80}
                    className="bg-standard rounded-xl min-w-[76px] md:min-w-[100px] min-h-[80px] md:min-h-[100px]"
                />
                <Image
                    src={SubImage}
                    alt="sub-image"
                    width={76}
                    height={80}
                    className="bg-standard rounded-xl min-w-[76px] md:min-w-[100px] min-h-[80px] md:min-h-[100px]"
                />
                <Image
                    src={SubImage}
                    alt="sub-image"
                    width={76}
                    height={80}
                    className="bg-standard rounded-xl min-w-[76px] md:min-w-[100px] min-h-[80px] md:min-h-[100px]"
                />
                <Image
                    src={SubImage}
                    alt="sub-image"
                    width={76}
                    height={80}
                    className="bg-standard rounded-xl min-w-[76px] min-h-[80px] md:min-h-[100px]"
                />
                <Image
                    src={SubImage}
                    alt="sub-image"
                    width={76}
                    height={80}
                    className="bg-standard rounded-xl min-w-[76px] min-h-[80px] md:min-h-[100px]"
                />
                <Image
                    src={SubImage}
                    alt="sub-image"
                    width={76}
                    height={80}
                    className="bg-standard rounded-xl min-w-[76px] min-h-[80px] md:min-h-[100px]"
                />
                <Image
                    src={SubImage}
                    alt="sub-image"
                    width={76}
                    height={80}
                    className="bg-standard rounded-xl min-w-[76px] min-h-[80px] md:min-h-[100px]"
                />
                <Image
                    src={SubImage}
                    alt="sub-image"
                    width={76}
                    height={80}
                    className="bg-standard rounded-xl min-w-[76px] min-h-[80px] md:min-h-[100px]"
                />
                <Image
                    src={SubImage}
                    alt="sub-image"
                    width={76}
                    height={80}
                    className="bg-standard rounded-xl min-w-[76px] min-h-[80px] md:min-h-[100px]"
                />
            </div>
            <div className="bg-standard max-h-[500px] flex items-center">
                <Image src={thumbnail || Sofa} alt="thumbnail" width={480} height={500} />
            </div>
        </div>
    );
}
