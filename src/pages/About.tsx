import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <nav className="mb-8">
          <Link to="/" className="text-primary hover:underline text-lg">&larr; Back to Home</Link>
        </nav>
        <h1 className="text-4xl font-bold mb-6 text-center">About Berlin Transportation Guide</h1>
        <p className="text-lg leading-relaxed mb-4">
          My name is David Annin. I am an IT Support professional currently expanding my skills in cloud computing and learning German. I graduated from Koforidua Technical University in Ghana with a Higher National Diploma (HND) in Computer Network Management.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I enjoy solving problems—especially when I can approach them with a creative twist. Alongside my IT work, I have a strong creative background. I previously worked as an illustrator for children’s books at Kwadwoan Publishing in Ghana, where I also served concurrently as the company’s IT support.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          This website is one of my personal passion projects. I have been living in Berlin for about four months at the time of writing, and like many newcomers, my beginning here was not easy. One of the biggest challenges I faced was understanding how the Berlin public transportation system works.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I strongly believe that if I struggle with something, others are likely facing the same problem too. This website is my attempt to turn that challenge into a solution. It is a simple, beginner-friendly introduction designed to help you understand how Berlin’s transportation system works, so you can feel more confident and avoid getting lost.
        </p>
        <p className="text-lg leading-relaxed text-center">
          I hope this project makes your journey in Berlin a little easier.
        </p>
      </div>
    </div>
  );
};

export default About;