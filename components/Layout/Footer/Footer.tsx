import React, {FC} from 'react'

const FooterHomePage: FC = () => {
  return (
<footer className="footer-page position-relative">
    <div className="image-bg-footer">
      <img src="./assets/images/bg-item-footer-1.png" alt="bg-item-footer"/>
    </div>
    <div className="btn-up-to-top">
      <div className="d-flex align-items-center">
        <span>Up To Top</span>
        <div className="icon-arrow icon-arrow--secondary icon-arrow--top"></div>
      </div>
    </div>
    <div className="container-custom">
      <div className="box-image-balloons image">
        <img src="./assets/images/icon-balloons-shadow.png" alt="icon-balloons-shadow" className="icon-1 position-absolute"/>
        <img src="./assets/images/icon-balloons-shadow.png" alt="icon-balloons-shadow" className="icon-2 position-absolute"/>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <div className="name-list">SERVICES</div>
          <ul className="list-link-services">
            <li><a href="#">Software Development</a></li>
            <li><a href="#">Game Development</a></li>
            <li><a href="#">Software Maintenance</a></li>
            <li><a href="#">Mobile App Development</a></li>
            <li><a href="#">Emerging Technology</a></li>
            <li><a href="#">UX-UI Designer</a></li>
            <li><a href="#">QA & Testing</a></li>
          </ul>
        </div>
        <div className="col-6 col-xl-3">
          <div className="name-list">SOLUTIONS</div>
          <ul>
            <li><a href="#">Enterprise Solutions</a></li>
            <li><a href="#">Trending Soltuions</a></li>
            <li><a href="#">Industries</a></li>
          </ul>
          <div className="name-list">HIRE A TEAM</div>
        </div>
        <div className="col-6 col-xl-3">
          <div className="name-list">COMPANY</div>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Our Achievement</a></li>
            <li><a href="#">Our Leader</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-copy-right">
      <div className="container-custom">
        COPYRIGHT © 2021 NEWWAVE SOLUTIONS JSC. ALL RIGHTS RESERVED.
      </div>
    </div>
  </footer>
  )
}

export {FooterHomePage}
