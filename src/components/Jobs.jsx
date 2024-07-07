import Python from '../assets/python.png';
import Search from '../assets/search-icon.png';

export default function Jobs() {
  return (
    <section className='jobs'>
                <div className="card">
                  <div className="card-header">
                    <div className="d-flex">
                      <div className="header-titles d-flex gap_40 align_center">
                        <h4 className='card-title'>Posted Jobs</h4>
                        <p><a className='primary'>View All</a></p>
                      </div>
                      <div className="header-icons d-flex gap_40">
                        <div className="search-bar">
                            <input type="text" placeholder='Search' />
                            <img className='search-icon' src={Search} alt="search" />
                        </div>
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
                    <div className="d-flex nav-links">
                        <div className="nav-item active">Active Jobs</div>
                        <div className="nav-item">Inactive Jobs</div>
                        <div className="nav-item">Completed Jobs</div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex gap_40">
                      <div className="job-posts">
                        <div className="job-title d-flex just-btn">
                            <img src={Python} alt="Python" />
                            <h5>Python Developers</h5>
                            <p>#001</p>
                        </div>
                        <div className="job-description">
                          <p>Senior Developers</p>
                          <div className="job-applicant">
                            258
                          </div>
                          <p>Total Applicants</p>
                        </div>
                        <div className="job-schedule d-flex just-btn align_center">
                          <p>
                              <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3960_482)">
                                  <path d="M12.7136 7.08429C12.556 7.08429 12.4074 7.02366 12.2953 6.9115L6.81154 1.42474L1.32479 6.9115C1.09137 7.13885 0.715483 7.13279 0.491162 6.89634C0.269873 6.66899 0.269873 6.30523 0.491162 6.07484L6.39322 0.172787C6.6236 -0.0575958 6.99646 -0.0575958 7.22684 0.172787L13.1319 6.07787C13.3623 6.30826 13.3623 6.68111 13.1319 6.9115C13.0198 7.02366 12.8712 7.08429 12.7136 7.08429Z" fill="#0A66C2"/>
                                  <path d="M6.81182 14.7597C6.48443 14.7597 6.2207 14.496 6.2207 14.1686V0.591115C6.2207 0.263728 6.48443 0 6.81182 0C7.1392 0 7.40293 0.263728 7.40293 0.591115V14.1686C7.40293 14.496 7.1392 14.7597 6.81182 14.7597Z" fill="#0A66C2"/>
                                  <path d="M6.81182 16.5299C7.13828 16.5299 7.40293 16.2652 7.40293 15.9388C7.40293 15.6123 7.13828 15.3477 6.81182 15.3477C6.48535 15.3477 6.2207 15.6123 6.2207 15.9388C6.2207 16.2652 6.48535 16.5299 6.81182 16.5299Z" fill="#0A66C2"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0_3960_482">
                                    <rect width="12.9803" height="16.53" fill="white" transform="translate(0.648438)"/>
                                  </clipPath>
                                </defs>
                              </svg>
                              <span className='primary'> 28%</span> vs Last month
                          </p>
                          <p>6 mins ago</p>
                        </div>
                      </div>
                      <div className="job-posts">
                        <div className="job-title d-flex just-btn">
                            <img src={Python} alt="Python" />
                            <h5>Python Developers</h5>
                            <p>#001</p>
                        </div>
                        <div className="job-description">
                          <p>Senior Developers</p>
                          <div className="job-applicant">
                            258
                          </div>
                          <p>Total Applicants</p>
                        </div>
                        <div className="job-schedule d-flex just-btn align_center">
                          <p>
                              <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3960_482)">
                                  <path d="M12.7136 7.08429C12.556 7.08429 12.4074 7.02366 12.2953 6.9115L6.81154 1.42474L1.32479 6.9115C1.09137 7.13885 0.715483 7.13279 0.491162 6.89634C0.269873 6.66899 0.269873 6.30523 0.491162 6.07484L6.39322 0.172787C6.6236 -0.0575958 6.99646 -0.0575958 7.22684 0.172787L13.1319 6.07787C13.3623 6.30826 13.3623 6.68111 13.1319 6.9115C13.0198 7.02366 12.8712 7.08429 12.7136 7.08429Z" fill="#0A66C2"/>
                                  <path d="M6.81182 14.7597C6.48443 14.7597 6.2207 14.496 6.2207 14.1686V0.591115C6.2207 0.263728 6.48443 0 6.81182 0C7.1392 0 7.40293 0.263728 7.40293 0.591115V14.1686C7.40293 14.496 7.1392 14.7597 6.81182 14.7597Z" fill="#0A66C2"/>
                                  <path d="M6.81182 16.5299C7.13828 16.5299 7.40293 16.2652 7.40293 15.9388C7.40293 15.6123 7.13828 15.3477 6.81182 15.3477C6.48535 15.3477 6.2207 15.6123 6.2207 15.9388C6.2207 16.2652 6.48535 16.5299 6.81182 16.5299Z" fill="#0A66C2"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0_3960_482">
                                    <rect width="12.9803" height="16.53" fill="white" transform="translate(0.648438)"/>
                                  </clipPath>
                                </defs>
                              </svg>
                              <span className='primary'> 28%</span> vs Last month
                          </p>
                          <p>6 mins ago</p>
                        </div>
                      </div>
                      <div className="job-posts">
                        <div className="job-title d-flex just-btn">
                            <img src={Python} alt="Python" />
                            <h5>Python Developers</h5>
                            <p>#001</p>
                        </div>
                        <div className="job-description">
                          <p>Senior Developers</p>
                          <div className="job-applicant">
                            258
                          </div>
                          <p>Total Applicants</p>
                        </div>
                        <div className="job-schedule d-flex just-btn align_center">
                          <p>
                              <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3960_482)">
                                  <path d="M12.7136 7.08429C12.556 7.08429 12.4074 7.02366 12.2953 6.9115L6.81154 1.42474L1.32479 6.9115C1.09137 7.13885 0.715483 7.13279 0.491162 6.89634C0.269873 6.66899 0.269873 6.30523 0.491162 6.07484L6.39322 0.172787C6.6236 -0.0575958 6.99646 -0.0575958 7.22684 0.172787L13.1319 6.07787C13.3623 6.30826 13.3623 6.68111 13.1319 6.9115C13.0198 7.02366 12.8712 7.08429 12.7136 7.08429Z" fill="#0A66C2"/>
                                  <path d="M6.81182 14.7597C6.48443 14.7597 6.2207 14.496 6.2207 14.1686V0.591115C6.2207 0.263728 6.48443 0 6.81182 0C7.1392 0 7.40293 0.263728 7.40293 0.591115V14.1686C7.40293 14.496 7.1392 14.7597 6.81182 14.7597Z" fill="#0A66C2"/>
                                  <path d="M6.81182 16.5299C7.13828 16.5299 7.40293 16.2652 7.40293 15.9388C7.40293 15.6123 7.13828 15.3477 6.81182 15.3477C6.48535 15.3477 6.2207 15.6123 6.2207 15.9388C6.2207 16.2652 6.48535 16.5299 6.81182 16.5299Z" fill="#0A66C2"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0_3960_482">
                                    <rect width="12.9803" height="16.53" fill="white" transform="translate(0.648438)"/>
                                  </clipPath>
                                </defs>
                              </svg>
                              <span className='primary'> 28%</span> vs Last month
                          </p>
                          <p>6 mins ago</p>
                        </div>
                      </div>
                      <div className="job-posts">
                        <div className="job-title d-flex just-btn">
                            <img src={Python} alt="Python" />
                            <h5>Python Developers</h5>
                            <p>#001</p>
                        </div>
                        <div className="job-description">
                          <p>Senior Developers</p>
                          <div className="job-applicant">
                            258
                          </div>
                          <p>Total Applicants</p>
                        </div>
                        <div className="job-schedule d-flex just-btn align_center">
                          <p>
                              <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3960_482)">
                                  <path d="M12.7136 7.08429C12.556 7.08429 12.4074 7.02366 12.2953 6.9115L6.81154 1.42474L1.32479 6.9115C1.09137 7.13885 0.715483 7.13279 0.491162 6.89634C0.269873 6.66899 0.269873 6.30523 0.491162 6.07484L6.39322 0.172787C6.6236 -0.0575958 6.99646 -0.0575958 7.22684 0.172787L13.1319 6.07787C13.3623 6.30826 13.3623 6.68111 13.1319 6.9115C13.0198 7.02366 12.8712 7.08429 12.7136 7.08429Z" fill="#0A66C2"/>
                                  <path d="M6.81182 14.7597C6.48443 14.7597 6.2207 14.496 6.2207 14.1686V0.591115C6.2207 0.263728 6.48443 0 6.81182 0C7.1392 0 7.40293 0.263728 7.40293 0.591115V14.1686C7.40293 14.496 7.1392 14.7597 6.81182 14.7597Z" fill="#0A66C2"/>
                                  <path d="M6.81182 16.5299C7.13828 16.5299 7.40293 16.2652 7.40293 15.9388C7.40293 15.6123 7.13828 15.3477 6.81182 15.3477C6.48535 15.3477 6.2207 15.6123 6.2207 15.9388C6.2207 16.2652 6.48535 16.5299 6.81182 16.5299Z" fill="#0A66C2"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0_3960_482">
                                    <rect width="12.9803" height="16.53" fill="white" transform="translate(0.648438)"/>
                                  </clipPath>
                                </defs>
                              </svg>
                              <span className='primary'> 28%</span> vs Last month
                          </p>
                          <p>6 mins ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
  )
}
