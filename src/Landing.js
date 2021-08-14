function Landing(){
    return(
        <div className="card">
            <div className="card-body">
                <h2>Landing</h2>
                <p>This is the landing page.</p>
                <p>It will serve as a navigation information page until it has been filled with relevant content.</p>
                <hr/>
                <p>All employee information will be organised under the employee navigation drop down with a path of <code>/Employee/[path]</code> to keep everything sorted.</p>
                <p>Similarly, all payment information will be kept under the Payment/Hours drop down with the path of <code>/Payment/[path]</code> to keep everything sorted.</p>
                <hr/>
                <p>If you have any notes on how you built something leave it here with your initials in <code>code tags</code></p>
            </div>
        </div>
    )
}
export default Landing;