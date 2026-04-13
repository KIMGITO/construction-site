import React, { useState } from "react";
import { motion } from "framer-motion";
import { TEAM } from "../../utils/constants";
import "./TeamSection.css";

const TeamSection = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="team-section py-20 bg-secondary-50">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-primary font-bold text-secondary-500 mb-4 relative inline-block">
            Meet Our Leadership Team
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary-500"></span>
          </h2>
          <p className="text-lg text-secondary-400">
            Dedicated professionals building Kenya's future with interlocking
            technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {TEAM.slice(0,4).map((member, index) => (
            <motion.div
              key={index}
              className="team-card bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center pb-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="team-image-wrapper pt-8 px-8 pb-4 bg-gradient-to-b from-secondary-50 to-white">
                <div className="team-image-circle w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-primary-500 bg-secondary-100 flex items-center justify-center">
                  {!imageErrors[index] && member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(index)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">
                        {member.initials}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="team-info px-6">
                <h3 className="text-xl font-primary font-bold text-secondary-500 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-secondary-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
