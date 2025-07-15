import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Cardscroling.css'

const cardData = [
  {
    title: 'John Doe',
    label: ' 2 hours ago',
    image: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740',
    icon: 'bi-alarm',
    descriptionLine1: 'The API integrates seamlessly with our platform. ',
    descriptionLine2: 'It accurately identifies invalid emails, helping us maintain a clean, active list.'
  },
  {
    title: 'Jane Smith',
    label: '2 Day ago',
    image: 'https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg',
    icon: 'bi-briefcase',
    descriptionLine1: ' I ve been using the service for our email validation and its been incredibly reliable.  ',
    // descriptionLine2: 'The interface is intuitive, and we will seen improved delivery rates by 40% since we started using it.'
  },
  {
    title: 'Alex Johnson',
    label: ' 12 hours ago',
    image: 'https://www.shutterstock.com/image-photo/halflength-portrait-man-brownred-hair-260nw-2593679055.jpg',
    icon: 'bi-calendar',
    descriptionLine1: 'Very quick and easy to configure. Took less than 5 minutes to set up and start validating emails. ',
     
  },
  {
    title: 'Lisa Brown',
    label: '3 days ago',
    image: 'https://media.gettyimages.com/id/626855566/es/foto/trabajar-mejor-no-m%C3%A1s.jpg?s=612x612&w=gi&k=20&c=4Wt1onq1bUjk7eoG2wu4hcgoE9L3mrCTvrRlOAAgqfc=',
    icon: 'bi-chat-left-text',
    descriptionLine1: 'What sets them apart is their excellent customer support. Any questions I had were answered within hours. ',
    
  },
  {
    title: 'Chris Lee',
    label: '1 hours ago',
    image: 'https://img.freepik.com/premium-photo/portrait-young-woman-standing-against-yellow-background_1048944-24255381.jpg?semt=ais_hybrid&w=740',
    icon: 'bi-cloud',
    descriptionLine1: 'Been using it for 6 months now and its prevented countless spam issues. ',
    descriptionLine2: 'The real-time validation feature is fantastic for our signup forms.'
  },
  {
    title: 'Nina Ray',
    label: ' 10 hours ago',
    image: 'https://media.istockphoto.com/id/508182206/photo/closeup-of-a-smiling-young-black-woman.jpg?s=612x612&w=0&k=20&c=q43lp302lfagHDolsgqKXx8xBKBqPII3-CuYoTDW8wQ=',
    icon: 'bi-cpu',
    descriptionLine1: 'Ive been using the service for our email validation and its been incredibly reliable. ',
    descriptionLine2: 'The interface is intuitive.'
  },
  {
    title: 'Tom Green',
    label: ' 2 hours ago',
    image: 'https://thumbs.dreamstime.com/b/handsome-man-smiling-studio-portrait-young-men-34867462.jpg',
    icon: 'bi-gear',
    descriptionLine1: 'The API integrates seamlessly with our platform. It accurately identifies invalid emails, helping us maintain a clean, active list.',
    // descriptionLine2: 'CI/CD ninja.'
  },
  {
    title: 'Ella White',
    label: ' 4 days ago',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    icon: 'bi-lightning',
    descriptionLine1: 'Finally found a service that actually delivers on its promise. ',
    descriptionLine2: 'Cleaned over 50,000 emails from our database and our reputation score has improved dramatically.'
  },
  {
    title: 'Ryan Kim',
    label: ' 9 hours ago',
    image: 'https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg',
    icon: 'bi-map',
    descriptionLine1: 'Been using it for 6 months now and its prevented countless spam issues. ',
    descriptionLine2: 'The real-time validation feature is fantastic for our signup forms.'
  },
  {
    title: 'Sara Black',
    label: ' 2 Min ago',
    image: 'https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
    icon: 'bi-star',
    descriptionLine1: 'What sets them apart is their excellent customer support.',
    descriptionLine2: ' Any questions I had were answered within hours. '
  }
];

const CardScrolling = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1000); // start animation after 1 second
    return () => clearTimeout(timer);
  }, []);

  const loopedCards = [...cardData, ...cardData]; // duplicate for infinite scroll

  return (
    <div className="scroll-container">
      <div className={`scroll-row ${animate ? 'animate' : ''}`}>
        {loopedCards.map((card, index) => (
          <div className="scroll-card" key={index}>
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex">
                <img src={card.image} alt="profile" className="profile-img me-2" />
                <div>
                  <h6 className="mb-0">{card.title}</h6>
                  <small className="text-muted">{card.label}</small>
                </div>
              </div>
              <div className="text-warning">
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
            <div className="mt-3">
              <p className="mb-1">{card.descriptionLine1}</p>
              <p className="mb-0">{card.descriptionLine2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardScrolling;


 