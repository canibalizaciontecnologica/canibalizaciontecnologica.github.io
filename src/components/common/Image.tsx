import { DEFAULT_URL } from '../../Constant';
import { BaseLayoutProps } from '../../interfaces/LayoutInterface';

function FourthImageTable({ route }: BaseLayoutProps) {
    return (
        <>
            <img src={`${DEFAULT_URL}${route?.content?.firstImage}`} alt={route?.descriptiveSummary} className='w-full my-10' />
        </>
    );
};

export default FourthImageTable;