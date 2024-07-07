import User1 from '../assets/user1.png';
import User2 from '../assets/user2.png';
import User3 from '../assets/user3.png';
import HeaderTile from './HeaderTile';

export default function Activity() {
    let data = [
        {
            id: 1,
            img: User1,
            name: 'John Doe',
            interviewer: "Stella",
            time: "15 mins ago"
        },
        {
            id: 2,
            img: User2,
            name: 'John Doe',
            interviewer: "Stella",
            time: "15 mins ago"
        },
        {
            id: 3,
            img: User3,
            name: 'John Doe',
            interviewer: "Stella",
            time: "15 mins ago"
        }
    ]
    return (
        <section className="activity">
            <HeaderTile title="Activity" />
            {data.map(({id, img, name, interviewer, time})=>(
                <div className="activity-status d-flex align_center" key={id}>
                    <div className="dp">
                        <img src={img} alt="Profile" />
                    </div>
                    <div className="details">
                        <p className="strong">
                            {name}
                            <span className="primary"> [Python Developer]</span>
                        </p>
                        <p>Tnterview with {interviewer}</p>
                        <p className="timing">{time}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}
