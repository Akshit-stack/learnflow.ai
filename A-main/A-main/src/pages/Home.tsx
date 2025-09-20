
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Award, Users, BrainCircuit, GraduationCap, Sparkles, Zap, Target, ArrowRight, Play, Star } from "lucide-react";

const FeatureCard = ({ icon, title, description, linkTo, gradient }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  linkTo: string,
  gradient: string
}) => (
  <div className="premium-card interactive-card group p-8 h-full">
    <div className={`h-16 w-16 rounded-2xl ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">{title}</h3>
    <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
    <Link to={linkTo} className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors">
      Explore <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
);

const StatCard = ({ number, label }: { number: string, label: string }) => (
  <div className="text-center">
    <div className="text-4xl font-display font-bold text-white mb-2">{number}</div>
    <div className="text-purple-100">{label}</div>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-emerald-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-4 py-2 mb-8">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">AI-Powered Learning Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Learning Journey
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Create intelligent flashcards, interactive quizzes, and collaborative study sessions. 
              Powered by AI to make learning faster, smarter, and more engaging.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/flashcards">
                <button className="btn-gradient text-lg px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 group">
                  <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Start Learning
                </button>
              </Link>
              <Link to="/quizzes">
                <button className="bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center gap-3">
                  <Target className="h-5 w-5" />
                  Create Quiz
                </button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="glass-card rounded-3xl p-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-3 gap-8">
                <StatCard number="10K+" label="Active Learners" />
                <StatCard number="50K+" label="Flashcards Created" />
                <StatCard number="98%" label="Success Rate" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4" />
              <span className="text-sm font-medium">Premium Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful AI-driven tools designed to accelerate your learning and boost retention
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BrainCircuit className="h-8 w-8 text-white" />}
              title="AI-Powered Flashcards"
              description="Transform any content into intelligent flashcards with spaced repetition algorithms and personalized difficulty adjustment."
              linkTo="/flashcards"
              gradient="bg-gradient-to-br from-purple-500 to-purple-700"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-white" />}
              title="Interactive Quizzes"
              description="Generate dynamic quizzes with multiple question types, instant feedback, and detailed performance analytics."
              linkTo="/quizzes"
              gradient="bg-gradient-to-br from-blue-500 to-blue-700"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-white" />}
              title="Collaborative Learning"
              description="Join study groups, compete with friends, and track progress together with real-time multiplayer features."
              linkTo="/join"
              gradient="bg-gradient-to-br from-emerald-500 to-emerald-700"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-emerald-50/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900">
              Simple. Powerful. Effective.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes with our intuitive three-step process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-purple-300 to-transparent hidden md:block"></div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">Upload Content</h3>
              <p className="text-gray-600 leading-relaxed">
                Import text, documents, videos, or paste URLs. Our AI processes any learning material instantly.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-blue-300 to-transparent hidden md:block"></div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">AI Generation</h3>
              <p className="text-gray-600 leading-relaxed">
                Watch as our advanced AI creates personalized flashcards, quizzes, and study materials tailored to your needs.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">Learn & Share</h3>
              <p className="text-gray-600 leading-relaxed">
                Study with spaced repetition, invite friends to collaborative sessions, and track your progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-emerald-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-3xl p-12 backdrop-blur-xl bg-white/10 border border-white/20">
            <GraduationCap className="h-20 w-20 text-white mx-auto mb-8 animate-float" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join thousands of students who've already revolutionized their study habits with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/flashcards">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
                  Start Learning Now
                </button>
              </Link>
              <Link to="/quizzes">
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Create Your First Quiz
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
