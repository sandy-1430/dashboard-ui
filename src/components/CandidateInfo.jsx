import SearchBar from './SearchBar';
import { Each } from '../utilis/Each';
import None from '../assets/none.png';
import Reject from '../assets/reject.png';
import Eye from '../assets/eye.png';

export default function CandidateInfo() {
    let tableData = [
      {
        jobId: "#001",
        name: "John Doe",
        position: "Designer",
        level1: "6/10",
        level2: "7/10",
        level3: "3/10",
        level4: None,
        marks: None,
        status: "Active",
        action: Eye
      },
      {
        jobId: "#002",
        name: "John Smith",
        position: "Developer",
        level1: "6/10",
        level2: "5/10",
        level3: "5/10",
        level4: "8/10",
        marks: "24/40",
        status: "Hired",
        action: Eye
      },
      {
        jobId: "#003",
        name: "Johnson Smith",
        position: "Developer",
        level1: "6/10",
        level2: "7/10",
        level3: "3/10",
        level4: None,
        marks: None,
        status: "Active",
        action: Eye
      },
      {
        jobId: "#004",
        name: "Stella",
        position: "Developer",
        level1: "6/10",
        level2: "2/10",
        level3: Reject,
        level4: Reject,
        marks: "8/40",
        status: "Reject",
        action: Eye
      },
      {
        jobId: "#005",
        name: "Randy",
        position: "Developer",
        level1: "6/10",
        level2: "7/10",
        level3: "3/10",
        level4: None,
        marks: None,
        status: "Active",
        action: Eye
      },
      {
        jobId: "#006",
        name: "John Doe",
        position: "Designer",
        level1: "6/10",
        level2: "7/10",
        level3: "3/10",
        level4: None,
        marks: None,
        status: "Active",
        action: Eye
      }
    ]
  return (
    <section className='candidate-table'>
                <div className="card">
                    <div className="card-header">
                      <div className="d-flex">
                        <div className="header-titles d-flex gap_40 align_center">
                          <h4 className='card-title'>Candidate Status</h4>
                          <p><a className='primary'>View All</a></p>
                        </div>
                        <div className="header-icons d-flex gap_40">
                          <SearchBar />
                          <button className='filter-btn'>
                              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3960_643)">
                                  <path d="M16.8912 9.14314H4.29121C3.6623 9.14314 3.24121 8.6848 3.24121 8.00028C3.24121 7.31575 3.6623 6.85742 4.29121 6.85742H16.8912C17.5201 6.85742 17.9412 7.31575 17.9412 8.00028C17.9412 8.6848 17.5201 9.14314 16.8912 9.14314Z" fill="#0A66C2"/>
                                  <path d="M13.7416 16.0006H7.4416C6.81269 16.0006 6.3916 15.5422 6.3916 14.8577C6.3916 14.1732 6.81269 13.7148 7.4416 13.7148H13.7416C14.3705 13.7148 14.7916 14.1732 14.7916 14.8577C14.7916 15.5422 14.3705 16.0006 13.7416 16.0006Z" fill="#0A66C2"/>
                                  <path d="M20.0418 2.28571H1.1418C0.512891 2.28571 0.0917969 1.82738 0.0917969 1.14286C0.0917969 0.458333 0.512891 0 1.1418 0H20.0418C20.6707 0 21.0918 0.458333 21.0918 1.14286C21.0918 1.82738 20.6707 2.28571 20.0418 2.28571Z" fill="#0A66C2"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0_3960_643">
                                    <rect width="21" height="16" fill="white" transform="translate(0.0917969)"/>
                                  </clipPath>
                                </defs>
                              </svg>
                              Filters
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <table>
                        <thead>
                          <tr>
                            <th>Job ID</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>1st Level</th>
                            <th>2nd Level</th>
                            <th>3rd Level</th>
                            <th>4th Level</th>
                            <th>Total Marks</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <Each of={tableData} render={(item)=>(
                            <tr>
                              <td>{item.jobId}</td>
                              <td>{item.name}</td>
                              <td>{item.position}</td>
                              <td>{item.level1.includes("/src/assets") ? <img src={item.level1} alt="level1" /> :  item.level1}</td>
                              <td>{item.level2.includes("/src/assets") ? <img src={item.level2} alt="level2" /> :  item.level2}</td>
                              <td>{item.level3.includes("/src/assets") ? <img src={item.level3} alt="level3" /> :  item.level3}</td>
                              <td>{item.level4.includes("/src/assets") ? <img src={item.level4} alt="level4" /> :  item.level4}</td>
                              <td>{item.marks.includes("/src/assets") ? <img src={item.marks} alt="marks" /> :  item.marks}</td>
                              <td><div className={`status ${item.status.toLowerCase()}`}>{item.status}</div></td>
                              <td>
                                <img src={item.action} alt={item.name} />
                              </td>
                            </tr>
                          )} />
                        </tbody>
                      </table>
                    </div>
                  </div>
              </section>
  )
}
