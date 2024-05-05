import { ReactNode } from "react";

function FeaturedCourse({ children }: { children: ReactNode }) {
  return (
    <a className="featured-course">
      <section className="course-description">
        <h5 className="course-title">All Courses, Apple</h5>
        <h2 className="sub-title">IOS 12 & Swift</h2>
        {children}
        <div>
          <div className="lessons">218 Lesson</div>
          <div className="price">$200.00</div>
        </div>
      </section>
      <section className="course-image">
        <img src="#" alt="" />
      </section>
    </a>
  );
}

export default FeaturedCourse;
