import { DEFAULT_URL } from '../../Constant';
import { BaseLayoutProps } from '../../interfaces/LayoutInterface';

function FourthImageTable({ route }: BaseLayoutProps) {
    return (
        <>
            <div className="grid w-full grid-cols-2 gap-4 mt-2">
                <div className="grid-cols-1">
                    <img src={`${DEFAULT_URL}${route?.content?.firstImage}`} alt={route?.descriptiveSummary} className='w-full mb-4' />
                    <img src={`${DEFAULT_URL}${route?.content?.secondImage}`} alt={route?.descriptiveSummary} className='w-full' />
                </div>
                <div className="grid-cols-1">
                    <img src={`${DEFAULT_URL}${route?.content?.thirdImage}`} alt={route?.descriptiveSummary} className='w-full mb-4' />
                    <img src={`${DEFAULT_URL}${route?.content?.fourthImage}`} alt={route?.descriptiveSummary} className='w-full' />
                </div>
            </div>
        </>
    );
};

export default FourthImageTable;