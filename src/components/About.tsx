import { team } from "../constants/team";
    import TeamMember from "./team/TeamMember";
    
    export default function About() {
      return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                About <span className="text-primary">YAKSEN</span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
                Shaping the future with AI-powered business and creative solutions.
              </p>
            </div>
    
            <div className="mt-12 max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-500 dark:text-gray-400">
                YAKSEN: AI-driven solutions provide operational efficiencies,
                advanced decision-making, creativity in business, and solve complex
                problems. Our expertise empowers businesses to automate ad optimize
                workflows to measureble and sustainable results.
              </p>
            </div>
    
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Meet Our Team
              </h3>
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {team.map((member) => (
                  <TeamMember
                    key={member.id}
                    id={member.id}
                    name={member.name}
                    role={member.role}
                    image={member.image}
                    bio={""}
                    email={member.email}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      );
    }
