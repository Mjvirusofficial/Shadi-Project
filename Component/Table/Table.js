

function Table({ data }) {
    return (
        <div className='container' style={{overflow:'scroll'}}>
            <table className="table table-light tablefont" >
                <thead className=''>

                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">ADDRESS</th>
                        <th scope="col">RUPEES</th>
                        <th scope="col">GIFT</th>
                    </tr>
                </thead>

                {
                    data.map((i, id) => {
                        return <tbody>
                        
                        <tr>
                            <td scope="col">{id + 1}</td>
                            <td scope="col" >{i.name}</td>
                            <td scope="col" >{i.address}</td>
                            <td scope="col" >{i.rs}&#8377;</td>
                            <td scope="col">{i.gift}</td>
                        </tr>
                        </tbody>
                    })
                }


               
            </table>
        </div>
    )
}

export default Table