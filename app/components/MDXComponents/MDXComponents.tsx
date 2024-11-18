import React from "react";

export const MDXComponents = {
    h1: (props: React.ComponentProps<'h1'>) => <h1 className="text-4xl font-bold mb-8" {...props} />,
    h2: (props: React.ComponentProps<'h2'>) => <h2 className="text-3xl font-bold mb-6 mt-16" {...props} />,
    h3: (props: React.ComponentProps<'h3'>) => <h3 className="text-2xl font-bold mb-4 mt-12" {...props} />,
    p: (props: React.ComponentProps<'p'>) => <p className="mt-6" {...props} />,
    a: (props: React.ComponentProps<'a'>) => (
        <a
            className="text-[var(--link)] border-b border-[var(--link)] hover:opacity-80"
            {...props}
        />
    ),
    // Add other component overrides as needed
};
