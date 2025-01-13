import React from "react";
    import { useParams } from "react-router-dom";
    import { Brain, Mail, Github, Linkedin, Twitter } from "lucide-react";
    import Navbar from "../../components/Navbar";
    import { team } from "../../constants/team";
    import { useScrollToTop } from "../../hooks/useScrollToTop";
    import NotFound from "../NotFound";
    import { useNavigate } from "react-router-dom";
    import Footer from "../../components/footer/Footer";
    
    export default function TeamMemberPage() {
      useScrollToTop();
      const { id } = useParams();
      const navigate = useNavigate();
      const member = team.find((m) => m.id === id);
    
      if (!member) {
        return <NotFound />;
      }
    
      const handleProjectClick = (projectId: string) => {
        navigate(`/projects/${projectId}`);
      };
    
      return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Navbar />
    
          <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                {/* Profile Section */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                      <div className="aspect-square rounded-xl overflow-hidden mb-6">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {member.name}
                      </h1>
                      <p className="text-primary font-medium mb-4">{member.role}</p>
    
                      <div className="space-y-4">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                        >
                          <Mail className="h-5 w-5 mr-2" />
                          {member.email}
                        </a>
    
                        <div className="flex space-x-4">
                          {member.social?.github && (
                            <a
                              href={member.social.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:text-primary"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          )}
                          {member.social?.linkedin && (
                            <a
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:text-primary"
                            >
                              <Linkedin className="h-5 w-5" />
                            </a>
                          )}
                          {member.social?.twitter && (
                            <a
                              href={member.social.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:text-primary"
                            >
                              <Twitter className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    
                {/* Content Section */}
                <div className="lg:col-span-2 mt-12 lg:mt-0">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        About
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        {member.about}
                      </p>
                    </div>
    
                    {member.expertise && (
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          Expertise
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                          {member.expertise.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                            >
                              <Brain className="h-5 w-5 text-primary" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
    
                    {member.achievements && (
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          Achievements
                        </h2>
                        <ul className="space-y-4">
                          {member.achievements.map((achievement, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                            >
                              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                                <span className="h-2 w-2 rounded-full bg-primary" />
                              </span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
    
                    {member.projects && (
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          Featured Projects
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {member.projects.map((project, index) => (
                            <div
                              key={index}
                              onClick={() => handleProjectClick(project.name)}
                              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
                            >
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {project.name}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {project.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
