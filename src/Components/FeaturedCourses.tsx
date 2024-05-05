import { ReactNode } from "react";

export function FeaturedCourses({ children }: { children: ReactNode }) {
  return (
    <section className="featured-courses">
      <h2 className="section-title">Featured Courses</h2>
      {children}
    </section>
  );
}
