import { BaseLayoutProps } from '../../interfaces/LayoutInterface';

function DotList({ route, content }: BaseLayoutProps) {
    return (
        <div className={`text-${content ? content.color : route?.content?.color} text-left`}>
            <ul>
            {content ? content.body?.split(',')?.map((element, index) => {
                return <li key={index}>
                    {element}
                </li>;
            }) : route?.content?.body?.split(',')?.map((element, index) => {
                return <li key={index}>
                    {element}
                </li>;
            })}
            </ul>
        </div>
    );
};

export default DotList;