import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/about/123">Go to About 123</Link>
    </div>
  );
};

export default AboutPage;
