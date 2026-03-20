import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./TeamSection.css";

const TeamSection = () => {
  const team = [
    {
      name: "John Martine",
      role: "Founder & CEO",
      bio: "With over 30 years of construction experience, John leads with vision and expertise. He founded Martine Construction in 1995 with a commitment to quality and integrity.",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      linkedin: "#",
      email: "john@martineconstruction.com",
    },
    {
      name: "Sarah Martine",
      role: "Chief Operating Officer",
      bio: "Sarah oversees daily operations and ensures every project meets our quality standards. Her background in project management and business administration keeps projects on track.",
      image: "https://randomuser.me/api/portraits/women/11.jpg",
      linkedin: "#",
      email: "sarah@martineconstruction.com",
    },
    {
      name: "Mike Johnson",
      role: "Project Director",
      bio: "Mike manages our project teams and maintains client relationships. His 20 years of experience in construction management ensures smooth project delivery.",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      linkedin: "#",
      email: "mike@martineconstruction.com",
    },
    {
      name: "Lisa Chen",
      role: "Design Lead",
      bio: "Lisa brings creative vision to every project with innovative design solutions. Her architectural background and attention to detail create stunning results.",
      image: "https://randomuser.me/api/portraits/women/13.jpg",
      linkedin: "#",
      email: "lisa@martineconstruction.com",
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
          <p>Experienced professionals dedicated to your project's success</p>
        </motion.div>

        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="team-image">
                <img src={member.image} alt={member.name} loading="lazy" />
                <div className="team-social">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a href={`mailto:${member.email}`}>
                    <FaEnvelope />
                  </a>
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
