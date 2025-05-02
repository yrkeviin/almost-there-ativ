import "./globals.css";

export const metadata = {
    title: "My Exam Mockup",
    description: "Projeto pra mostrar tudo que eu sei",
};

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <link rel="icon" href="/icon/favicon.ico" />
            </head>
            <body>{children}</body>
        </html>
    );
}
