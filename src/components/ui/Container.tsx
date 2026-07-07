// components/ui/Container.tsx
export function Container({
                              children,
                              className = "",
                          }: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`px-6 lg:px-10 ${className}`}>
            {children}
        </div>
    );
}