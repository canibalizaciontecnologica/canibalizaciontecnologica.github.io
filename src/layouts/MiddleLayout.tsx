import { ReactNode } from 'react';

export default function MiddleLayout({ children, id, color = 'yellow' }: { children: ReactNode, id: string, color?: string }) {
    return (
      <div
        id={id}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: '100vw',
          minHeight: '100vh',
        }}
        className={`bg-${color}`}
      >
        {children}
      </div>
    );
};