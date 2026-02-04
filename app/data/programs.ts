import Image from "next/image";
import Link from "next/link";

// Program data
const programs = [
  {
    slug: "personal-training",
    title: "Personal Coaching & Training",
    image: "/img2.jpg",
    description: "One-on-one sessions, customized programs, and specialized coaching for your goals.",
    fullDescription: "Transform your fitness journey with our expert personal coaching and training programs. Our certified trainers work closely with you to create customized workout plans tailored to your specific goals, whether it's weight loss, muscle gain, or body transformation.",
    features: [
      "One-on-One Personal Training: Dedicated individual coaching sessions",
      "Customized Programs: Tailored workout plans for your specific goals",
      "Specialized Coaching: Programs for Weight Loss, Muscle Gain, and Body Transformation",
      "Targeted Training: Strength Training, Toning, and Functional Training",
      "Specialized Programs: Athlete Training, Sports Conditioning, and Rehabilitation Exercises",
    ],
  },
  {
    slug: "group-classes",
    title: "Group Classes",
    image: "/img3.jpg",
    description: "Zumba, Yoga, HIIT, Dance Fitness, Martial Arts, and CrossFit-based workouts.",
    fullDescription: "Join our energetic group classes and experience the power of community-driven fitness. Our diverse range of classes caters to all fitness levels, from beginners to advanced athletes.",
    features: [
      "Zumba, Yoga, Pilates, and Aerobics",
      "HIIT (High-Intensity Interval Training)",
      "Dance Fitness Classes",
      "Martial Arts (Boxing, Kickboxing, Muay Thai)",
      "CrossFit-Based Workouts",
    ],
  },
  {
    slug: "wellness-recovery",
    title: "Wellness & Recovery",
    image: "/img4.jpg",
    description: "Sauna access, blading therapy, cupping therapy, and stretching sessions.",
    fullDescription: "Recovery is just as important as training. Our wellness and recovery services help you restore, rejuvenate, and prepare your body for peak performance.",
    features: [
      "Sauna Access (2-seater Zion Carbon Sauna)",
      "Therapies: Blading and Cupping Therapy",
      "Stretching and Mobility Sessions",
    ],
  },
];

export { programs };
