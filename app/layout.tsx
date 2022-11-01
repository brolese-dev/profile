import './globals.css';

import { Lato } from '@next/font/google';

const lato = Lato({weight: ['100', '300', '400', '700', '900']});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className={lato.className}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Brolese.dev</title>
            </head>
            <body className="dark:bg-primary">
                <div className="container md:mx-auto p-4">
                    {children}
                </div>
            </body>
        </html>
    );
}
