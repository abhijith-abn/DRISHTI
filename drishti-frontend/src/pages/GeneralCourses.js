const courseData = {
  title: "Introduction to Commerce",
  professor: "Dr. Anjali Sharma",
  profTitle: "Head of Management Studies",
  profImage: "https://i.pravatar.cc/150?u=anjali",
  topics: ["Market Dynamics", "Financial Literacy", "Business Ethics", "Trade Laws"],
  nextSession: "Saturday, April 11th - 10:00 AM",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual sample
};

// Inside your return JSX:
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
  <CourseCard course={courseData} />
</div>