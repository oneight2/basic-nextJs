import { ReactNode } from "react";
import Header from "../header"
import Footer from "../footer"
import Head from 'next/head'

interface LayoutProps {
    children: ReactNode,
    pageTitle: string
}
export default function Layout(props: LayoutProps) {
    const { children, pageTitle } = props;
    return (
        <div>
            <Head>
                <title>Basic Next Js | {pageTitle}</title>
                <meta name="description" content="Basic Next Js" />
            </Head>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    )
}
