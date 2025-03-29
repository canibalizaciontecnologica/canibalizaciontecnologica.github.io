import { DEFAULT_URL } from '../../Constant';
import { BaseLayoutProps } from '../../interfaces/LayoutInterface';

function TwoImageTable({ route }: BaseLayoutProps) {
    return (
        <>
            <div className="grid w-full grid-cols-2 gap-4 mt-2">
                <div className="grid-cols-1">
                    <img src={`${DEFAULT_URL}${route?.content?.firstImage}`} alt={route?.descriptiveSummary} className='w-full' />
                    {route?.content?.title2 && <p className='mt-4 overflow-hidden text-xs text-white uppercase'>{route?.content?.title2}</p>}
                    
                </div>
                <div className="grid-cols-1">
                    <img src={`${DEFAULT_URL}${route?.content?.secondImage}`} alt={route?.descriptiveSummary} className='w-full' />
                    {route?.content?.title3 && <p className='mt-4 overflow-hidden text-xs text-white uppercase'>{route?.content?.title3}</p>}
                </div>
            </div>
        </>
    );
};

export default TwoImageTable;