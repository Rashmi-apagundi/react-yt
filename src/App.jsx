import React from 'react'
import Card from './Components/Card'
import User from './Components/User'


const jobOpenings = [
  {
    brandLogo: "https://i.pinimg.com/1200x/75/ad/25/75ad255ebbf47f949a79efa26e28cbbe.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/5c/18/c4/5c18c47c722f6c6afd5d62a5c80db9e8.jpg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 40,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/1c/aa/03/1caa032c47f63d50902b9d34492e1303.jpg",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/48/b3/81/48b3813c7c407063c831dffe66eb462e.jpg",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 48,
    location: "Remote, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/fa/76/9b/fa769ba2fd25c9bdd269a736e0942218.jpg",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/f7/95/4a/f7954aecdd40be91bae0ddb650428523.jpg",
    companyName: "Netflix",
    datePosted: "4 weeks ago",
    post: "Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Remote, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/e4/88/77/e488777d759169c74b74aa95f07adbed.jpg",
    companyName: "Tesla",
    datePosted: "2 days ago",
    post: "Software Engineer (AI)",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 65,
    location: "Pune, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/2f/84/62/2f846269b731a798c6cc3338b04131f2.jpg",
    companyName: "NVIDIA",
    datePosted: "6 weeks ago",
    post: "GPU Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 75,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/05/0a/c9/050ac92cb432973286bbba0b3637f17c.jpg",
    companyName: "Samsung",
    datePosted: "8 days ago",
    post: "Android Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 38,
    location: "Noida, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/17/90/83/179083a71eca14def7c262fd457f117d.jpg",
    companyName: "Oracle",
    datePosted: "3 weeks ago",
    post: "Database Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 42,
    location: "Mumbai, India"
  }
];

const App = () => {
  return (
    <div className='parent'>
      {jobOpenings.map((job, index) => (
        <Card 
          key={index}
          brandLogo={job.brandLogo}
          companyName={job.companyName}
          datePosted={job.datePosted}
          post={job.post}
          tag1={job.tag1}
          tag2={job.tag2}
          pay={job.pay}
          location={job.location} />
      ))}

    </div>
  )
}

export default App