/**
 * Dashboard Header
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 *              Sueño, Diana S.
 * Tested by:   N/A
 * 
 * Created at:      March 13, 2026
 * Last Edited at:  March 13, 2026
 * Last Tested at:  N/A
 */
import Navbar from "./navbar";

export default function Header() {
    return (
        <header className="header-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Navbar></Navbar>
                    </div>
                </div>
            </div>
        </header>
    );
}