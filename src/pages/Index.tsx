import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Users, Globe, Heart, Target, Zap, Shield, TrendingUp, Mail, MapPin, ArrowRight, ChevronDown, Play, Star, Quote } from "lucide-react";

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend
    alert("Thank you for your interest! We'll be in touch soon.");
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  const faqs = [
    {
      question: "What is the technical architecture behind SunoSakhi?",
      answer: "SunoSakhi uses Google Cloud Speech-to-Text for transcription, Google Cloud Translation API for multilingual support, and secure AI language models for generating empathetic responses. The system is built for scalability and reliability."
    },
    {
      question: "How do you ensure data privacy and security?",
      answer: "We implement end-to-end encryption, comply with healthcare data regulations, and ensure no personal health information is stored. All conversations are anonymized and used only for improving our AI responses."
    },
    {
      question: "What is the cost structure and scalability model?",
      answer: "Our per-call cost decreases with scale. Current estimates show $0.15 per call, reducing to $0.08 at 100K+ monthly calls. The cloud-based infrastructure allows instant scaling across new regions."
    },
    {
      question: "What languages does SunoSakhi support?",
      answer: "Currently supporting 12 regional Indian languages including Hindi, Bengali, Tamil, Telugu, Marathi, and Gujarati. We're expanding to cover 22 languages by 2025."
    },
    {
      question: "How do you measure impact and success?",
      answer: "We track call volume, user retention, satisfaction scores, and work with local health organizations to measure behavioral changes and health outcomes in target communities."
    }
  ];

  const teamMembers = [
    {
      name: "Aayush Bindal",
      role: "Founder & CEO",
      bio: "Public Health researcher with 8+ years experience in rural healthcare. PhD from AIIMS.",
      image: "https://drive.google.com/file/d/1kAjsUzOwFomsYd5rUjD9dmX5FmjtVlp9/view?usp=sharing?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Akshat",
      //role: "CTO",
      //bio: "Former Google engineer specializing in AI/ML and cloud infrastructure. 10+ years in tech.",
      image: "https://drive.google.com/file/d/1PYthrLeHRU6lWrx6ub9xlmXlWBStjNx6/view?usp=sharing?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Anmol",
      //role: "Head of Operations",
      //bio: "Rural development expert with experience at NGOs across 15 states in India.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Ishika Walia",
      //role: "Head of Operations",
      //bio: "Rural development expert with experience at NGOs across 15 states in India.",
      image: "https://drive.google.com/file/d/1MvB1mTU6xTSNeYReAKYLP6JhBbvLr013/view?usp=sharing?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Kavya",
      //role: "Head of Operations",
      //bio: "Rural development expert with experience at NGOs across 15 states in India.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const testimonials = [
    {
      name: "Meera Devi",
      location: "Rajasthan",
      age: 28,
      quote: "SunoSakhi gave me the confidence to understand my body. I can now help other women in my village too.",
      rating: 5
    },
    {
      name: "Lakshmi",
      location: "Tamil Nadu",
      age: 22,
      quote: "I was scared to ask anyone about periods. SunoSakhi answered all my questions without any judgment.",
      rating: 5
    },
    {
      name: "Kavita Sharma",
      location: "Uttar Pradesh",
      age: 35,
      quote: "This service helped me understand when to seek medical help. It potentially saved my daughter's life.",
      rating: 5
    },
    {
      name: "Ruma Begum",
      location: "West Bengal",
      age: 24,
      quote: "Speaking in my own language made me feel comfortable. SunoSakhi is like having a wise sister to talk to.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-rose-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-6 bg-pink-100 text-pink-800 hover:bg-pink-200">
            Social Impact AI Solution
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            SunoSakhi
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Empowering rural women with AI-powered reproductive health information through voice-accessible technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3">
              Support the Mission <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 border-pink-300 text-pink-700 hover:bg-pink-50">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold text-pink-600">50K+</div>
              <div className="text-gray-600">Women Reached</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600">12</div>
              <div className="text-gray-600">Languages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-700">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Critical Problem</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Millions of rural women in India lack access to basic reproductive health information, leading to preventable health complications and perpetuating cycles of inequality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <Card className="p-6 text-center bg-red-50 border-red-200">
                  <div className="text-3xl font-bold text-red-600 mb-2">70%</div>
                  <div className="text-sm text-gray-700">of rural women lack menstrual health knowledge</div>
                </Card>
                <Card className="p-6 text-center bg-orange-50 border-orange-200">
                  <div className="text-3xl font-bold text-orange-600 mb-2">400M</div>
                  <div className="text-sm text-gray-700">women without internet access</div>
                </Card>
                <Card className="p-6 text-center bg-yellow-50 border-yellow-200">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">60%</div>
                  <div className="text-sm text-gray-700">avoid seeking reproductive health care</div>
                </Card>
                <Card className="p-6 text-center bg-purple-50 border-purple-200">
                  <div className="text-3xl font-bold text-purple-600 mb-2">25%</div>
                  <div className="text-sm text-gray-700">of maternal deaths are preventable</div>
                </Card>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 bg-white shadow-lg">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "I wish I had someone to talk to about these problems. The doctor is too far and I'm too embarrassed to ask anyone in my village."
                </blockquote>
                <div className="text-sm text-gray-600">- Sunita, 24, Rural Rajasthan</div>
              </Card>
              
              <Card className="p-6 bg-white shadow-lg">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "My daughter suffered because we didn't know what was normal. If only there was a way to get reliable information in our language."
                </blockquote>
                <div className="text-sm text-gray-600">- Kamala, 45, Rural Bihar</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How SunoSakhi Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How SunoSakhi Works</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A simple phone call connects rural women to AI-powered health information in their native language
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="font-semibold mb-2">1. Call</h3>
              <p className="text-sm text-gray-600">User dials our toll-free number from any phone</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="font-semibold mb-2">2. Transcribe</h3>
              <p className="text-sm text-gray-600">Speech converted to text via Google Cloud</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-pink-700" />
              </div>
              <h3 className="font-semibold mb-2">3. Translate</h3>
              <p className="text-sm text-gray-600">Question translated to English for processing</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-rose-700" />
              </div>
              <h3 className="font-semibold mb-2">4. Generate</h3>
              <p className="text-sm text-gray-600">AI creates empathetic, medically accurate response</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-pink-800" />
              </div>
              <h3 className="font-semibold mb-2">5. Respond</h3>
              <p className="text-sm text-gray-600">Answer translated back and spoken in user's language</p>
            </div>
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Accessible to Everyone</h3>
            <p className="text-lg text-gray-700 mb-6">No smartphone, internet, or literacy required - just a simple phone call</p>
            <div className="flex justify-center space-x-6">
              <Badge variant="secondary" className="px-4 py-2 bg-pink-100 text-pink-800">Voice-Only Interface</Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-rose-100 text-rose-800">12 Local Languages</Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-pink-200 text-pink-900">24/7 Available</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-25 to-rose-25">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Women Are Saying</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real stories from rural women whose lives have been transformed by access to reliable health information
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-pink-400">
                <div className="flex items-start mb-4">
                  <Quote className="h-8 w-8 text-pink-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-pink-600 text-sm">Age {testimonial.age} • {testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Thousands</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">4.8/5</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600 mb-2">89%</div>
                  <div className="text-sm text-gray-600">Recommend to Friends</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-700 mb-2">50K+</div>
                  <div className="text-sm text-gray-600">Calls Handled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-700 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Villages Reached</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Impact Vision</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Scaling reproductive health access across rural India through technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center bg-white shadow-lg">
              <Target className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Current Reach</h3>
              <div className="text-4xl font-bold text-pink-600 mb-2">50,000</div>
              <p className="text-gray-600">Women served across 500 villages</p>
            </Card>
            
            <Card className="p-8 text-center bg-white shadow-lg">
              <TrendingUp className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2025 Goal</h3>
              <div className="text-4xl font-bold text-rose-600 mb-2">1M</div>
              <p className="text-gray-600">Women across 5,000 villages in 10 states</p>
            </Card>
            
            <Card className="p-8 text-center bg-white shadow-lg">
              <Globe className="h-12 w-12 text-pink-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Vision 2030</h3>
              <div className="text-4xl font-bold text-pink-700 mb-2">10M</div>
              <p className="text-gray-600">Women across South Asia</p>
            </Card>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Metrics & Achievements</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">User Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">78%</div>
                <div className="text-sm text-gray-600">Return Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-700 mb-2">85%</div>
                <div className="text-sm text-gray-600">Accurate Responses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-700 mb-2">12</div>
                <div className="text-sm text-gray-600">Languages Supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experienced professionals passionate about technology for social good
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-pink-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call for Support */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-600 to-rose-700 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Partner with us to scale reproductive health access across rural communities. Together, we can save lives and empower millions of women.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <Shield className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Investors</h3>
              <p className="mb-4 opacity-90">Join our Series A round to scale across India</p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-pink-600">
                Investment Deck
              </Button>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <Heart className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">NGO Partners</h3>
              <p className="mb-4 opacity-90">Collaborate to reach underserved communities</p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-rose-600">
                Partnership Info
              </Button>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <Target className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Grant Funders</h3>
              <p className="mb-4 opacity-90">Support research and community impact</p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-pink-600">
                Grant Proposals
              </Button>
            </Card>
          </div>
          
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3">
            Schedule a Meeting <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-700">
              Key questions from investors and partners
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 bg-white shadow-lg">
                <button
                  className="w-full text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-700">
              Ready to support our mission? Let's start the conversation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-pink-600 mr-3" />
                  <span>hello@sunosakhi.org</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-pink-600 mr-3" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-pink-600 mr-3" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Media & Press</h4>
                <p className="text-gray-600 mb-4">
                  For media inquiries and press coverage opportunities.
                </p>
                <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50">
                  Media Kit
                </Button>
              </div>
            </div>
            
            <Card className="p-6 bg-white shadow-lg">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization
                  </label>
                  <Input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    className="w-full focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">SunoSakhi</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Empowering rural women through AI-powered reproductive health information
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <Button variant="ghost" className="text-white hover:text-pink-400">
                Privacy Policy
              </Button>
              <Button variant="ghost" className="text-white hover:text-pink-400">
                Terms of Service
              </Button>
              <Button variant="ghost" className="text-white hover:text-pink-400">
                Impact Report
              </Button>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2024 SunoSakhi. All rights reserved. | Registered NGO in India
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
