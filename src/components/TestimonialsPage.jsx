import { useState, useEffect } from "react";
import "./TestimonialsPage.scss";

const testimonials = [
  {
    logo: "/Sales-Fortuna-Slider/images/SereneLovongLogo.png",
    text: "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
    personPhoto: "/Sales-Fortuna-Slider/images/Ethan Morgan.png",
    personName: "Ethan Morgan",
    position: "Founder and CEO, Serene Living Products",
  },
  {
    logo: "/Sales-Fortuna-Slider/images/Starlight Creations Logo.png",
    text: "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
    personPhoto: "/Sales-Fortuna-Slider/images/Olivia Hayes.png",
    personName: "Olivia Hayes",
    position: "Owner, Starlight Creations",
  },
  {
    logo: "/Sales-Fortuna-Slider/images/Opulent Living Group Logo.png",
    text: "Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",
    personPhoto: "/Sales-Fortuna-Slider/images/Alexander Reed.png",
    personName: "Alexander Reed",
    position: "Co-Founder, Opulent Living Group",
  },
];

export const TestimonialsPage = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 950) setVisibleCount(1);
      else if (width < 1330) setVisibleCount(2);
      else setVisibleCount(3);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const rotatePrev = () => {
    setStartIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const rotateNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () =>
    Array.from(
      { length: visibleCount },
      (_, i) => testimonials[(startIndex + i) % testimonials.length]
    );

  return (
    <section className="testimonials">
      <h1 className="testimonials__title">
        Voices of Success with Sales Fortuna
      </h1>

      <div
        className="testimonials__container"
        role="region"
        aria-label="Testimonials carousel"
      >
        <button
          className="testimonials__nav-button testimonials__nav-button--prev"
          onClick={rotatePrev}
          aria-label="Previous testimonials"
        >
          ^
        </button>

        <div className="testimonials__list">
          {getVisibleTestimonials().map((item, idx) => (
            <div className="testimonial" key={idx}>
              <div className="testimonial__logo-container">
                <img
                  className="testimonial__logo"
                  src={item.logo}
                  alt={`${item.personName} company logo`}
                />
              </div>

              <div className="testimonial__text-container">
                <p className="testimonial__text">{item.text}</p>
              </div>

              <div className="testimonial__author">
                <img
                  className="testimonial__photo"
                  src={item.personPhoto}
                  alt={item.personName}
                />
                <div>
                  <p className="testimonial__name">
                    {item.personName} <br />
                    <span className="testimonial__position">
                      {item.position}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="testimonials__nav-button testimonials__nav-button--next"
          onClick={rotateNext}
          aria-label="Next testimonials"
        >
          ^
        </button>
      </div>
    </section>
  );
};

export default TestimonialsPage;
