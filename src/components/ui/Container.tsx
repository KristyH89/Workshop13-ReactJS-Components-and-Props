// components/ui/Container.tsx
export function Container({
                              children,
                              className = "",
                          }: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`
                ml-0               /* Pin to the left edge instead of centering */
                max-w-8xl          /* Limit the width so layout doesn't stretch too wide */
                px-6 lg:px-10      /* Responsive horizontal padding */
                ${className}
            `}
        >
            {children}
        </div>
    );
}