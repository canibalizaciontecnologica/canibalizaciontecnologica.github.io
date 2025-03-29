import { BaseLayoutProps } from '../../interfaces/LayoutInterface';
import { ColumnContent } from '../../interfaces/RouteInterface';

function ThreeColumnTable({ route }: BaseLayoutProps) {
    const getP = (column: ColumnContent, index?: number) => {
        return <p key={index} style={{ whiteSpace: 'pre-line' }} className={`${column.fontWeight ? `font-${column.fontWeight}` : ''} ${column.uppercase ? 'uppercase' : ''} text-${column.color}`}>{column.content}</p>;
    }
    return (
        <>
            <h3 className={`text-sm mb-4 ${route?.content?.uppercase ? 'uppercase' : ''} text-${route?.content?.color}`}>{route?.content?.title}</h3>
            {route?.content?.lineColor && <hr className={`border-${route?.content?.lineColor}`} />}
            <div className="grid w-full grid-cols-1 mt-2 gap-x-4 md:grid-cols-3">
                <div className="grid-cols-1">
                    {route?.content?.firstColumn?.map((column, index) => {
                        return column.lineColor ? <div key={index}>
                            {getP(column)}
                            <hr className={`my-2 border-${column.lineColor}`} />
                        </div> : getP(column, index);
                    })}
                </div>
                <div className="grid-cols-1">
                    {route?.content?.secondColumn?.map((column, index) => {
                        return column.lineColor ? <div key={index}>
                            {getP(column)}
                            <hr className={`my-2 border-${column.lineColor}`} />
                        </div> : getP(column, index);
                    })}
                </div>
                <div className="grid-cols-1">
                    {route?.content?.thirdColumn?.map((column, index) => {
                        return column.lineColor ? <div key={index}>
                            {getP(column)}
                            <hr className={`my-2 border-${column.lineColor}`} />
                        </div> : getP(column, index);
                    })}
                </div>
            </div>
        </>
    );
};

export default ThreeColumnTable;