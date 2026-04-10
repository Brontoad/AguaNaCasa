/**
 * Dashboard Layout
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 *              Sueño, Diana S.
 * Tested by:   N/A
 * 
 * Created at:      February 26, 2026
 * Last Edited at:  March 13, 2026
 * Last Tested at:  N/A
 */
import Footer from "@/components/dashboard/footer";
import Header from "@/components/dashboard/header";
import { Head } from "@inertiajs/react";
import "resources/css/agua_na_casa.css";

export default function DashboardLayout({
    page,
    title
}: {
    page: any,
    title: string
}) {
    return (
        <div className="flex">
            <Head title={title}></Head>
            {/* Header */}
            <Header></Header>

            {/* Main Page */}
            <main className="page-content">{page}</main>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
}