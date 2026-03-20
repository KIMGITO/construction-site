import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./TeamSection.css";

const TeamSection = () => {
  const team = [
    {
      name: "Martin Mukundi",
      role: "Founder & CEO",
      bio: "Martin founded Martin Construction in 2020 with a vision to revolutionize the industry through interlocking building technology. With over 5 years of experience in innovative construction methods, he leads with passion and expertise.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "#",
      email: "martin@martinconstruction.com",
    },

    {
      name: "Peter Kariuki",
      role: "Construction Manager",
      bio: "Peter manages our on-site construction teams with over 8 years of experience in interlocking and block construction. He ensures quality control and timely delivery of all projects.",
      image:
        "https://plus.unsplash.com/premium_photo-1702596364451-0bb71af4a291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWZyaWNhbnxlbnwwfHwwfHx8MA%3D%3D",
      linkedin: "#",
      email: "peter@martinconstruction.com",
    },
    {
      name: "James Otieno",
      role: "Technical Director - Interlocking Systems",
      bio: "James is our interlocking building specialist with expertise in precision engineering and structural integrity. He ensures every interlocking block project meets the highest standards of durability and safety.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "#",
      email: "james@martinconstruction.com",
    },
    {
      name: "Grace Wanjiku",
      role: "Chief Operating Officer",
      bio: "Grace oversees daily operations and ensures every project meets our quality standards. With a background in project management and business administration, she keeps all projects on track and within budget.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "#",
      email: "grace@martinconstruction.com",
    },
    {
      name: "Mary Muthoni",
      role: "Design & Architecture Lead",
      bio: "Mary brings creative vision to every project with innovative design solutions. Her architectural expertise ensures that each building is both beautiful and functional, maximizing space and natural light.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "#",
      email: "mary@martinconstruction.com",
    },

    {
      name: "Lucy Achieng",
      role: "Renovation Specialist",
      bio: "Lucy specializes in transforming existing spaces through expert renovation services. Her attention to detail and creative solutions breathe new life into older buildings while preserving their character.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "#",
      email: "lucy@martinconstruction.com",
    },
  ];

  return (
    <section className="team-section">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Meet Our Leadership Team</h2>
          <p>
            Dedicated professionals building Kenya's future with interlocking
            technology
          </p>
        </motion.div>

        <div className="team-grid">
          {team.slice(0,4).map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="team-image-wrapper">
                <div className="team-image-circle">
                  <img src={member.image} alt={member.name} loading="lazy" />
                  <div className="team-social-overlay">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaLinkedin />
                    </a>
                    <a href={`mailto:${member.email}`} className="social-icon">
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
