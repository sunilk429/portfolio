export const MDXComponents = {
    h1: (props: any) => <h1 className="text-4xl font-bold mb-8" {...props} />,
    h2: (props: any) => <h2 className="text-3xl font-bold mb-6 mt-16" {...props} />,
    h3: (props: any) => <h3 className="text-2xl font-bold mb-4 mt-12" {...props} />,
    p: (props: any) => <p className="mt-6" {...props} />,
    a: (props: any) => (
        <a
            className="text-[var(--link)] border-b border-[var(--link)] hover:opacity-80"
            {...props}
        />
    ),
    // Add other component overrides as needed
};
