const OrderDirectory = () => {
    return (
        <section className="order-directory-sect">
            <table className="order-table">
                <thead className="order-table-head"> 
                    <td>
                        Order Number
                    </td>
                    <td>
                        Client ID
                    </td>
                    <td>
                        Product ID
                    </td>
                    <td>
                        Actions
                    </td>
                </thead>
                <tbody className="order-table-body">

                </tbody>
            </table>
        </section>
    )
}

export default OrderDirectory;