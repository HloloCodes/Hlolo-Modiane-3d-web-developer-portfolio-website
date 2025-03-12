import { Link } from "react-router-dom";
import confetti from "canvas-confetti"; // Import the confetti package

const CTA = () => {
  const handleClick = () => {
    // Trigger confetti when the button is clicked
    confetti({
      particleCount: 100, // Number of confetti particles
      spread: 70,         // How spread out the confetti is
      origin: { y: 0.6 }, // Position the confetti near the top of the screen
    });
  };

  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <Link 
        to='/contact' 
        className='btn'
        onClick={handleClick} // Add onClick event to trigger confetti
      >
        Contact
      </Link>
    </section>
  );
};

export default CTA;
