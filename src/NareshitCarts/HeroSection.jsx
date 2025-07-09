import { useState, useEffect } from "react";
import axios from "axios";
import "../NareshitCarts/herosection.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSection() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    function getCourses() {
        axios
            .get("public/cards.json")
            .then((response) => {
                setCourses(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching courses:", error);
                setLoading(false);
            });
    }

    useEffect(() => {
        getCourses();
    }, []);

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: true,
        dots: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    const handleEnroll = (course) => {
        console.log(`Enrolling in ${course.title}`);
    };

    const handleShare = (course) => {
        console.log(`Sharing ${course.title}`);
    };

    return (
        <>
            <section className="bg-white z-0 position-relative mt-0">
                <div className="carousel slide m-1" data-bs-ride="carousel" id="hero-carousel">
                    <div className="carousel-inner z-0">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src="public/images/carousel1.jpg" alt="course-img" height="100%" width="100%" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="public/images/carousel2.jpg" alt="course-img" height="100%" width="100%" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="public/images/carousel3.jpg" alt="course-img" height="100%" width="100%" />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="carousel-control-next carouselBtn me-4"
                        data-bs-target="#hero-carousel"
                        data-bs-slide="next"
                    >
                        <i className="bi bi-chevron-right text-dark"></i>
                    </button>
                    <button
                        className="carousel-control-prev carouselBtn ms-4"
                        data-bs-target="#hero-carousel"
                        data-bs-slide="prev"
                    >
                        <i className="bi bi-chevron-left text-dark"></i>
                    </button>
                </div>
            </section>
            <div style={{marginTop:"-20%"}}>     
            <section className="z-3 position-absulute m-5 course-section">
                {loading ? (
                    <div>Loading courses...</div>
                ) : (
                    <Slider {...settings}>
                        {courses.map((course,i) => (
                            <div key={i} style={{ padding: "0 10px" }}>
                                <div className="card coursel-card m-0 ">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        height="200"
                                        width="100%"
                                        className="rounded-top-2"
                                    />
                                    <div className="card-body">
                                        <h5 className="fw-bold">{course.title}</h5>
                                        <div className="mb-2">
                                            {[...Array(5)].map((_, idx) => (
                                                <i
                                                    key={idx}
                                                    className={`bi ${
                                                        idx < course.rating ? "bi-star-fill" : "bi-star"
                                                    } text-warning`}
                                                    style={{ marginRight: idx !== 4 ? "4px" : 0 }}
                                                ></i>
                                            ))}
                                        </div>
                                        <p>
                                            <i className="bi bi-clock me-1"></i> Start Date: {course.date}
                                        </p>
                                        <p>
                                            <i className="bi bi-person me-1"></i> By: {course.faculty}
                                        </p>
                                        <p>
                                            <i className="bi bi-clock me-1"></i> Duration: {course.duration}
                                        </p>
                                    </div>
                                    <div className="btn-group">
                                        <button
                                            className="btn btn-primary w-50 rounded-0 rounded-bottom-start-1"
                                            onClick={() => handleEnroll(course)}
                                        >
                                            Enroll
                                        </button>
                                        <button
                                            className="btn btn-light border-top w-50 rounded-0 rounded-bottom-end-1"
                                            onClick={() => handleShare(course)}
                                        >
                                            Share
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                )}
            </section>
             </div>
        </>
    );
}

export default HeroSection;