
const courses = [
  { id: 5610, title: 'CS5610 Web Development Foundation', term: 'Fall', year: 2023, section: '01', image: '/images/reactjs.jpg' },
  { id: 5600, title: 'CS5600 Computer Systems', term: 'Fall', year: 2023, section: '02', image: '/images/reactjs.jpg' },
  { id: 5200, title: 'CS5200 Database Management Systems', term: 'Fall', year: 2023, section: '03', image: '/images/reactjs.jpg' },
  { id: 5100, title: 'CS5100 Foundations of Artificial Intelligence', term: 'Fall', year: 2023, section: '04', image: '/images/reactjs.jpg' },
  { id: 5700, title: 'CS5700 Computer Networking', term: 'Fall', year: 2023, section: '05', image: '/images/reactjs.jpg' },
  { id: 6650, title: 'CS6650 Distributed Systems', term: 'Fall', year: 2023, section: '06', image: '/images/reactjs.jpg' },
  { id: 5150, title: 'CS5150 Game Artificial Intelligence', term: 'Fall', year: 2023, section: '07', image: '/images/reactjs.jpg' }
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row" style={{ paddingLeft: '15px' }}>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: '260px' }} key={course.id}>
              <div className="card">
                <img src={course.image} width={200} height={150} className="card-img-top" alt={`${course.title} image`} />
                <div className="card-body">
                  <a
                    className="wd-dashboard-course-link"
                    href={`#/Kanbas/Courses/${course.id}/Home`}
                    style={{ textDecoration: 'none', color: 'navy', fontWeight: 'bold' }}
                  >
                    {course.title}
                  </a>
                  <p className="wd-dashboard-course-title card-text">
                    {course.term} {course.year} - Section {course.section}
                  </p>
                  <a href={`#/Kanbas/Courses/${course.id}/Home`} className="btn btn-primary">Go</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
