import { ReactNode } from 'react';

export default function LeftTopIconLayout({ children, id, color = 'yellow', width = 'max-w-7xl' }: { children: ReactNode, id: string, color?: string, width?: string }) {
    return (
        <div id={id} className={`flex min-h-screen w-full relative justify-center items-center bg-${color}`}>
            <div className={`mx-auto ${width}`}>
                {children}
            </div>
        </div>
    );
};