export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
        <div id="wd-dashboard-courses">
            <div className="wd-dashboard-course">
                <img src="/images/reactjs.jpg" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5610/Home">
                    CS5610 Web Development
                </a>
                <p className="wd-dashboard-course-title">
                    Web Development
                </p>
                <a href="#/Kanbas/Courses/5610/Home"> Go </a>
                </div>
            </div>
            <div className="wd-dashboard-course"> 
                <img src="/images/c_logo.jpg" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5600/Home">
                    CS5600 Computer Systems
                </a>
                <p className="wd-dashboard-course-title">
                    Computer Systems
                </p>
                <a href="#/Kanbas/Courses/5600/Home"> Go </a>
                </div>
            </div>
            <div className="wd-dashboard-course">
            <img src="/images/golang_logo.jpg" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5200/Home">
                    CS5200 Database Management Systems
                </a>
                <p className="wd-dashboard-course-title">
                Database Management Systems
                </p>
                <a href="#/Kanbas/Courses/5200/Home"> Go </a>
                </div>
            </div>
            <div className="wd-dashboard-course">
            <img src="/images/java_logo.jpg" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5100/Home">
                    CS5100 Foundations of Artificial Intelligence
                </a>
                <p className="wd-dashboard-course-title">
                Foundations of Artificial Intelligence
                </p>
                <a href="#/Kanbas/Courses/5100/Home"> Go </a>
                </div>
            </div>
            <div className="wd-dashboard-course">
            <img src="/images/rust_logo.png" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5700/Home">
                    CS5700 Fundamentals of Computer Networking
                </a>
                <p className="wd-dashboard-course-title">
                    Fundamentals of Computer Networking
                </p>
                <a href="#/Kanbas/Courses/5700/Home"> Go </a>
                </div>
            </div>
            <div className="wd-dashboard-course">
            <img src="/images/golang_logo.jpg" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/6650/Home">
                    CS6650 Building Scalable Distributed Systems
                </a>
                <p className="wd-dashboard-course-title">
                    Building Scalable Distributed Systems
                </p>
                <a href="#/Kanbas/Courses/6650/Home"> Go </a>
                </div>
            </div>
            <div className="wd-dashboard-course">
            <img src="/images/python_logo.jpg" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5150/Home">
                    CS5150 Game Artificial Intelligence
                </a>
                <p className="wd-dashboard-course-title">
                    Game Artificial Intelligence
                </p>
                <a href="#/Kanbas/Courses/5150/Home"> Go </a>
                </div>
            </div>
        </div>
      </div>
  );}
  