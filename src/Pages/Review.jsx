import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Review from "../assets/review.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";

const ReviewPage = () => {
     useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
        });
      }, []);

  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    review: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.review && formData.rating) {
      setReviews([formData, ...reviews]);
      setFormData({ name: "", review: "", rating: "" });
    }
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-ivory p-6 md:p-16 mt-[80px] font-dmsan">
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto bg-white border-[3px] border-coffee rounded-xl">
   
          <div className="w-full md:w-1/2 p-6" data-aos="fade-right">
            <h2 className="md:text-[50px] text-2xl text-coffee mb-6 mt-4">Leave a Review</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-black text-sm mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee focus:border-coffee"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-black text-sm mb-2">Rating (1-5)</label>
                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee focus:border-coffee"
                  required
                >
                  <option value="">Select Rating</option>
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <option key={rating} value={rating}>
                      {rating}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-black text-sm mb-2">Review</label>
                <textarea
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee focus:border-coffee"
                  placeholder="Write your review here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-coffee text-white px-4 py-2 rounded-md hover:bg-coffee-dark transition duration-200"
              >
                Submit
              </button>
            </form>

            <div className="mt-10" data-aos="fade-up">
              <h2 className="text-2xl font-semibold text-coffee mb-6">Reviews</h2>
              {reviews.length === 0 ? (
                <p className="text-gray-600">No reviews yet. Be the first to leave one!</p>
              ) : (
                <div className="space-y-4">
                  {reviews.map((review, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 border border-gray-200 rounded-lg p-4"
                    >
                      <h3 className="text-lg font-medium">{review.name}</h3>
                      <p className="text-sm text-gray-500">Rating: {review.rating}/5</p>
                      <p className="text-black mt-2">{review.review}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>


          <div className="w-full md:w-1/2" data-aos="fade-left">
            <img
              src={Review}
              alt="Review Illustration"
              className="h-full w-full object-cover rounded-r-lg"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ReviewPage;
