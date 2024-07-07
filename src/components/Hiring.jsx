import Candidate1 from '../assets/candidate1.png';
import Candidate2 from '../assets/candidate2.png';
import Candidate3 from '../assets/candidate3.png';
import Candidate4 from '../assets/candidate4.png';
import Candidate5 from '../assets/candidate5.png';
import HeaderTile from './HeaderTile';

export default function Hiring() {
    let data = [
        {
            id: 1,
            name: "John Doe",
            role: "Senior Python Develpper",
            hiredBy: "Stella",
            img: Candidate1
        },
        {
            id: 2,
            name: "John Doe",
            role: "Senior Python Develpper",
            hiredBy: "Stella",
            img: Candidate2
        },
        {
            id: 3,
            name: "John Doe",
            role: "Senior Python Develpper",
            hiredBy: "Stella",
            img: Candidate3
        },
        {
            id: 4,
            name: "John Doe",
            role: "Senior Python Develpper",
            hiredBy: "Stella",
            img: Candidate4
        },
        {
            id: 5,
            name: "John Doe",
            role: "Senior Python Develpper",
            hiredBy: "Stella",
            img: Candidate5
        }
    ]
    return (
        <section className="hiring">
            <HeaderTile title="Hiring Candidates" />
            {data.map(({id, name, role, hiredBy, img})=>(
                <div className="hiring-details d-flex align_center" key={id}>
                    <div className="dp">
                        <img src={img} alt="Profile" />
                    </div>
                    <div className="details">
                        <p className="strong">{name}</p>
                        <p>{role}</p>
                        <p className="name">Hired by: {hiredBy}</p>
                    </div>
                    <div className="more-btn">
                        <button className="outline-btn">Details</button>
                    </div>
                </div>
            ))}
        </section>
    )
}
