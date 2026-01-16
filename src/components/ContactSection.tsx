import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import axios from 'axios';

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const Email = email;
    const Name = name;
    const Phone = phone;
    const Message = message;

    try {
      const response = await axios.post('https://red-ant-pro-farms.vercel.app/api/send-email', {
        Email,
        Name,
        Phone,
        Message,
      });

      alert("Your request has been sent successfully!");

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error('There was an error sending the request:', error);
      alert('Failed to send request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider rounded mb-4">
              Get In Touch
            </span>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              READY TO
              <br />
              <span className="text-primary">GET STARTED?</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Contact us today for a free consultation and quote. Our team is ready
              to help you maximize your silage quality and farm productivity.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <a href="tel:+254724230663" className="text-muted-foreground hover:text-primary">
                    0724 230 663
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=antfarmservice@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    antfarmservice@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <span className="text-muted-foreground">Mulot</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Hours</div>
                  <span className="text-muted-foreground">
                    24/7 during harvest season
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="font-display text-2xl mb-6">REQUEST A QUOTE</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border"
              />

              <textarea
                rows={4}
                placeholder="Tell us about your farm and silage needs..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border resize-none"
              />

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit Request"}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
