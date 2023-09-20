import { Link } from "react-router-dom";

const ActionSection = () => {
    return (
        <section className="action-section" id="section_1">
            <h1>What do you like to do?</h1>
            <div className="card-container">
                <div className="act-section-card">
                    <h2>Manage Orders</h2>
                    <p className="action-sect-text">Access Order Directory and manage customer orders</p>
                    <button className="action-sec-btn"><Link to="/orderDirectory" className="action-sec-btn">Get Started</Link></button>
                </div>
                <div className="act-section-card">
                    <h2>Manage Inventory</h2>
                    <p className="action-sect-text">Access Inventory Directory and manage available stocks</p>
                    <button className="action-sec-btn"><Link to="/orderDirectory" className="action-sec-btn">Get Started</Link></button>
                </div>
                <div className="act-section-card">
                    <h2>Edit Page</h2>
                    <p className="action-sect-text">Access Page Editor and configure page components</p>
                    <button className="action-sec-btn"><Link to="/orderDirectory" className="action-sec-btn">Get Started</Link></button>
                </div>
            </div>
        </section>
    )
}

export default ActionSection;