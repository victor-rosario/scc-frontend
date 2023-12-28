import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {

    return (
        <Html>
            <Head>
                <meta name="theme-color" content="#2296f3" />
                <link rel="icon" href="/assets/images/logo.png" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="/assets/css/libs/daterangepicker.css" />
                <link rel="stylesheet" href="/assets/css/globals.css" />
                <link rel="stylesheet" href="/assets/css/custom.css" />
            </Head>

            <body>
                <Main />
                {/* JS script files */}
                {/* <script src="/assets/js/main.js"></script> */}
                <NextScript />
            </body>
        </Html>
    )

}