import HeaderTile from "./HeaderTile"


export default function Upcoming() {
    let events = [
        {
            id: 1,
            role: "Designer",
            createdBy: "Stella",
            date: "07",
            month: "Feb",
            time: "10 A.M to 11 A.M"
        },
        {
            id: 2,
            role: "PMO",
            createdBy: "Stephan",
            date: "07",
            month: "Feb",
            time: "10 A.M to 11 A.M"
        },
        {
            id: 3,
            role: "Net. Admin",
            createdBy: "Stella",
            date: "07",
            month: "Feb",
            time: "10 A.M to 11 A.M"
        }
    ]
    return (
        <section className="upcomings">
            <HeaderTile title="Upcomings" />
            {events.map(({id, role, createdBy, date, month, time})=>(
                <div className="events d-flex" key={id}>
                    <div className="date-box light-blue">
                        <p className="date">{date}</p>
                        <p className="month">{month}</p>
                    </div>
                    <div className="details">
                        <p className="strong">Interview with {role}</p>
                        <p>
                            Created by <span className="primary">{createdBy}</span>
                        </p>
                        <p className="timing">{time}</p>
                    </div>
                    <div className="more-btn">
                        <button className="primary-btn">Details</button>
                    </div>
                </div>
            ))}
        </section>
    )
}
