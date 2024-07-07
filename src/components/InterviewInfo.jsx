import Profile from '../assets/profile.png';

export default function InterviewInfo() {
    return (
        <section>
            <div className="card">
                <div className="card-header">
                    <h4 className='card-title'>Today Interviews Meetings Info</h4>
                </div>
                <div className="card-body">
                    <div className="d-flex gap_40 interview">
                        <div className="d-flex interview-info flex_70">
                            <div className="flex_40">
                                <div className="candidate-info">
                                    <div className="profile">
                                        <img src={Profile} alt="Profile" />
                                        <p className='name'>John Smith</p>
                                        <p className='role'>Senior Python Developer</p>
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex_50">
                                            <div className="date">
                                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <mask id="mask0_3960_678" maskUnits="userSpaceOnUse" x="0" y="0" width="26" height="26">
                                                        <path d="M0.306641 0.873291H25.3523V25.9189H0.306641V0.873291Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask0_3960_678)">
                                                        <path d="M5.44287 20.7339V23.6689H24.6185V4.5912H5.44287V8.99376H24.6185" stroke="#0A66C2" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M9.89453 3.12356V6.05859" stroke="#0A66C2" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M20.2163 3.12356V6.05859" stroke="#0A66C2" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.0308 3.12356V6.05859" stroke="#0A66C2" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M5.44308 8.99422C5.44308 17.0656 1.04053 20.7344 1.04053 20.7344H20.2161C20.2161 20.7344 24.6187 17.0656 24.6187 8.99422" stroke="#0A66C2" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    </g>
                                                </svg>
                                                <p className='primary'>19th Feb 2024</p>
                                            </div>
                                        </div>
                                        <div className="flex_50">
                                            <div className="date">
                                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.8877 0.896484C5.99532 0.896484 0.387695 6.50411 0.387695 13.3965C0.387695 20.2889 5.99532 25.8965 12.8877 25.8965C19.7801 25.8965 25.3877 20.2889 25.3877 13.3965C25.3877 6.50411 19.7801 0.896484 12.8877 0.896484ZM12.8877 24.334C6.85665 24.334 1.9502 19.4275 1.9502 13.3965C1.9502 7.36544 6.85665 2.45899 12.8877 2.45899C18.9187 2.45899 23.8252 7.36544 23.8252 13.3965C23.8252 19.4275 18.9187 24.334 12.8877 24.334Z" fill="#0A66C2" />
                                                    <path d="M13.669 5.58398H12.1064V13.72L17.0228 18.6363L18.1276 17.5316L13.669 13.073V5.58398Z" fill="#0A66C2" />
                                                </svg>
                                                <p className='primary'>10.30 A.M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex_60">
                                <div className="d-flex">
                                    <div className="flex_50">
                                        <div className="levels d-flex">
                                            <p>1st Level:</p>
                                            <p>7/10</p>
                                        </div>
                                        <div className="levels d-flex">
                                            <p>2nd Level:</p>
                                            <p>7/10</p>
                                        </div>
                                        <div className="levels d-flex">
                                            <p>3rd Level:</p>
                                            <p>Waiting</p>
                                        </div>
                                        <div className="levels d-flex">
                                            <p>Meet Via:</p>
                                            <p>G-Meet</p>
                                        </div>
                                    </div>
                                    <div className="flex_50">
                                        <div className="interviewer d-flex">
                                            <p>Interviewer:</p>
                                            <p>Stella</p>
                                        </div>
                                        <div className="interviewer d-flex">
                                            <p>Interviewer:</p>
                                            <p>Smith</p>
                                        </div>
                                        <div className="interviewer d-flex">
                                            <p>Interviewer:</p>
                                            <p className='primary'>Stephan</p>
                                        </div>
                                        <div className="interviewer d-flex">
                                            <p>Attendees:</p>
                                            <p>Johnson</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex just_center meeting-links">
                                    <button className="outline-btn">Reschedule Meeting</button>
                                    <button className="primary-btn">Join Meeting</button>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex interview-info flex_70">
                            <div className="flex_40">
                                <div className="candidate-info">
                                    <div className="profile">
                                        <img src={Profile} alt="Profile" />
                                        <p className='name'>John Smith</p>
                                        <p className='role'>Senior Python Developer</p>
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex_50">
                                            <div className="date">
                                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <mask id="mask0_3960_678" maskUnits="userSpaceOnUse" x="0" y="0" width="26" height="26">
                                                        <path d="M0.306641 0.873291H25.3523V25.9189H0.306641V0.873291Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask0_3960_678)">
                                                        <path d="M5.44287 20.7339V23.6689H24.6185V4.5912H5.44287V8.99376H24.6185" stroke="#0A66C2" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M9.89453 3.12356V6.05859" stroke="#0A66C2" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M20.2163 3.12356V6.05859" stroke="#0A66C2" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.0308 3.12356V6.05859" stroke="#0A66C2" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M5.44308 8.99422C5.44308 17.0656 1.04053 20.7344 1.04053 20.7344H20.2161C20.2161 20.7344 24.6187 17.0656 24.6187 8.99422" stroke="#0A66C2" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    </g>
                                                </svg>
                                                <p className='primary'>19th Feb 2024</p>
                                            </div>
                                        </div>
                                        <div className="flex_50">
                                            <div className="date">
                                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.8877 0.896484C5.99532 0.896484 0.387695 6.50411 0.387695 13.3965C0.387695 20.2889 5.99532 25.8965 12.8877 25.8965C19.7801 25.8965 25.3877 20.2889 25.3877 13.3965C25.3877 6.50411 19.7801 0.896484 12.8877 0.896484ZM12.8877 24.334C6.85665 24.334 1.9502 19.4275 1.9502 13.3965C1.9502 7.36544 6.85665 2.45899 12.8877 2.45899C18.9187 2.45899 23.8252 7.36544 23.8252 13.3965C23.8252 19.4275 18.9187 24.334 12.8877 24.334Z" fill="#0A66C2" />
                                                    <path d="M13.669 5.58398H12.1064V13.72L17.0228 18.6363L18.1276 17.5316L13.669 13.073V5.58398Z" fill="#0A66C2" />
                                                </svg>
                                                <p className='primary'>10.30 A.M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex_60">
                                <div className="d-flex">
                                    <div className="flex_50">
                                        <div className="levels d-flex">
                                            <p>1st Level:</p>
                                            <p>7/10</p>
                                        </div>
                                        <div className="levels d-flex">
                                            <p>2nd Level:</p>
                                            <p>7/10</p>
                                        </div>
                                        <div className="levels d-flex">
                                            <p>3rd Level:</p>
                                            <p>Waiting</p>
                                        </div>
                                        <div className="levels d-flex">
                                            <p>Meet Via:</p>
                                            <p>G-Meet</p>
                                        </div>
                                    </div>
                                    <div className="flex_50">
                                        <div className="interviewer d-flex">
                                            <p>Interviewer:</p>
                                            <p>Stella</p>
                                        </div>
                                        <div className="interviewer d-flex">
                                            <p>Interviewer:</p>
                                            <p>Smith</p>
                                        </div>
                                        <div className="interviewer d-flex">
                                            <p>Interviewer:</p>
                                            <p className='primary'>Stephan</p>
                                        </div>
                                        <div className="interviewer d-flex">
                                            <p>Attendees:</p>
                                            <p>Johnson</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex just_center meeting-links">
                                    <button className="outline-btn">Reschedule Meeting</button>
                                    <button className="primary-btn">Join Meeting</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
