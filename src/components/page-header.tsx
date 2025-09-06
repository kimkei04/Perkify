import React from 'react';

type PageHeaderProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="grid gap-1">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight font-headline">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      {children && <div>{children}</div>}
    </div>
  );
}
