import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Roshani",
    feedback: `I’m currently pursuing the Python Full Stack Developer course at IT VEDANT, and I’ve had such a great experience so far. The mentors explain concepts clearly and are responsive when we have questions, which really supports the learning process. Nitin Sir’s teaching style is calm and beginner-friendly, which makes it easy for me to grasp concepts without feeling overwhelmed. A special thanks to Aman Sir as well, who’s always on point with updates and support for our batch.

The course is very practical, filled with real-world projects and industry-relevant content. What impresses me the most is how they also focus on the non-technical side—sessions on communication, resume building, LinkedIn/GitHub profiles, presentation skills, and interview preparation really set you up for success.

Additionally, the student portal provides structured learning resources, detailed notes, and a personalized progress report that helps track our development throughout the course.

Honestly, joining Itvedant has been one of the smartest moves I’ve made for my career, and I’m excited to keep learning and growing here.`,
    title: "Google Review",
    googleReviewLink: "https://g.co/kgs/DhR2jMb",
    image: "/images/reviews/anjali.jpg",
  },
  {
    name: "Ravi Sharma",
    feedback:
      "Truly inspiring mentor. From resume to projects, everything was hands-on.",
    title: "Google Review",
    googleReviewLink: "https://g.co/kgs/sample1",
    image: "/images/reviews/ravi.jpg",
  },
  {
    name: "Priya Mehta",
    feedback:
      "His mentorship gave me confidence to apply for jobs. Super grateful!",
    title: "Google Review",
    googleReviewLink: "https://g.co/kgs/sample2",
    image: "/images/reviews/priya.jpg",
  },
];

const TestimonialCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 350;

  const isLong = item.feedback.length > maxLength;
  const displayText = expanded ? item.feedback : item.feedback.slice(0, maxLength) + (isLong ? "..." : "");

  return (
    <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-orange-400 rounded-2xl p-1 max-w-2xl mx-auto shadow-2xl">
      <div className="bg-black bg-opacity-70 text-white rounded-2xl p-6">
        <p className="text-lg font-medium whitespace-pre-line">{`"${displayText}"`}</p>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-sm text-accent underline"
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        )}

        <a
          href={item.googleReviewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-sm text-blue-300 underline hover:text-white"
        >
          Read full review on Google ↗
        </a>

        <div className="mt-6 flex items-center gap-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-14 h-14 rounded-full border-2 border-white object-cover"
          />
          <div>
            <h4 className="text-xl font-bold">{item.name}</h4>
            <p className="text-sm text-gray-300 flex items-center gap-2">
              {item.title}
              <span className="text-green-500 text-xs font-semibold bg-white bg-opacity-10 px-2 py-0.5 rounded-full">
                ✔ Verified
              </span>
            </p>
            <div className="flex gap-1 mt-1">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCarousel = () => {
  return (
    <section className="bg-[#0e0d1b] text-white py-16 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
        What Students Say 💬
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialCarousel;
